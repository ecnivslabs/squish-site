import type { CartItem, Product, OrderStatus, Role } from "./types";

export const PREVIEW_SHIPPING = 79;
export const FREE_SHIPPING_THRESHOLD = 999;
export const shippingFor = (subtotal: number) =>
  subtotal >= FREE_SHIPPING_THRESHOLD || subtotal === 0 ? 0 : PREVIEW_SHIPPING;
export const permissions: Record<Role, readonly string[]> = {
  customer: [],
  owner: ["overview", "products", "inventory", "orders", "settings"],
  inventory: ["overview", "products", "inventory"],
  support: ["overview", "orders"],
};
export const statuses: OrderStatus[] = [
  "Confirmed",
  "Packed",
  "Shipped",
  "Delivered",
  "Cancelled",
];
export function canTransition(from: OrderStatus, to: OrderStatus) {
  if (from === to) return true;
  if (to === "Cancelled") return from === "Confirmed" || from === "Packed";
  return (
    statuses.indexOf(to) === statuses.indexOf(from) + 1 && from !== "Cancelled"
  );
}
export function validateCart(
  cart: CartItem[],
  products: Product[],
): string | null {
  if (!cart.length) return "Your bag is empty.";
  const seen = new Set<string>();
  for (const item of cart) {
    const key = `${item.productId}:${item.variantId}`;
    if (seen.has(key))
      return "Your bag contains duplicate items. Please update your bag.";
    seen.add(key);
    const product = products.find((p) => p.id === item.productId && p.active);
    const variant = product?.variants.find((v) => v.id === item.variantId);
    if (!product || !variant)
      return "An item is no longer available. Please update your bag.";
    if (
      !Number.isInteger(item.quantity) ||
      item.quantity < 1 ||
      item.quantity > variant.stock
    )
      return `Only ${variant.stock} ${product.name} (${variant.label}) available. Please update your bag.`;
  }
  return null;
}
export function cartSubtotal(cart: CartItem[], products: Product[]) {
  return cart.reduce(
    (sum, item) =>
      sum +
      (products.find((p) => p.id === item.productId)?.price ?? 0) *
        item.quantity,
    0,
  );
}
