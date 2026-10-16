import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowUpRight,
  Check,
  ChevronRight,
  Heart,
  Info,
  ShoppingBag,
  Truck,
} from "lucide-react";
import { store, useStore } from "../store/store";
import { money } from "../domain/catalog";
import {
  ButtonLink,
  EmptyState,
  Quantity,
  errorMessage,
  usePageTitle,
  useUI,
} from "../components/ui";
import { ProductMedia } from "../components/ProductMedia";
import { ProductCard } from "../components/ProductCard";

export default function ProductPage() {
  const { id } = useParams();
  const { products, wishlist, cart } = useStore();
  const product = products.find((p) => p.id === id && p.active);
  usePageTitle(product?.name ?? "Squishy not found");
  const [selected, setSelected] = useState("");
  const [quantity, setQuantity] = useState(1);
  const { toast, setCartOpen } = useUI();
  if (!product)
    return (
      <div className="page shell">
        <EmptyState title="This little friend wandered off.">
          The squishy you’re looking for isn’t available. Browse the collection
          for another little personality.
        </EmptyState>
      </div>
    );
  const variant =
    product.variants.find((v) => v.id === selected) ??
    product.variants.find((v) => v.stock > 0) ??
    product.variants[0];
  const alreadyInBag =
    cart.find((i) => i.productId === product.id && i.variantId === variant.id)
      ?.quantity ?? 0;
  const available = variant.stock - alreadyInBag;
  const saved = wishlist.includes(product.id);
  function add() {
    if (!product) return;
    try {
      store.addToCart(product.id, variant.id, quantity);
      setCartOpen(true);
    } catch (error) {
      toast(errorMessage(error));
    }
  }
  return (
    <div className="product-page shell">
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <Link to="/">Home</Link>
        <ChevronRight size={13} />
        <Link to="/shop">The squish shop</Link>
        <ChevronRight size={13} />
        <span>{product.name}</span>
      </nav>
      <div className="product-layout">
        <ProductMedia
          key={product.id}
          product={product}
          color={variant.color}
        />
        <div className="product-details">
          <span className="section-kicker">{product.category}</span>
          <h1>{product.name}</h1>
          <p className="product-subtitle">{product.subtitle}.</p>
          <p className="product-price">
            {money(product.price)}{" "}
            <span>Sample price, inclusive of preview taxes</span>
          </p>
          <p>
            {product.category === "Little pals"
              ? "A little character for your world."
              : "A food-inspired little find. All squish, no bites."}{" "}
            Find a spot for {product.name}.
          </p>
          <fieldset className="variant-fieldset">
            <legend>
              Colour: <strong>{variant.label}</strong>
            </legend>
            <div className="variant-swatches">
              {product.variants.map((v) => (
                <button
                  type="button"
                  key={v.id}
                  className={variant.id === v.id ? "selected" : ""}
                  style={{ backgroundColor: v.color }}
                  aria-label={`${v.label}${v.stock ? "" : ", out of stock"}`}
                  aria-pressed={variant.id === v.id}
                  onClick={() => {
                    setSelected(v.id);
                    setQuantity(1);
                  }}
                >
                  {variant.id === v.id && <Check size={19} />}
                </button>
              ))}
            </div>
          </fieldset>
          <p className={`availability ${available > 0 ? "" : "unavailable"}`}>
            <span />
            {variant.stock
              ? available > 0
                ? "Available in this preview"
                : "All available units are in your bag"
              : "This little one is taking a nap. Out of stock."}
          </p>
          <div className="product-buy">
            <Quantity value={quantity} max={available} onChange={setQuantity} />
            <button
              className="button"
              disabled={available < quantity || available < 1}
              onClick={add}
            >
              <ShoppingBag size={18} />
              {variant.stock ? "Add to bag" : "Out of stock"}
            </button>
            <button
              className={`icon-button save-product ${saved ? "saved" : ""}`}
              onClick={() => store.toggleWishlist(product.id)}
              aria-pressed={saved}
              aria-label={
                saved ? "Remove from favourites" : "Save to favourites"
              }
            >
              <Heart size={22} fill={saved ? "currentColor" : "none"} />
            </button>
          </div>
          <div className="product-delivery">
            <Truck size={20} />
            <p>
              Delivery within India.
              <br />
              <span>
                Final availability and timing confirmed at live checkout.
              </span>
            </p>
          </div>
          <div className="product-disclosure">
            <Info size={18} />
            <p>
              Preview catalog. Product photos, dimensions, age
              guidance, and care instructions are pending confirmation.
            </p>
          </div>
          <div className="faq-list product-accordions">
            <details open>
              <summary>
                A little about this one<span>+</span>
              </summary>
              <p>{product.description}</p>
            </details>
            <details>
              <summary>
                Material & product information<span>+</span>
              </summary>
              <p>
                Imported TPR (thermoplastic rubber) squishy fidget toys. Not
                edible. Product-specific care instructions, age guidance, and
                warnings will be published with the final catalog.
              </p>
            </details>
            <details>
              <summary>
                Shipping & delivery<span>+</span>
              </summary>
              <p>
                Items are sourced internationally. Dispatch estimates, import
                considerations, and final delivery rates will be confirmed
                before live ordering is enabled.{" "}
                <Link to="/shipping">Read delivery information.</Link>
              </p>
            </details>
            <details>
              <summary>
                Sales & support<span>+</span>
              </summary>
              <p>
                All sales are final. No returns, refunds, or exchanges for
                change of mind, except where required by law. For an incorrect
                or damaged delivery, email{" "}
                <a href="mailto:support@mallow.example">support@mallow.example</a>.{" "}
                <Link to="/policies/sales">Read the sales policy.</Link>
              </p>
            </details>
          </div>
        </div>
      </div>
      <section className="related-products">
        <div className="section-heading">
          <div>
            <span className="section-kicker">
              Good company for your little friend
            </span>
            <h2>A few more personalities.</h2>
          </div>
          <ButtonLink to="/shop" secondary>
            All squishies <ArrowUpRight size={18} />
          </ButtonLink>
        </div>
        <div className="featured-products">
          {products
            .filter((p) => p.active && p.id !== id)
            .slice(0, 4)
            .map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
        </div>
      </section>
    </div>
  );
}
