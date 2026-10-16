import { Link, useNavigate } from "react-router-dom";
import { ArrowUpRight, ShoppingBag, Trash2, Truck } from "lucide-react";
import { store, useStore } from "../store/store";
import { money } from "../domain/catalog";
import {
  cartSubtotal,
  FREE_SHIPPING_THRESHOLD,
  shippingFor,
} from "../domain/commerce";
import { ProductImage } from "./CharacterArt";
import { Dialog, EmptyState, Quantity, errorMessage, useUI } from "./ui";

export function CartContents({ drawer = false }: { drawer?: boolean }) {
  const { cart, products } = useStore();
  const { setCartOpen, toast } = useUI();
  const navigate = useNavigate();
  const subtotal = cartSubtotal(cart, products);
  const shipping = shippingFor(subtotal);
  function remove(productId: string, variantId: string) {
    store.setQuantity(productId, variantId, 0);
  }
  if (!cart.length)
    return (
      <EmptyState title="A little empty in here">
        Your next little companion is waiting. Find one you love.
      </EmptyState>
    );
  return (
    <div className={`cart-content ${drawer ? "cart-in-drawer" : ""}`}>
      <div className="shipping-meter">
        <p>
          <Truck size={18} />
          {subtotal >= FREE_SHIPPING_THRESHOLD ? (
            "You reached the preview free delivery threshold."
          ) : (
            <span>
              {money(FREE_SHIPPING_THRESHOLD - subtotal)} away from preview free
              delivery
            </span>
          )}
        </p>
        <progress
          value={Math.min(subtotal, FREE_SHIPPING_THRESHOLD)}
          max={FREE_SHIPPING_THRESHOLD}
        />
        <span className="small">
          Sample delivery rates. Confirmed before launch.
        </span>
      </div>
      <div className="cart-items">
        {cart.map((item) => {
          const product = products.find((p) => p.id === item.productId);
          const variant = product?.variants.find(
            (v) => v.id === item.variantId,
          );
          if (!product || !variant)
            return (
              <div
                className="cart-item"
                key={`${item.productId}:${item.variantId}`}
              >
                <p>Item no longer available.</p>
                <button
                  className="text-link"
                  onClick={() => remove(item.productId, item.variantId)}
                >
                  Remove
                </button>
              </div>
            );
          return (
            <div
              className="cart-item"
              key={`${item.productId}:${item.variantId}`}
            >
              <Link
                to={`/shop/${product.id}`}
                className="cart-thumbnail"
                style={{
                  background: `color-mix(in srgb, ${product.background} 28%, var(--cream))`,
                }}
                onClick={() => setCartOpen(false)}
              >
                <ProductImage
                  id={product.id}
                  character={product.character}
                  color={variant.color}
                  name={product.name}
                />
              </Link>
              <div className="cart-item-detail">
                <Link
                  className="display-small"
                  to={`/shop/${product.id}`}
                  onClick={() => setCartOpen(false)}
                >
                  {product.name}
                </Link>
                <span>{variant.label}</span>
                <Quantity
                  value={item.quantity}
                  max={variant.stock}
                  onChange={(quantity) => {
                    try {
                      store.setQuantity(product.id, variant.id, quantity);
                    } catch (error) {
                      toast(errorMessage(error));
                    }
                  }}
                />
                {(item.quantity > variant.stock || !product.active) && (
                  <span className="error-text">
                    {!product.active
                      ? "Item unavailable. Remove to continue."
                      : `Only ${variant.stock} available. Reduce quantity.`}
                  </span>
                )}
              </div>
              <div className="cart-item-end">
                <strong>{money(product.price * item.quantity)}</strong>
                <button
                  className="icon-button"
                  aria-label={`Remove ${product.name} from bag`}
                  onClick={() => remove(product.id, variant.id)}
                >
                  <Trash2 size={17} />
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="cart-summary">
        <div>
          <span>Subtotal</span>
          <strong>{money(subtotal)}</strong>
        </div>
        <div>
          <span>Delivery estimate</span>
          <span>{shipping ? money(shipping) : "Free"}</span>
        </div>
        <div className="summary-total">
          <span>Total</span>
          <strong>{money(subtotal + shipping)}</strong>
        </div>
        <p className="small">
          INR. Sample prices include preview taxes. No payment will be taken.
        </p>
        <button
          className="button full"
          onClick={() => {
            setCartOpen(false);
            navigate("/checkout");
          }}
        >
          Continue to checkout <ArrowUpRight size={19} />
        </button>
        {drawer && (
          <Link
            className="text-link centered"
            to="/bag"
            onClick={() => setCartOpen(false)}
          >
            View shopping bag
          </Link>
        )}
        <p className="small policy-note">
          All sales final. No returns, refunds, or exchanges, except where
          required by law.
        </p>
      </div>
    </div>
  );
}

export function CartDrawer() {
  const { cartOpen, setCartOpen } = useUI();
  const { cart } = useStore();
  return (
    <Dialog
      open={cartOpen}
      onClose={() => setCartOpen(false)}
      title={`Your bag (${cart.reduce((sum, i) => sum + i.quantity, 0)})`}
      drawer
    >
      <CartContents drawer />
    </Dialog>
  );
}
export function BagPage() {
  return (
    <div className="page shell bag-page">
      <div className="page-heading">
        <ShoppingBag size={28} />
        <h1>Your little haul</h1>
        <p>Good company, coming right up.</p>
      </div>
      <CartContents />
    </div>
  );
}
