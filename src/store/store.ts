import { useSyncExternalStore } from "react";
import { z } from "zod";
import { initialProducts } from "../domain/catalog";
import {
  cartSubtotal,
  canTransition,
  permissions,
  shippingFor,
  validateCart,
} from "../domain/commerce";
import {
  addressSchema,
  cartSchema,
  orderSchema,
  productSchema,
  userSchema,
} from "../domain/schemas";
import type {
  Address,
  Order,
  OrderStatus,
  Product,
  Role,
  StoreState,
} from "../domain/types";

const localSchema = z.object({
  products: z.array(productSchema).min(1),
  cart: cartSchema,
  wishlist: z.array(z.string()),
});
const sessionSchema = z.object({
  user: userSchema.nullable(),
  addresses: z.array(addressSchema),
  orders: z.array(orderSchema),
  movements: z
    .array(
      z.object({
        id: z.string(),
        product: z.string(),
        variant: z.string(),
        change: z.number().int(),
        stock: z.number().int().nonnegative(),
        reason: z.string(),
        date: z.iso.datetime(),
        actor: z.string(),
      }),
    )
    .default([]),
});
const LOCAL_KEY = "storefront.store.v2";
const SESSION_KEY = "storefront.session.v2";

class CommerceStore {
  private listeners = new Set<() => void>();
  private state: StoreState = {
    products: initialProducts,
    cart: [],
    wishlist: [],
    user: null,
    addresses: [],
    orders: [],
    movements: [],
  };
  private notice = "";

  constructor() {
    try {
      const local = localStorage.getItem(LOCAL_KEY);
      const session = sessionStorage.getItem(SESSION_KEY);
      if (local)
        Object.assign(this.state, localSchema.parse(JSON.parse(local)));
      if (session)
        Object.assign(this.state, sessionSchema.parse(JSON.parse(session)));
    } catch {
      this.notice =
        "Saved preview data could not be loaded. This tab is using a fresh session.";
    }
    window.addEventListener("storage", (event) => {
      if (event.key !== LOCAL_KEY || !event.newValue) return;
      try {
        this.state = {
          ...this.state,
          ...localSchema.parse(JSON.parse(event.newValue)),
        };
        this.emit();
      } catch {
        this.notify(
          "Another tab has incompatible data. Reload to start a fresh preview.",
        );
      }
    });
  }

  subscribe = (listener: () => void) => {
    this.listeners.add(listener);
    return () => {
      this.listeners.delete(listener);
    };
  };
  getSnapshot = () => this.state;
  getNotice = () => this.notice;
  private emit() {
    this.listeners.forEach((listener) => listener());
  }
  notify(message: string) {
    this.notice = message;
    this.emit();
  }
  clearNotice() {
    this.notice = "";
    this.emit();
  }

  private update(next: StoreState) {
    this.state = next;
    try {
      localStorage.setItem(
        LOCAL_KEY,
        JSON.stringify({
          products: next.products,
          cart: next.cart,
          wishlist: next.wishlist,
        }),
      );
      sessionStorage.setItem(
        SESSION_KEY,
        JSON.stringify({
          user: next.user,
          addresses: next.addresses,
          orders: next.orders,
          movements: next.movements,
        }),
      );
    } catch {
      this.notice =
        "Browser storage is unavailable or full. Changes work in this tab but may not survive a reload.";
    }
    this.emit();
  }

  addToCart(productId: string, variantId: string, quantity = 1) {
    const product = this.state.products.find(
      (p) => p.id === productId && p.active,
    );
    const variant = product?.variants.find((v) => v.id === variantId);
    if (!product || !variant)
      throw new Error("This item is no longer available.");
    const old = this.state.cart.find(
      (i) => i.productId === productId && i.variantId === variantId,
    );
    const amount = (old?.quantity ?? 0) + quantity;
    if (!Number.isInteger(amount) || quantity < 1 || amount > variant.stock)
      throw new Error(`Only ${variant.stock} available in ${variant.label}.`);
    const cart = old
      ? this.state.cart.map((i) => (i === old ? { ...i, quantity: amount } : i))
      : [...this.state.cart, { productId, variantId, quantity }];
    this.update({ ...this.state, cart });
  }

