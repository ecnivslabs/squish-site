import { Heart, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import type { Product } from "../domain/types";
import { money, totalStock } from "../domain/catalog";
import { store, useStore } from "../store/store";
import { ProductImage } from "./CharacterArt";
import { errorMessage, useUI } from "./ui";

export function ProductCard({ product }: { product: Product }) {
  const { wishlist } = useStore();
  const { toast, setCartOpen } = useUI();
  const saved = wishlist.includes(product.id);
  const available = totalStock(product) > 0;
  function add() {
    const variant = product.variants.find((v) => v.stock > 0);
    if (!variant) return;
    try {
      store.addToCart(product.id, variant.id);
      setCartOpen(true);
    } catch (error) {
      toast(errorMessage(error));
    }
  }
  return (
    <article className="product-card" data-reveal>
      <div
        className="product-visual"
        style={{
          backgroundColor: `color-mix(in srgb, ${product.background} 28%, var(--cream))`,
        }}
      >
        <Link to={`/shop/${product.id}`} aria-label={`View ${product.name}`}>
          <ProductImage
            id={product.id}
            character={product.character}
            color={product.color}
            name={product.name}
          />
        </Link>
        <button
          className={`icon-button favourite ${saved ? "saved" : ""}`}
          aria-label={`${saved ? "Remove" : "Save"} ${product.name}${saved ? " from" : " to"} favourites`}
          aria-pressed={saved}
          onClick={() => store.toggleWishlist(product.id)}
        >
          <Heart size={19} fill={saved ? "currentColor" : "none"} />
        </button>
        {!available && <span className="stock-label">Taking a nap</span>}
      </div>
      <div className="product-info">
        <div>
          <h3>
            <Link to={`/shop/${product.id}`}>{product.name}</Link>
          </h3>
          <p>{product.subtitle}</p>
          <strong>{money(product.price)}</strong>
        </div>
        <button
          className="add-button"
          aria-label={`Add ${product.name} to bag`}
          disabled={!available}
          onClick={add}
        >
          <Plus size={22} />
        </button>
      </div>
    </article>
  );
}
