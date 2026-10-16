import { useState, type FormEvent } from "react";
import { Search } from "lucide-react";
import { store, useStore } from "../store/store";
import { money } from "../domain/catalog";
import { canTransition, statuses } from "../domain/commerce";
import type { Order, OrderStatus } from "../domain/types";
import { Dialog, errorMessage, useUI } from "../components/ui";

export default function Orders() {
  const { orders } = useStore();
  const { toast } = useUI();
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("all");
  const [editing, setEditing] = useState<Order | null>(null);
  const [status, setStatus] = useState<OrderStatus>("Confirmed");
  const [tracking, setTracking] = useState("");
  const [carrier, setCarrier] = useState("");
  const [error, setError] = useState("");
  const shown = orders.filter(
    (order) =>
      (filter === "all" || order.status === filter) &&
      `${order.id} ${order.email} ${order.address.name}`
        .toLowerCase()
        .includes(query.toLowerCase()),
  );
  function edit(order: Order) {
    setEditing(order);
    setStatus(order.status);
    setTracking(order.tracking);
    setCarrier(order.carrier);
    setError("");
  }
  function save(event: FormEvent) {
    event.preventDefault();
    if (!editing) return;
    try {
      store.updateOrder(editing.id, status, tracking, carrier);
      setEditing(null);
      toast("Preview order updated. Tracking now reflects your changes.");
    } catch (failure) {
      setError(errorMessage(failure));
    }
  }
  return (
    <>
      <div className="workspace-heading">
        <div>
          <h1>Little hauls, all here.</h1>
          <p>Look up preview orders and manage their journey.</p>
        </div>
      </div>
      <div className="workspace-toolbar">
        <div className="search-field">
          <Search size={17} />
          <input
            aria-label="Search orders"
            placeholder="Order number, customer, email…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <select
          aria-label="Filter orders"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All statuses</option>
          {statuses.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </div>
      <div className="workspace-panel table-scroll">
        <table>
          <thead>
            <tr>
              <th>Order</th>
              <th>Customer</th>
              <th>Items</th>
              <th>Total</th>
              <th>Status</th>
              <th>
                <span className="sr-only">Actions</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {shown.map((order) => (
              <tr key={order.id}>
                <td>
                  <strong>{order.id}</strong>
                  <small>
                    {new Date(order.date).toLocaleDateString("en-IN")}
                  </small>
                </td>
                <td>
                  <strong>{order.address.name}</strong>
                  <small>{order.email}</small>
                </td>
                <td>{order.items.reduce((sum, i) => sum + i.quantity, 0)}</td>
                <td>{money(order.total)}</td>
                <td>
                  <span
                    className={`status-badge ${order.status.toLowerCase()}`}
                  >
                    {order.status}
                  </span>
                </td>
                <td>
                  <button className="text-link" onClick={() => edit(order)}>
                    Manage
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {!shown.length && (
          <div className="workspace-empty">
            <p>No preview orders match this view.</p>
            <p className="small">
              Place an order through the storefront preview to explore order
              management.
            </p>
          </div>
        )}
      </div>
      <Dialog
        open={Boolean(editing)}
        onClose={() => setEditing(null)}
        title={editing?.id ?? "Order"}
        className="order-editor"
      >
        {editing && (
          <form onSubmit={save}>
            <div className="order-editor-summary">
              <div>
                <h3>{editing.address.name}</h3>
                <p>
                  {editing.email}
                  <br />
                  +91 {editing.address.phone}
                </p>
              </div>
              <span className="status-badge">Preview only</span>
            </div>
            <p className="small">
              {editing.address.line1}
              {editing.address.line2 ? `, ${editing.address.line2}` : ""}
              <br />
              {editing.address.city}, {editing.address.state}{" "}
              {editing.address.pincode}, India
            </p>
            <div className="order-editor-items">
              {editing.items.map((item) => (
                <div key={`${item.productId}:${item.variantId}`}>
                  <span>
                    {item.name}
                    <small>
                      {item.variant} · Qty {item.quantity}
                    </small>
                  </span>
                  <strong>{money(item.price * item.quantity)}</strong>
                </div>
              ))}
              <div>
                <span>Delivery</span>
                <strong>{money(editing.shipping)}</strong>
              </div>
              <div>
                <strong>Total</strong>
                <strong>{money(editing.total)}</strong>
              </div>
            </div>
            <label className="field">
              Order status
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value as OrderStatus)}
              >
                {statuses
                  .filter((s) => canTransition(editing.status, s))
                  .map((s) => (
                    <option key={s}>{s}</option>
                  ))}
              </select>
            </label>
            {status === "Cancelled" && editing.status !== "Cancelled" && (
              <p className="info-panel">
                Cancelling this preview order returns its units to available
                stock. No payment exists to refund.
              </p>
            )}
            <div className="form-grid">
              <label className="field">
                Courier name
                <input
                  required={status === "Shipped" || status === "Delivered"}
                  maxLength={100}
                  value={carrier}
                  onChange={(e) => setCarrier(e.target.value)}
                />
              </label>
              <label className="field">
                Tracking number
                <input
                  required={status === "Shipped" || status === "Delivered"}
                  maxLength={100}
                  value={tracking}
                  onChange={(e) => setTracking(e.target.value)}
                />
              </label>
            </div>
            <div className="form-error" role="alert">
              {error}
            </div>
            <button className="button full">Save order update</button>
            <p className="small">
              Status changes are saved to this preview session. No courier is
              contacted or customer email sent.
            </p>
          </form>
        )}
      </Dialog>
    </>
  );
}