  setQuantity(productId: string, variantId: string, quantity: number) {
    if (!Number.isInteger(quantity) || quantity < 0)
      throw new Error("Quantity must be a whole number.");
    const product = this.state.products.find(
      (p) => p.id === productId && p.active,
    );
    const stock = product?.variants.find((v) => v.id === variantId)?.stock ?? 0;
    if (quantity > stock)
      throw new Error(`Only ${stock} available. Please reduce the quantity.`);
    const cart = this.state.cart.flatMap((i) =>
      i.productId === productId && i.variantId === variantId
        ? quantity
          ? [{ ...i, quantity }]
          : []
        : [i],
    );
    this.update({ ...this.state, cart });
  }

  toggleWishlist(productId: string) {
    const wishlist = this.state.wishlist.includes(productId)
      ? this.state.wishlist.filter((id) => id !== productId)
      : [...this.state.wishlist, productId];
    this.update({ ...this.state, wishlist });
  }

  signIn(name: string, email: string, role: Role = "customer") {
    const user = userSchema.parse({
      id: email.toLowerCase(),
      name: name.trim(),
      email: email.trim().toLowerCase(),
      role,
    });
    this.update({ ...this.state, user });
  }
  signOut() {
    this.update({ ...this.state, user: null });
  }
  updateProfile(name: string) {
    if (!this.state.user) throw new Error("Please sign in first.");
    const user = userSchema.parse({ ...this.state.user, name: name.trim() });
    this.update({ ...this.state, user });
  }
  saveAddress(input: Address) {
    if (!this.state.user || input.ownerEmail !== this.state.user.email)
      throw new Error("Please sign in to save this address.");
    const address = addressSchema.parse(input);
    const addresses = this.state.addresses.filter((a) => a.id !== address.id);
    this.update({ ...this.state, addresses: [...addresses, address] });
  }
  deleteAddress(id: string) {
    this.update({
      ...this.state,
      addresses: this.state.addresses.filter(
        (a) => !(a.id === id && a.ownerEmail === this.state.user?.email),
      ),
    });
  }

  placeOrder(email: string, input: Address): Order {
    const invalid = validateCart(this.state.cart, this.state.products);
    if (invalid) throw new Error(invalid);
    const address = addressSchema.parse({
      ...input,
      ownerEmail: email.toLowerCase(),
    });
    const subtotal = cartSubtotal(this.state.cart, this.state.products);
    const shipping = shippingFor(subtotal);
    const date = new Date().toISOString();
    const order: Order = {
      id: `ORDER-${crypto.randomUUID().slice(0, 8).toUpperCase()}`,
      email: z.email().parse(email.trim().toLowerCase()),
      date,
      address,
      subtotal,
      shipping,
      total: subtotal + shipping,
      status: "Confirmed",
      tracking: "",
      carrier: "",
      items: this.state.cart.map((item) => {
        const product = this.state.products.find(
          (p) => p.id === item.productId,
        )!;
        const variant = product.variants.find((v) => v.id === item.variantId)!;
        return {
          ...item,
          name: product.name,
          variant: variant.label,
          price: product.price,
          color: variant.color,
          character: product.character,
        };
      }),
      events: [
        {
          status: "Confirmed",
          date,
          note: "Preview order created. No payment was taken and no shipment will be made.",
        },
      ],
    };
    const products = this.state.products.map((product) => ({
      ...product,
      variants: product.variants.map((variant) => ({
        ...variant,
        stock:
          variant.stock -
          (this.state.cart.find(
            (i) => i.productId === product.id && i.variantId === variant.id,
          )?.quantity ?? 0),
      })),
    }));
    const movements = order.items.map((item) => ({
      id: crypto.randomUUID(),
      product: item.name,
      variant: item.variant,
      change: -item.quantity,
      stock: products
        .find((p) => p.id === item.productId)!
        .variants.find((v) => v.id === item.variantId)!.stock,
      reason: `Preview order ${order.id}`,
      date,
      actor: email,
    }));
    this.update({
      ...this.state,
      products,
      cart: [],
      orders: [order, ...this.state.orders],
      movements: [...movements, ...this.state.movements],
    });
    return order;
  }

