import { useState, type FormEvent } from "react";
import { useSearchParams } from "react-router-dom";
import { Check, Package, Search, Truck } from "lucide-react";
import { useStore } from "../store/store";
import type { Order } from "../domain/types";
import { ButtonLink, Daisy, usePageTitle } from "../components/ui";

export default function Track() {
  usePageTitle("Track your little journey");
  const { orders, user } = useStore();
  const [params] = useSearchParams();
  const [id, setId] = useState(params.get("order") ?? "");
  const [email, setEmail] = useState(user?.email ?? "");
  const [result, setResult] = useState<Order | null>(null);
  const [error, setError] = useState("");
  const order = result ? orders.find((o) => o.id === result.id) : null;
  function submit(event: FormEvent) {
    event.preventDefault();
    const found = orders.find(
      (o) =>
        o.id.toLowerCase() === id.trim().toLowerCase() &&
        o.email.toLowerCase() === email.trim().toLowerCase(),
    );
    setResult(found ?? null);
    setError(
      found
        ? ""
        : "We couldn’t match that order number and email in this preview session. Check both details or contact support@mallow.example.",
    );
  }
  return (
    <div className="page shell track-page">
      <div className="page-heading">
        <Daisy />
        <span className="section-kicker">On a little journey</span>
        <h1>Where’s my squish?</h1>
        <p>Your order number and checkout email are all you need.</p>
      </div>
      <form onSubmit={submit} className="tracking-form">
        <label className="field">
          Order number
          <input
            placeholder="ORDER-1234ABCD"
            autoComplete="off"
            required
            maxLength={30}
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </label>
        <label className="field">
          Email address
          <input
            type="email"
            autoComplete="email"
            required
            value={email}
            maxLength={254}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <button className="button">
          <Search size={18} /> Track my order
        </button>
        <div className="form-error full-field" role="alert">
          {error}
        </div>
      </form>
      <p className="small centered">
        Preview tracking uses orders created in this browser tab. No courier
        connection is active.
      </p>
      {order && (
        <section className="tracking-result" aria-live="polite">
          <div className="section-heading">
            <div>
              <span className="section-kicker">{order.id}</span>
              <h2>
                {order.status === "Cancelled"
                  ? "This journey was cancelled."
                  : order.status === "Delivered"
                    ? "Home, sweet little home."
                    : "Your little journey."}
              </h2>
            </div>
            <Package size={32} />
          </div>
          <p>
            Current status: <strong>{order.status}</strong>. This is a preview
            order.
          </p>
          {order.status !== "Cancelled" && (
            <ol className="tracking-timeline">
              {["Confirmed", "Packed", "Shipped", "Delivered"].map(
                (status, index) => {
                  const event = order.events.find((e) => e.status === status);
                  return (
                    <li key={status} className={event ? "done" : ""}>
                      <span>{event ? <Check size={18} /> : index + 1}</span>
                      <div>
                        <strong>{status}</strong>
                        <small>
                          {event
                            ? new Date(event.date).toLocaleString("en-IN", {
                                dateStyle: "medium",
                                timeStyle: "short",
                              })
                            : "Not yet"}
                        </small>
                      </div>
                    </li>
                  );
                },
              )}
            </ol>
          )}
          <div className="tracking-details">
            <div>
              <h3>
                <Truck size={19} /> Delivery information
              </h3>
              <p>
                {order.carrier || "Courier not assigned"}
                <br />
                {order.tracking || "Tracking number available after dispatch."}
              </p>
              <p>
                Delivery to {order.address.city}, {order.address.state}{" "}
                {order.address.pincode}
              </p>
            </div>
            <div>
              <h3>Journey updates</h3>
              {[...order.events].reverse().map((event, index) => (
                <p key={`${event.date}:${index}`}>
                  <strong>{event.status}</strong>
                  <br />
                  {event.note}
                </p>
              ))}
            </div>
          </div>
          <ButtonLink to={`/order/${order.id}`} secondary>
            View order summary
          </ButtonLink>
        </section>
      )}
      <div className="track-help">
        <p>A little stuck? We’re here.</p>
        <a className="text-link" href="mailto:support@mallow.example">
          support@mallow.example
        </a>
      </div>
    </div>
  );
}
