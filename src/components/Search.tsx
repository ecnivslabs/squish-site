import { Search as SearchIcon } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Dialog, useUI } from "./ui";
import { useStore } from "../store/store";
import { money } from "../domain/catalog";
import { ProductImage } from "./CharacterArt";

export function SearchDialog() {
  const { searchOpen, setSearchOpen } = useUI();
  const { products } = useStore();
  const [query, setQuery] = useState("");
  const matches = products.filter(
    (p) =>
      p.active &&
      `${p.name} ${p.subtitle} ${p.category}`
        .toLowerCase()
        .includes(query.trim().toLowerCase()),
  );
  return (
    <Dialog
      open={searchOpen}
      onClose={() => setSearchOpen(false)}
      title="Find your little favourite"
      className="search-dialog"
    >
      <div className="search-field">
        <SearchIcon size={21} />
        <input
          aria-label="Search squishies"
          placeholder="Butter, cheese, pancakes…"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          autoComplete="off"
        />
      </div>
      <p className="small">
        {query
          ? `${matches.length} matching ${matches.length === 1 ? "squishy" : "squishies"}`
          : "A few characters to get you started"}
      </p>
      <div className="search-results">
        {matches.slice(0, 6).map((product) => (
          <Link
            key={product.id}
            to={`/shop/${product.id}`}
            onClick={() => setSearchOpen(false)}
          >
            <div
              style={{
                background: `color-mix(in srgb, ${product.background} 28%, var(--cream))`,
              }}
            >
              <ProductImage
                id={product.id}
                character={product.character}
                color={product.color}
                name={product.name}
              />
            </div>
            <span>
              <strong>{product.name}</strong>
              <small>{product.subtitle}</small>
            </span>
            <strong>{money(product.price)}</strong>
          </Link>
        ))}
      </div>
      {!matches.length && (
        <p className="empty-message">
          No little friends found. Try “butter” or browse all squishies.
        </p>
      )}
      <Link
        className="text-link"
        to={`/shop?q=${encodeURIComponent(query)}`}
        onClick={() => setSearchOpen(false)}
      >
        Browse all results
      </Link>
    </Dialog>
  );
}