  private requirePermission(permission: string) {
    if (
      !this.state.user ||
      !permissions[this.state.user.role].includes(permission)
    )
      throw new Error("Your preview role does not have access to this action.");
  }
  saveProduct(input: Product) {
    this.requirePermission("products");
    const product = productSchema.parse(input);
    const previous = this.state.products.find((item) => item.id === product.id);
    const movements = product.variants.flatMap((variant) => {
      const before =
        previous?.variants.find((item) => item.id === variant.id)?.stock ?? 0;
      return before === variant.stock
        ? []
        : [
            {
              id: crypto.randomUUID(),
              product: product.name,
              variant: variant.label,
              change: variant.stock - before,
              stock: variant.stock,
              reason: previous
                ? "Product editor stock update"
                : "Initial product stock",
              date: new Date().toISOString(),
              actor: this.state.user!.email,
            },
          ];
    });
    this.update({
      ...this.state,
      products: this.state.products.some((p) => p.id === product.id)
        ? this.state.products.map((p) => (p.id === product.id ? product : p))
        : [...this.state.products, product],
      movements: [...movements, ...this.state.movements],
    });
  }
  adjustStock(
    productId: string,
    variantId: string,
    amount: number,
    reason: string,
  ) {
    this.requirePermission("inventory");
    if (!Number.isInteger(amount) || amount < 0 || amount > 100000)
      throw new Error("Stock must be a whole number between 0 and 100,000.");
    if (reason.trim().length < 3)
      throw new Error("Add a short reason for this stock adjustment.");
    const product = this.state.products.find((p) => p.id === productId);
    const variant = product?.variants.find((v) => v.id === variantId);
    if (!product || !variant) throw new Error("Product or variant not found.");
    const movement = {
      id: crypto.randomUUID(),
      product: product.name,
      variant: variant.label,
      change: amount - variant.stock,
      stock: amount,
      reason: reason.trim(),
      date: new Date().toISOString(),
      actor: this.state.user!.email,
    };
    this.update({
      ...this.state,
      products: this.state.products.map((p) =>
        p.id === productId
          ? {
              ...p,
              variants: p.variants.map((v) =>
                v.id === variantId ? { ...v, stock: amount } : v,
              ),
            }
          : p,
      ),
      movements: [movement, ...this.state.movements],
    });
  }
  updateOrder(
    id: string,
    status: OrderStatus,
    tracking: string,
    carrier: string,
  ) {
    this.requirePermission("orders");
    const order = this.state.orders.find((o) => o.id === id);
    if (!order) throw new Error("Order not found.");
    if (!canTransition(order.status, status))
      throw new Error("This status change is not allowed.");
    if (
      (status === "Shipped" || status === "Delivered") &&
      (!tracking.trim() || !carrier.trim())
    )
      throw new Error(
        "Add a carrier and tracking number before marking this order as shipped.",
      );
    const updated = {
      ...order,
      status,
      tracking: tracking.trim(),
      carrier: carrier.trim(),
      events:
        status === order.status
          ? order.events
          : [
              ...order.events,
              {
                status,
                date: new Date().toISOString(),
                note: `Preview order marked ${status.toLowerCase()}.`,
              },
            ],
    };
    let products = this.state.products;
    let movements = this.state.movements;
    if (status === "Cancelled" && order.status !== "Cancelled") {
      products = products.map((p) => ({
        ...p,
        variants: p.variants.map((v) => ({
          ...v,
          stock:
            v.stock +
            (order.items.find(
              (i) => i.productId === p.id && i.variantId === v.id,
            )?.quantity ?? 0),
        })),
      }));
      const restored = order.items.flatMap((item) => {
        const variant = products
          .find((product) => product.id === item.productId)
          ?.variants.find((variant) => variant.id === item.variantId);
        return variant
          ? [
              {
                id: crypto.randomUUID(),
                product: item.name,
                variant: item.variant,
                change: item.quantity,
                stock: variant.stock,
                reason: `Cancelled preview order ${order.id}`,
                date: new Date().toISOString(),
                actor: this.state.user!.email,
              },
            ]
          : [];
      });
      movements = [...restored, ...movements];
    }
    this.update({
      ...this.state,
      products,
      movements,
      orders: this.state.orders.map((o) => (o.id === id ? updated : o)),
    });
  }
}

export const store = new CommerceStore();
export const useStore = () =>
  useSyncExternalStore(store.subscribe, store.getSnapshot);
export const useNotice = () =>
  useSyncExternalStore(store.subscribe, store.getNotice);
