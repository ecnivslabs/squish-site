import { useParams } from "react-router-dom";
import { ArrowUpRight, CheckCircle2, Printer } from "lucide-react";
import { useStore } from "../store/store";
import { money } from "../domain/catalog";
import { ButtonLink, EmptyState, usePageTitle } from "../components/ui";

export default function OrderConfirmation() {
  const { id } = useParams();
  const { orders } = useStore();
  const order = orders.find((o) => o.id === id);
  usePageTitle("Your preview order");
  if (!order)
    return (
      <div className="page shell">
        <EmptyState title="We can’t find this preview order.">
          Preview orders live in the browser tab where they were created. Check
          your order number or contact support.
        </EmptyState>
      </div>
    );
  return (
    <div className="confirmation-page page shell">
      <div className="confirmation-header">
        <CheckCircle2 size={46} />
        <span className="sticker-tag">Preview order created</span>
        <h1>Oh, happy little day.</h1>
        <p>
          Your preview order is ready to explore.
          <br />
          No payment was taken. No shipment will be made.
        </p>
        <strong className="order-number">{order.id}</strong>
      </div>
      <div className="receipt">
        <div className="receipt-title">
          <h2>Your little haul</h2>
          <button
            className="icon-button"
            aria-label="Print preview order summary"
            onClick={() => window.print()}
          >
            <Printer size={20} />
          </button>
        </div>
        {order.items.map((item) => (
          <div
            className="receipt-item"
            key={`${item.productId}:${item.variantId}`}
          >
            <span>
              {item.name}{" "}
              <small>
                {item.variant} · Qty {item.quantity}
              </small>
            </span>
            <strong>{money(item.price * item.quantity)}</strong>
          </div>
        ))}
        <div className="receipt-item">
          <span>Delivery</span>
          <span>{order.shipping ? money(order.shipping) : "Free"}</span>
        </div>
        <div className="receipt-item summary-total">
          <strong>Total</strong>
          <strong>{money(order.total)}</strong>
        </div>
        <p className="small">
          Preview order summary. This is not a tax invoice.
        </p>
        <div className="receipt-address">
          <div>
            <h3>Deliver to</h3>
            <p>
              {order.address.name}
              <br />
              {order.address.line1}
              <br />
              {order.address.line2 && (
                <>
                  {order.address.line2}
                  <br />
                </>
              )}
              {order.address.city}, {order.address.state}{" "}
              {order.address.pincode}
              <br />
              India
            </p>
          </div>
          <div>
            <h3>Order details</h3>
            <p>
              {new Date(order.date).toLocaleDateString("en-IN", {
                dateStyle: "long",
              })}
              <br />
              {order.email}
              <br />
              Payment: preview only
            </p>
          </div>
        </div>
      </div>
      <div className="confirmation-actions">
        <ButtonLink to={`/track?order=${encodeURIComponent(order.id)}`}>
          Track preview order <ArrowUpRight size={18} />
        </ButtonLink>
        <ButtonLink to="/shop" secondary>
          Keep exploring
        </ButtonLink>
      </div>
      <p className="small centered">
        Your preview order is saved for this browser tab’s session.
      </p>
    </div>
  );
}
