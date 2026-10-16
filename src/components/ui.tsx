import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Minus, Plus, X } from "lucide-react";

interface UI {
  cartOpen: boolean;
  setCartOpen: (value: boolean) => void;
  searchOpen: boolean;
  setSearchOpen: (value: boolean) => void;
  toast: (message: string) => void;
}
const UIContext = createContext<UI | null>(null);
export function UIProvider({ children }: { children: ReactNode }) {
  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [message, setMessage] = useState("");
  useEffect(() => {
    if (!message) return;
    const timer = window.setTimeout(() => setMessage(""), 4500);
    return () => clearTimeout(timer);
  }, [message]);
  return (
    <UIContext.Provider
      value={{
        cartOpen,
        setCartOpen,
        searchOpen,
        setSearchOpen,
        toast: (text) => setMessage(text),
      }}
    >
      {children}
      <div className={`toast ${message ? "show" : ""}`} role="status">
        {message}
      </div>
    </UIContext.Provider>
  );
}
export function useUI() {
  const value = useContext(UIContext);
  if (!value) throw new Error("UIProvider is missing.");
  return value;
}

export function Dialog({
  open,
  onClose,
  title,
  children,
  drawer = false,
  className = "",
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  drawer?: boolean;
  className?: string;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    else if (!open && dialog.open) dialog.close();
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);
  return (
    <dialog
      ref={ref}
      className={`dialog ${drawer ? "drawer" : ""} ${className}`}
      aria-label={title}
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          const rect = event.currentTarget.getBoundingClientRect();
          if (
            event.clientX < rect.left ||
            event.clientX > rect.right ||
            event.clientY < rect.top ||
            event.clientY > rect.bottom
          )
            onClose();
        }
      }}
    >
      <div className="dialog-heading">
        <h2>{title}</h2>
        <button
          className="icon-button"
          aria-label={`Close ${title.toLowerCase()}`}
          onClick={onClose}
        >
          <X size={21} />
        </button>
      </div>
      {open && children}
    </dialog>
  );
}

export function ButtonLink({
  to,
  children,
  secondary = false,
  className = "",
}: {
  to: string;
  children: ReactNode;
  secondary?: boolean;
  className?: string;
}) {
  return (
    <Link
      to={to}
      className={`button ${secondary ? "secondary" : ""} ${className}`}
    >
      {children}
    </Link>
  );
}
export function TextLink({
  to,
  children,
}: {
  to: string;
  children: ReactNode;
}) {
  return (
    <Link className="text-link" to={to}>
      {children}
      <ArrowUpRight size={18} />
    </Link>
  );
}
export function Quantity({
  value,
  max,
  onChange,
}: {
  value: number;
  max: number;
  onChange: (value: number) => void;
}) {
  return (
    <div className="quantity">
      <button
        type="button"
        aria-label="Decrease quantity"
        disabled={value <= 1}
        onClick={() => onChange(value - 1)}
      >
        <Minus size={15} />
      </button>
      <span aria-live="polite">{value}</span>
      <button
        type="button"
        aria-label="Increase quantity"
        disabled={value >= max}
        onClick={() => onChange(value + 1)}
      >
        <Plus size={15} />
      </button>
    </div>
  );
}
export function EmptyState({
  title,
  children,
  action = true,
}: {
  title: string;
  children: ReactNode;
  action?: boolean;
}) {
  return (
    <div className="empty-state">
      <Daisy />
      <h2>{title}</h2>
      <p>{children}</p>
      {action && (
        <ButtonLink to="/shop">
          Find your squish <ArrowUpRight size={18} />
        </ButtonLink>
      )}
    </div>
  );
}
export function Daisy({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`daisy ${className}`}
      viewBox="0 0 100 100"
      fill="none"
      aria-hidden="true"
    >
      <g stroke="var(--ink)" strokeWidth="2.5" strokeLinejoin="round">
        <path
          d="M41 34C19 11 42 -2 50 27C58 -2 81 11 59 34C88 19 104 43 72 50C104 58 88 81 59 66C81 89 58 102 50 73C42 102 19 89 41 66C12 81 -4 58 28 50C-4 43 12 19 41 34Z"
          fill="var(--cream)"
        />
        <circle cx="50" cy="50" r="15" fill="var(--accent)" />
      </g>
    </svg>
  );
}
export function Spark({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`spark ${className}`}
      viewBox="0 0 52 60"
      aria-hidden="true"
    >
      <path
        d="M26 3L32 21L49 30L32 37L26 57L20 37L3 30L20 21Z"
        fill="var(--accent)"
        stroke="var(--ink)"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}
export function usePageTitle(title: string) {
  useEffect(() => {
    document.title = `${title} | Mallow Club`;
    const heading = document.querySelector<HTMLElement>("main h1");
    if (heading) {
      heading.tabIndex = -1;
      heading.focus({ preventScroll: true });
    }
  }, [title]);
}
export function errorMessage(error: unknown) {
  return error instanceof Error
    ? error.message
    : "Something went wrong. Please try again.";
}
