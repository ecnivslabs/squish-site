import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  CreditCard,
  Info,
  ShieldCheck,
  Truck,
} from "lucide-react";
import { store, useStore } from "../store/store";
import { money } from "../domain/catalog";
import { cartSubtotal, shippingFor, validateCart } from "../domain/commerce";
import { AddressFields, emptyAddress } from "../components/AddressFields";
import { addressSchema } from "../domain/schemas";
import { ProductImage } from "../components/CharacterArt";
import { EmptyState, errorMessage, usePageTitle } from "../components/ui";

export default function Checkout() {
  usePageTitle("Checkout");
  const { user, addresses, cart, products } = useStore();
  const [step, setStep] = useState(0);
  const [email, setEmail] = useState(user?.email ?? "");
  const [address, setAddress] = useState(
    () => addresses.find((a) => a.ownerEmail === user?.email) ?? emptyAddress(),
  );
  const [method, setMethod] = useState("UPI");
  const [accepted, setAccepted] = useState(false);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const [simulateFailure, setSimulateFailure] = useState(false);
  const navigate = useNavigate();
  const subtotal = cartSubtotal(cart, products);
  const shipping = shippingFor(subtotal);
  const invalid = validateCart(cart, products);
  if (!cart.length)
    return (
      <div className="page shell">
        <EmptyState title="Your bag needs a little company.">
          Pick a squishy before heading to checkout.
        </EmptyState>
      </div>
    );
  function next(event: FormEvent) {
    event.preventDefault();
    setError("");
    const parsed = addressSchema.safeParse({
      ...address,
      ownerEmail: email.toLowerCase().trim(),
    });
    if (!parsed.success) {
      setError(parsed.error.issues[0].message);
      return;
    }
    setAddress(parsed.data);
    setStep(step + 1);
  }
  async function place(event: FormEvent) {
    event.preventDefault();
    if (!accepted || busy) return;
    setBusy(true);
    setError("");
    try {
      if (simulateFailure)
        throw new Error(
          "Preview payment declined. No payment was taken. Choose another method or turn off the declined-payment simulation, then try again.",
        );
      const order = store.placeOrder(email, address);
      navigate(`/order/${order.id}`, { replace: true });
    } catch (failure) {
      setError(errorMessage(failure));
      setBusy(false);
    }
  }
  return (
    <div className="checkout-page shell">
      <Link className="text-link" to="/bag">
        <ArrowLeft size={16} /> Back to your bag
      </Link>
      <div className="checkout-heading">
        <h1>A little closer to happy.</h1>
        <p>
          <Info size={16} /> Frontend preview. No payment will be taken. Use
          sample details.
        </p>
      </div>
      <ol className="checkout-steps" aria-label="Checkout progress">
        {["Information", "Delivery", "Review & payment"].map((title, index) => (
          <li
            key={title}
            className={
              step === index ? "current" : step > index ? "complete" : ""
            }
            aria-current={step === index ? "step" : undefined}
          >
            <span>{step > index ? <Check size={16} /> : index + 1}</span>
            {title}
          </li>
        ))}
      </ol>
      <div className="checkout-grid">
        <div className="checkout-form">
          <div className="form-error" role="alert">
            {error || invalid}
          </div>
          {step === 0 && (
            <form onSubmit={next}>
              <div className="form-section-heading">
                <h2>Your details</h2>
                {!user && (
                  <Link to="/account/login?returnTo=%2Fcheckout">
                    Have an account? Sign in
                  </Link>
                )}
              </div>
              <label className="field">
                Email address
                <input
                  type="email"
                  autoComplete="email"
                  required
                  maxLength={254}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
              <p className="small">
                Used to match your preview order. No emails are sent.
              </p>
              <h2>Where’s your little pal going?</h2>
              {user &&
                addresses.filter((a) => a.ownerEmail === user.email).length >
                  0 && (
                  <label className="field">
                    Saved address
                    <select
                      value={
                        addresses.some((a) => a.id === address.id)
                          ? address.id
                          : ""
                      }
                      onChange={(e) =>
                        setAddress(
                          addresses.find(
                            (a) =>
                              a.id === e.target.value &&
                              a.ownerEmail === user.email,
                          ) ?? emptyAddress(),
                        )
                      }
                    >
                      <option value="">Use a new address</option>
                      {addresses
                        .filter((a) => a.ownerEmail === user.email)
                        .map((a) => (
                          <option key={a.id} value={a.id}>
                            {a.line1}, {a.city}
                          </option>
                        ))}
                    </select>
                  </label>
                )}
              <AddressFields value={address} onChange={setAddress} />
              <button className="button full" disabled={Boolean(invalid)}>
                Continue to delivery <ArrowUpRight size={18} />
              </button>
            </form>
          )}
          {step === 1 && (
            <form
              onSubmit={(event) => {
                event.preventDefault();
                setStep(2);
              }}
            >
              <h2>A little journey</h2>
              <div className="checkout-address">
                <p>
                  <strong>{address.name}</strong>
                  <br />
                  {address.line1}
                  {address.line2 ? `, ${address.line2}` : ""}
                  <br />
                  {address.city}, {address.state} {address.pincode}
                  <br />
                  India · +91 {address.phone}
                </p>
                <button
                  type="button"
                  className="text-link"
                  onClick={() => setStep(0)}
                >
                  Edit
                </button>
              </div>
              <label className="delivery-option">
                <input type="radio" name="delivery" checked readOnly />
                <Truck size={22} />
                <span>
                  <strong>Standard delivery</strong>
                  <small>
                    Preview rate. Timelines confirmed before launch.
                  </small>
                </span>
                <strong>{shipping ? money(shipping) : "Free"}</strong>
              </label>
              <div className="info-panel">
                <Info size={19} />
                <p>
                  Items are sourced internationally. Exact dispatch and delivery
                  estimates will be provided with the confirmed product catalog.
                  This preview does not create a shipment.
                </p>
              </div>
              <button className="button full">
                Review your order <ArrowUpRight size={18} />
              </button>
              <button
                type="button"
                className="text-link centered"
                onClick={() => setStep(0)}
              >
                Back to information
              </button>
            </form>
          )}
          {step === 2 && (
            <form onSubmit={place}>
              <h2>One last little look</h2>
              <div className="review-detail">
                <span>Contact</span>
                <strong>{email}</strong>
                <button type="button" onClick={() => setStep(0)}>
                  Edit
                </button>
              </div>
              <div className="review-detail">
                <span>Deliver to</span>
                <strong>
                  {address.name}, {address.city} {address.pincode}
                </strong>
                <button type="button" onClick={() => setStep(0)}>
                  Edit
                </button>
              </div>
              <div className="review-detail">
                <span>Delivery</span>
                <strong>
                  Standard · {shipping ? money(shipping) : "Free"}
                </strong>
                <button type="button" onClick={() => setStep(1)}>
                  Edit
                </button>
              </div>
              <h2>Payment</h2>
              <fieldset className="payment-options">
                <legend className="sr-only">Payment method preview</legend>
                {["UPI", "Cards", "Netbanking"].map((value) => (
                  <label
                    key={value}
                    className={method === value ? "selected" : ""}
                  >
                    <input
                      type="radio"
                      name="payment"
                      checked={method === value}
                      onChange={() => {
                        setMethod(value);
                        setError("");
                      }}
                    />
                    <CreditCard size={18} />
                    {value}
                  </label>
                ))}
              </fieldset>
              <div className="info-panel">
                <ShieldCheck size={21} />
                <p>
                  A secure hosted payment window will open here when payments
                  are connected. No card numbers, UPI IDs, or banking
                  credentials are collected in this preview.
                </p>
              </div>
              <details className="preview-controls">
                <summary>Preview controls</summary>
                <label className="checkbox">
                  <input
                    type="checkbox"
                    checked={simulateFailure}
                    onChange={(e) => {
                      setSimulateFailure(e.target.checked);
                      setError("");
                    }}
                  />{" "}
                  Simulate a declined payment
                </label>
              </details>
              <label className="checkbox terms-checkbox">
                <input
                  type="checkbox"
                  required
                  checked={accepted}
                  onChange={(e) => setAccepted(e.target.checked)}
                />
                <span>
                  I understand this is a preview order. I have read the{" "}
                  <Link to="/policies/terms" target="_blank">
                    terms
                  </Link>
                  ,{" "}
                  <Link to="/policies/privacy" target="_blank">
                    privacy policy
                  </Link>
                  , and{" "}
                  <Link to="/policies/sales" target="_blank">
                    all sales final policy
                  </Link>
                  . No returns, refunds, or exchanges, except where required by
                  law.
                </span>
              </label>
              <button
                className="button full"
                disabled={Boolean(invalid) || busy || !accepted}
              >
                {busy
                  ? "Creating preview order…"
                  : `Place preview order · ${money(subtotal + shipping)}`}
                <ArrowUpRight size={18} />
              </button>
              <p className="small centered">
                No charge. No real order. No shipment.
              </p>
              <button
                type="button"
                className="text-link centered"
                onClick={() => setStep(1)}
              >
                Back to delivery
              </button>
            </form>
          )}
        </div>
        <aside className="checkout-summary">
          <h2>Your little haul</h2>
          {cart.map((item) => {
            const product = products.find((p) => p.id === item.productId);
            const variant = product?.variants.find(
              (v) => v.id === item.variantId,
            );
            return product && variant ? (
              <div
                className="checkout-item"
                key={`${item.productId}:${item.variantId}`}
              >
                <div style={{ background: product.background }}>
                  <ProductImage
                    id={product.id}
                    character={product.character}
                    color={variant.color}
                    name={product.name}
                  />
                  <span>{item.quantity}</span>
                </div>
                <p>
                  <strong>{product.name}</strong>
                  <small>{variant.label}</small>
                </p>
                <strong>{money(item.quantity * product.price)}</strong>
              </div>
            ) : null;
          })}
          <div className="cart-summary">
            <div>
              <span>Subtotal</span>
              <strong>{money(subtotal)}</strong>
            </div>
            <div>
              <span>Delivery</span>
              <span>{shipping ? money(shipping) : "Free"}</span>
            </div>
            <div className="summary-total">
              <strong>Total</strong>
              <strong>{money(subtotal + shipping)}</strong>
            </div>
            <p className="small">Sample prices and delivery rates in INR.</p>
          </div>
          <a href="mailto:support@mallow.example" className="text-link">
            Need a little help?
          </a>
        </aside>
      </div>
    </div>
  );
}
