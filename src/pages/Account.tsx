import { useState, type FormEvent } from "react";
import { Link, Navigate, useNavigate, useSearchParams } from "react-router-dom";
import {
  ArrowUpRight,
  Eye,
  EyeOff,
  LogOut,
  MapPin,
  Package,
  Plus,
  Trash2,
  UserRound,
} from "lucide-react";
import { store, useStore } from "../store/store";
import { money } from "../domain/catalog";
import type { Address } from "../domain/types";
import { AddressFields, emptyAddress } from "../components/AddressFields";
import {
  ButtonLink,
  Daisy,
  Dialog,
  EmptyState,
  errorMessage,
  usePageTitle,
  useUI,
} from "../components/ui";
import { ProductImage } from "../components/CharacterArt";

export function Login({
  mode = "login",
}: {
  mode?: "login" | "signup" | "reset";
}) {
  const [params] = useSearchParams();
  const { user } = useStore();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [reset, setReset] = useState(false);
  const navigate = useNavigate();
  const returnTo =
    params.get("returnTo") === "/checkout" ? "/checkout" : "/account";
  usePageTitle(
    mode === "signup"
      ? "Join the little happy club"
      : mode === "reset"
        ? "Reset password"
        : "Welcome back",
  );
  if (user && mode !== "reset") return <Navigate to={returnTo} replace />;
  function submit(event: FormEvent) {
    event.preventDefault();
    setError("");
    if (mode === "reset") {
      setReset(true);
      return;
    }
    try {
      store.signIn(mode === "signup" ? name : email.split("@")[0], email);
      setPassword("");
      navigate(returnTo, { replace: true });
    } catch (failure) {
      setError(errorMessage(failure));
    }
  }
  return (
    <div className="auth-page shell">
      <div className="auth-illustration">
        <Daisy />
        <ProductImage
          id="butter-block"
          character="butter"
          color="#FDE68A"
          name="Butter Block"
        />
        <span>your little happy place.</span>
      </div>
      <div className="auth-form">
        <span className="section-kicker">The little happy club</span>
        <h1>
          {mode === "signup"
            ? "A spot just for you."
            : mode === "reset"
              ? "Let’s get you back."
              : "Oh, hello again."}
        </h1>
        <p>
          {mode === "signup"
            ? "Keep your favourites, addresses, and little hauls together."
            : mode === "reset"
              ? "A little help getting back to your account."
              : "Your favourites and little hauls are right here."}
        </p>
        <div className="preview-info">
          Account preview. No real authentication. Use a made-up password.
          Passwords are never stored or sent.
        </div>
        {reset ? (
          <div className="info-panel">
            <p>
              Password reset email is not connected in this frontend preview. No
              email has been sent. For help, contact{" "}
              <a href="mailto:support@mallow.example">support@mallow.example</a>.
            </p>
          </div>
        ) : (
          <form onSubmit={submit}>
            {mode === "signup" && (
              <label className="field">
                Your name
                <input
                  autoComplete="name"
                  value={name}
                  required
                  minLength={2}
                  maxLength={100}
                  onChange={(e) => setName(e.target.value)}
                />
              </label>
            )}
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
            {mode !== "reset" && (
              <div className="field">
                <label htmlFor="preview-password">Preview password</label>
                <div className="password-input">
                  <input
                    id="preview-password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="off"
                    required
                    minLength={8}
                    maxLength={128}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    aria-describedby="password-help"
                  />
                  <button
                    type="button"
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
                <span id="password-help" className="small">
                  8 or more characters. Preview only, not checked against an
                  account.
                </span>
              </div>
            )}
            {mode === "login" && (
              <Link className="text-link auth-forgot" to="/account/reset">
                Forgot your password?
              </Link>
            )}
            {mode === "signup" && (
              <label className="checkbox terms-checkbox">
                <input type="checkbox" required />
                <span>
                  I’ve read the{" "}
                  <Link to="/policies/terms" target="_blank">
                    terms
                  </Link>{" "}
                  and{" "}
                  <Link to="/policies/privacy" target="_blank">
                    privacy policy
                  </Link>
                  . I understand this is a frontend preview.
                </span>
              </label>
            )}
            <div className="form-error" role="alert">
              {error}
            </div>
            <button className="button full">
              {mode === "signup"
                ? "Create preview account"
                : mode === "reset"
                  ? "Request reset"
                  : "Enter account preview"}
              <ArrowUpRight size={18} />
            </button>
          </form>
        )}
        <p className="auth-switch">
          {mode === "login" ? (
            <>
              New around here?{" "}
              <Link
                to={`/account/signup?returnTo=${encodeURIComponent(returnTo)}`}
              >
                Join the club
              </Link>
            </>
          ) : (
            <Link
              to={`/account/login?returnTo=${encodeURIComponent(returnTo)}`}
            >
              Back to sign in
            </Link>
          )}
        </p>
      </div>
    </div>
  );
}

