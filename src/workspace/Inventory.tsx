import { useState, type FormEvent } from "react";
import { Download, Pencil, Search } from "lucide-react";
import { store, useStore } from "../store/store";
import { Dialog, errorMessage, useUI } from "../components/ui";

function csvValue(value: string | number) {
  const safe =
    typeof value === "string" && /^[=+\-@\t\r]/.test(value)
      ? `'${value}`
      : String(value);
  return `"${safe.replaceAll('"', '""')}"`;
}

export default function Inventory() {
  const { products, movements } = useStore();
  const { toast } = useUI();
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("all");
  const [tab, setTab] = useState("stock");
  const [editing, setEditing] = useState<{
    productId: string;
    variantId: string;
    title: string;
    stock: number;
  } | null>(null);
  const [reason, setReason] = useState("");
  const [error, setError] = useState("");
  const rows = products
    .filter((p) => p.active)
    .flatMap((p) => p.variants.map((v) => ({ product: p, variant: v })))
    .filter(
      ({ product, variant }) =>
        `${product.name} ${variant.label}`
          .toLowerCase()
          .includes(query.toLowerCase()) &&
        (filter === "all" ||
          (filter === "out"
            ? variant.stock === 0
            : variant.stock > 0 && variant.stock <= 5)),
    );
  function exportCsv() {
    const data = [
      ["Product", "Product ID", "Variant", "Variant ID", "Available stock"],
      ...rows.map(({ product, variant }) => [
        product.name,
        product.id,
        variant.label,
        variant.id,
        variant.stock,
      ]),
    ]
      .map((row) => row.map(csvValue).join(","))
      .join("\r\n");
    const blob = new Blob(["\uFEFF", data], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "storefront-preview-inventory.csv";
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
  function save(event: FormEvent) {
    event.preventDefault();
    if (!editing) return;
    try {
      store.adjustStock(
        editing.productId,
        editing.variantId,
        editing.stock,
        reason,
      );
      setEditing(null);
      toast("Preview inventory updated.");
    } catch (failure) {
      setError(errorMessage(failure));
    }
  }
  return (
    <>
      <div className="workspace-heading">
        <div>
          <h1>Every little squish.</h1>
          <p>Variant-level stock, adjustments, and a session activity trail.</p>
        </div>
        <button className="button secondary small-button" onClick={exportCsv}>
          <Download size={16} /> Export inventory
        </button>
      </div>
      <div className="workspace-tabs">
        <button
          className={tab === "stock" ? "active" : ""}
          onClick={() => setTab("stock")}
        >
          Available stock
        </button>
        <button
          className={tab === "history" ? "active" : ""}
          onClick={() => setTab("history")}
        >
          Adjustment history
        </button>
      </div>
      {tab === "stock" ? (
        <>
          <div className="workspace-toolbar">
            <div className="search-field">
              <Search size={17} />
              <input
                aria-label="Search inventory"
                placeholder="Search products or variants…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
            <select
              aria-label="Filter inventory"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="all">All stock</option>
              <option value="low">Low stock (1 to 5)</option>
              <option value="out">Out of stock</option>
            </select>
          </div>
          <div className="workspace-panel table-scroll">
            <table>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Variant</th>
                  <th>Available</th>
                  <th>Status</th>
                  <th>
                    <span className="sr-only">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map(({ product, variant }) => (
                  <tr key={`${product.id}:${variant.id}`}>
                    <td>
                      <strong>{product.name}</strong>
                      <small>{product.id}</small>
                    </td>
                    <td>
                      <span
                        className="variant-dot"
                        style={{ background: variant.color }}
                      />
                      {variant.label}
                    </td>
                    <td className="stock-number">{variant.stock}</td>
                    <td>
                      <span
                        className={`status-badge ${variant.stock === 0 ? "cancelled" : ""}`}
                      >
                        {variant.stock === 0
                          ? "Out of stock"
                          : variant.stock <= 5
                            ? "Low stock"
                            : "Available"}
                      </span>
                    </td>
                    <td>
                      <button
                        className="icon-button"
                        aria-label={`Adjust ${product.name} ${variant.label} stock`}
                        onClick={() => {
                          setEditing({
                            productId: product.id,
                            variantId: variant.id,
                            title: `${product.name} / ${variant.label}`,
                            stock: variant.stock,
                          });
                          setReason("");
                          setError("");
                        }}
                      >
                        <Pencil size={17} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {!rows.length && (
              <p className="workspace-empty">No inventory matches this view.</p>
            )}
          </div>
        </>
      ) : (
        <div className="workspace-panel table-scroll">
          <table>
            <thead>
              <tr>
                <th>Product / variant</th>
                <th>Change</th>
                <th>Stock after</th>
                <th>Reason</th>
                <th>By / when</th>
              </tr>
            </thead>
            <tbody>
              {movements.map((movement) => (
                <tr key={movement.id}>
                  <td>
                    <strong>{movement.product}</strong>
                    <small>{movement.variant}</small>
                  </td>
                  <td>
                    {movement.change > 0 ? "+" : ""}
                    {movement.change}
                  </td>
                  <td>{movement.stock}</td>
                  <td>{movement.reason}</td>
                  <td>
                    <small>
                      {movement.actor}
                      <br />
                      {new Date(movement.date).toLocaleString("en-IN")}
                    </small>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {!movements.length && (
            <p className="workspace-empty">
              No adjustments yet. This history starts with your preview session.
            </p>
          )}
        </div>
      )}
      <p className="small">
        Preview stock updates affect this browser’s catalog. Real stock
        reservations and multi-user reconciliation require a server.
      </p>
      <Dialog
        open={Boolean(editing)}
        onClose={() => setEditing(null)}
        title="Adjust little stock"
      >
        {editing && (
          <form onSubmit={save}>
            <p>{editing.title}</p>
            <label className="field">
              New available stock
              <input
                type="number"
                min="0"
                max="100000"
                step="1"
                required
                value={editing.stock}
                onChange={(e) =>
                  setEditing({ ...editing, stock: Number(e.target.value) })
                }
              />
            </label>
            <label className="field">
              Reason for adjustment
              <textarea
                required
                minLength={3}
                maxLength={300}
                rows={3}
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                placeholder="Stock received, recount, damaged unit…"
              />
            </label>
            <div className="form-error" role="alert">
              {error}
            </div>
            <button className="button full">Save adjustment</button>
          </form>
        )}
      </Dialog>
    </>
  );
}
