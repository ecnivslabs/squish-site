import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { useStore } from "../store/store";
import { categories, totalStock } from "../domain/catalog";
import { ProductCard } from "../components/ProductCard";
import { Daisy, EmptyState, usePageTitle } from "../components/ui";

export default function Shop({ favourites = false }: { favourites?: boolean }) {
  usePageTitle(favourites ? "Your favourites" : "The squish shop");
  const { products, wishlist } = useStore();
  const [params, setParams] = useSearchParams();
  const [filters, setFilters] = useState(false);
  const category = params.get("category") ?? "All squishies";
  const query = params.get("q") ?? "";
  const sort = params.get("sort") ?? "featured";
  const inStock = params.get("stock") === "available";
  const priceLimit = Math.max(
    1000,
    ...products.map((product) => product.price),
  );
  const requestedPrice = Number(params.get("max") ?? priceLimit);
  const maxPrice = Number.isFinite(requestedPrice)
    ? Math.max(100, Math.min(priceLimit, requestedPrice))
    : priceLimit;
  function set(key: string, value: string) {
    const next = new URLSearchParams(params);
    if (value) next.set(key, value);
    else next.delete(key);
    setParams(next, { replace: true });
  }
  const filtered = products
    .filter(
      (p) =>
        p.active &&
        (!favourites || wishlist.includes(p.id)) &&
        (category === "All squishies" || p.category === category) &&
        `${p.name} ${p.subtitle} ${p.category}`
          .toLowerCase()
          .includes(query.toLowerCase()) &&
        (!inStock || totalStock(p) > 0) &&
        p.price <= maxPrice,
    )
    .sort((a, b) =>
      sort === "price-low"
        ? a.price - b.price
        : sort === "price-high"
          ? b.price - a.price
          : sort === "name"
            ? a.name.localeCompare(b.name)
            : Number(b.featured) - Number(a.featured),
    );
  return (
    <div className="shop-page">
      <div className="shop-intro shell">
        <div>
          <span className="section-kicker">
            {favourites ? "Your own little shortlist" : "The Mallow Club menu"}
          </span>
          <h1>{favourites ? "Your favourites." : "The squish shop."}</h1>
          <p>
            {favourites
              ? "The little faces you came back for."
              : "Imported TPR squishy toys. Butter, cheese, pancakes, and little treats for your everyday breaks."}
          </p>
        </div>
        <Daisy />
      </div>
      <section className="shell shop-catalog">
        <div
          className="category-tabs"
          role="group"
          aria-label="Product category"
        >
          {categories.map((name) => (
            <button
              key={name}
              className={category === name ? "active" : ""}
              aria-pressed={category === name}
              onClick={() =>
                set("category", name === "All squishies" ? "" : name)
              }
            >
              {name}
            </button>
          ))}
        </div>
        <div className="catalog-toolbar">
          <div className="search-field compact">
            <Search size={18} />
            <input
              aria-label="Search the collection"
              placeholder="Find a little friend…"
              value={query}
              onChange={(e) => set("q", e.target.value)}
            />
            {query && (
              <button aria-label="Clear search" onClick={() => set("q", "")}>
                <X size={16} />
              </button>
            )}
          </div>
          <button
            className={`filter-toggle ${filters ? "active" : ""}`}
            aria-expanded={filters}
            aria-controls="shop-filters"
            onClick={() => setFilters(!filters)}
          >
            <SlidersHorizontal size={17} /> Filters
          </button>
          <label className="sort-label">
            <span className="sr-only">Sort products</span>
            <select value={sort} onChange={(e) => set("sort", e.target.value)}>
              <option value="featured">Featured first</option>
              <option value="price-low">Price: low to high</option>
              <option value="price-high">Price: high to low</option>
              <option value="name">Name: A to Z</option>
            </select>
          </label>
        </div>
        {filters && (
          <div className="filter-panel" id="shop-filters">
            <label className="checkbox">
              <input
                type="checkbox"
                checked={inStock}
                onChange={(e) =>
                  set("stock", e.target.checked ? "available" : "")
                }
              />{" "}
              In stock only
            </label>
            <label className="range-label">
              Up to ₹{maxPrice}
              <input
                aria-label="Maximum price"
                type="range"
                min="100"
                max={priceLimit}
                step="50"
                value={maxPrice}
                onChange={(e) => set("max", e.target.value)}
              />
            </label>
            <button className="text-link" onClick={() => setParams({})}>
              Clear all filters
            </button>
          </div>
        )}
        <p className="results-count" role="status">
          {filtered.length} little{" "}
          {filtered.length === 1 ? "personality" : "personalities"}
          <span>Sample catalog. Prices and visuals are placeholders.</span>
        </p>
        {filtered.length ? (
          <div className="product-grid">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <EmptyState
            title={
              favourites && !wishlist.length
                ? "Love at first squish?"
                : "No little friends found."
            }
          >
            {favourites && !wishlist.length
              ? "Tap the heart on a squishy to save it here."
              : "Try another search or clear your filters."}
          </EmptyState>
        )}
      </section>
    </div>
  );
}