export default function Account() {
  const { user, orders, addresses } = useStore();
  const [tab, setTab] = useState("orders");
  const [editing, setEditing] = useState<Address | null>(null);
  const [name, setName] = useState(user?.name ?? "");
  const [error, setError] = useState("");
  const { toast } = useUI();
  usePageTitle("Your little corner");
  if (!user) return <Navigate to="/account/login" replace />;
  const mine = orders.filter((order) => order.email === user.email);
  const saved = addresses.filter(
    (address) => address.ownerEmail === user.email,
  );
  function save(event: FormEvent) {
    event.preventDefault();
    if (!editing) return;
    try {
      store.saveAddress({ ...editing, ownerEmail: user!.email });
      setEditing(null);
      toast("Address saved for this preview session.");
    } catch (failure) {
      setError(errorMessage(failure));
    }
  }
  return (
    <div className="page shell account-page">
      <div className="page-heading">
        <span className="section-kicker">Your little corner</span>
        <h1>Hello, {user.name.split(" ")[0]}.</h1>
        <p>A spot for your favourites, details, and little hauls.</p>
      </div>
      <div className="account-layout">
        <aside className="account-nav">
          <span className="account-avatar">
            {user.name.charAt(0).toUpperCase()}
          </span>
          <strong>{user.name}</strong>
          <span className="small">{user.email}</span>
          {[
            ["orders", "Your orders", Package],
            ["addresses", "Addresses", MapPin],
            ["profile", "Your details", UserRound],
          ].map(([key, title, Icon]) => {
            const ItemIcon = Icon as typeof Package;
            return (
              <button
                key={key as string}
                className={tab === key ? "active" : ""}
                onClick={() => setTab(key as string)}
              >
                <ItemIcon size={18} />
                {title as string}
              </button>
            );
          })}
          <Link to="/favourites">
            Your favourites <ArrowUpRight size={15} />
          </Link>
          {user.role !== "customer" && (
            <Link to="/workspace">
              Team workspace <ArrowUpRight size={15} />
            </Link>
          )}
          <button onClick={() => store.signOut()}>
            <LogOut size={18} />
            Sign out
          </button>
        </aside>
        <section className="account-content">
          {tab === "orders" && (
            <>
              <h2>Your little hauls</h2>
              {mine.length ? (
                <div className="account-orders">
                  {mine.map((order) => (
                    <article key={order.id} className="account-order">
                      <div>
                        <Link to={`/order/${order.id}`}>
                          <strong>{order.id}</strong>
                        </Link>
                        <span className="status-badge">{order.status}</span>
                      </div>
                      <p>
                        {new Date(order.date).toLocaleDateString("en-IN", {
                          dateStyle: "medium",
                        })}{" "}
                        · {order.items.reduce((sum, i) => sum + i.quantity, 0)}{" "}
                        items · {money(order.total)}
                      </p>
                      <p>{order.items.map((i) => i.name).join(", ")}</p>
                      <div>
                        <Link className="text-link" to={`/order/${order.id}`}>
                          View order <ArrowUpRight size={16} />
                        </Link>
                        <Link
                          className="text-link"
                          to={`/track?order=${order.id}`}
                        >
                          Track order
                        </Link>
                      </div>
                    </article>
                  ))}
                </div>
              ) : (
                <EmptyState title="Your first little haul awaits.">
                  No preview orders yet. Find a little personality and try
                  checkout.
                </EmptyState>
              )}
              <p className="small">
                Preview orders only. Saved for this browser tab’s session.
              </p>
            </>
          )}
          {tab === "addresses" && (
            <>
              <div className="section-heading">
                <h2>Favourite destinations</h2>
                <button
                  className="button secondary small-button"
                  onClick={() => {
                    setEditing({
                      ...emptyAddress(),
                      ownerEmail: user.email,
                      name: user.name,
                    });
                    setError("");
                  }}
                >
                  <Plus size={17} /> Add address
                </button>
              </div>
              {saved.length ? (
                <div className="address-cards">
                  {saved.map((address) => (
                    <article key={address.id}>
                      <h3>{address.name}</h3>
                      <p>
                        {address.line1}
                        <br />
                        {address.line2 && (
                          <>
                            {address.line2}
                            <br />
                          </>
                        )}
                        {address.city}, {address.state} {address.pincode}
                        <br />
                        India
                        <br />
                        +91 {address.phone}
                      </p>
                      <div>
                        <button
                          className="text-link"
                          onClick={() => {
                            setEditing(address);
                            setError("");
                          }}
                        >
                          Edit
                        </button>
                        <button
                          className="icon-button"
                          aria-label={`Remove address ${address.line1}`}
                          onClick={() => store.deleteAddress(address.id)}
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </article>
                  ))}
                </div>
              ) : (
                <p className="empty-message">
                  No saved addresses yet. Add one for your next little haul.
                </p>
              )}
            </>
          )}
          {tab === "profile" && (
            <>
              <h2>Your details</h2>
              <form
                className="profile-form"
                onSubmit={(event) => {
                  event.preventDefault();
                  try {
                    store.updateProfile(name);
                    toast("Your name has been updated.");
                  } catch (failure) {
                    setError(errorMessage(failure));
                  }
                }}
              >
                <label className="field">
                  Your name
                  <input
                    required
                    minLength={2}
                    maxLength={100}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </label>
                <label className="field">
                  Email address
                  <input type="email" value={user.email} readOnly />
                </label>
                <p className="small">
                  To change the preview email, sign out and enter a new preview
                  session.
                </p>
                <div className="form-error" role="alert">
                  {error}
                </div>
                <button className="button">Save details</button>
              </form>
              <div className="account-privacy">
                <h3>About your preview data</h3>
                <p>
                  Profile, orders, and addresses live in this browser tab’s
                  session. No password is saved. Live account security and
                  password management need a server.
                </p>
                <ButtonLink to="/policies/privacy" secondary>
                  Privacy information
                </ButtonLink>
              </div>
            </>
          )}
        </section>
      </div>
      <Dialog
        open={Boolean(editing)}
        onClose={() => setEditing(null)}
        title="A little destination"
      >
        {editing && (
          <form onSubmit={save}>
            <AddressFields value={editing} onChange={setEditing} />
            <div className="form-error" role="alert">
              {error}
            </div>
            <button className="button full">Save address</button>
          </form>
        )}
      </Dialog>
    </div>
  );
}
