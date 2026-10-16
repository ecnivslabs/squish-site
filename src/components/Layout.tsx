import { Suspense, useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import {
  ArrowUpRight,
  Heart,
  Menu,
  Search,
  ShoppingBag,
  UserRound,
  X,
} from "lucide-react";
import { store, useNotice, useStore } from "../store/store";
import { CartDrawer } from "./Cart";
import { SearchDialog } from "./Search";
import { Daisy, Dialog, useUI } from "./ui";

function Wordmark() {
  return (
    <Link className="wordmark" to="/" aria-label="Mallow Club home">
      <img src="/brand-logo.svg" alt="" width="270" height="160" />
    </Link>
  );
}

export function Layout() {
  const { pathname } = useLocation();
  const { cart, wishlist, user } = useStore();
  const notice = useNotice();
  const { setCartOpen, setSearchOpen } = useUI();
  const [mobile, setMobile] = useState(false);
  const [preview, setPreview] = useState(false);
  useEffect(() => {
    setMobile(false);
    setCartOpen(false);
    setSearchOpen(false);
    window.scrollTo({ top: 0, behavior: "instant" });
    const title = document.querySelector("main h1");
    if (title) {
      title.setAttribute("tabindex", "-1");
    }
  }, [pathname, setCartOpen, setSearchOpen]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 },
    );
    const seen = new WeakSet();
    const scan = () =>
      document.querySelectorAll("[data-reveal]").forEach((element) => {
        if (!seen.has(element)) {
          seen.add(element);
          observer.observe(element);
        }
      });
    scan();
    const mutations = new MutationObserver(scan);
    mutations.observe(document.body, { childList: true, subtree: true });
    return () => {
      observer.disconnect();
      mutations.disconnect();
    };
  }, []);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="announcement">
        <span>A little pocket of happy.</span>
        <button onClick={() => setPreview(true)}>
          Store preview <span className="preview-dot" />
        </button>
        <span className="announcement-locale">India / INR ₹</span>
      </div>
      <header className="site-header">
        <div className="header-inner">
          <Wordmark />
          <nav className="desktop-nav" aria-label="Main navigation">
            <NavLink to="/shop">The squish shop</NavLink>
            <NavLink to="/our-world">Our little world</NavLink>
            <NavLink to="/track">Track your order</NavLink>
          </nav>
          <div className="header-actions">
            <button
              className="icon-button"
              aria-label="Search"
              onClick={() => setSearchOpen(true)}
            >
              <Search size={21} />
            </button>
            <Link
              className="icon-button favourite-link"
              to="/favourites"
              aria-label={`Favourites (${wishlist.length})`}
            >
              <Heart size={21} />
              {wishlist.length > 0 && (
                <span className="count">{wishlist.length}</span>
              )}
            </Link>
            <Link
              className="icon-button account-link"
              to={user ? "/account" : "/account/login"}
              aria-label={user ? "My account" : "Sign in"}
            >
              <UserRound size={21} />
            </Link>
            <button
              className="bag-button"
              onClick={() => setCartOpen(true)}
              aria-label={`Open bag (${cart.reduce((sum, i) => sum + i.quantity, 0)})`}
            >
              <ShoppingBag size={19} />
              <span className="bag-label">Bag</span>
              <span>{cart.reduce((sum, i) => sum + i.quantity, 0)}</span>
            </button>
            <button
              className="icon-button mobile-toggle"
              aria-label={mobile ? "Close menu" : "Open menu"}
              aria-expanded={mobile}
              aria-controls="mobile-nav"
              onClick={() => setMobile(!mobile)}
            >
              {mobile ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobile && (
          <nav
            id="mobile-nav"
            className="mobile-nav"
            aria-label="Mobile navigation"
          >
            <NavLink to="/shop">The squish shop</NavLink>
            <NavLink to="/our-world">Our little world</NavLink>
            <NavLink to="/track">Track your order</NavLink>
            <NavLink to="/account">My account</NavLink>
            <NavLink to="/favourites">Favourites</NavLink>
          </nav>
        )}
      </header>
      {notice && (
        <div className="storage-notice" role="alert">
          {notice}
          <button
            aria-label="Dismiss notice"
            onClick={() => store.clearNotice()}
          >
            <X size={18} />
          </button>
        </div>
      )}
      <main id="main">
        <Suspense
          fallback={
            <div className="loading-page" role="status">
              <p>Finding a little happy…</p>
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </main>
      <footer className="site-footer">
        <div className="footer-top shell">
          <div className="footer-brand">
            <Wordmark />
            <p>
              A little character.
              <br />A little colour. A little you.
            </p>
            <Link to="/contact" className="social-link">
              Say hello <ArrowUpRight size={16} />
            </Link>
          </div>
          <div>
            <h3>Find your happy</h3>
            <Link to="/shop">All squishies</Link>
            <Link to="/shop?category=Breakfast+club">Breakfast club</Link>
            <Link to="/shop?category=Sweet+treats">Sweet treats</Link>
            <Link to="/favourites">Your favourites</Link>
          </div>
          <div>
            <h3>A little help</h3>
            <Link to="/track">Track your order</Link>
            <Link to="/help">Questions & answers</Link>
            <Link to="/shipping">Shipping & delivery</Link>
            <Link to="/policies/sales">Sales policy</Link>
          </div>
          <div>
            <h3>Say hello</h3>
            <a href="mailto:hello@mallow.example">hello@mallow.example</a>
            <a href="mailto:support@mallow.example">support@mallow.example</a>
            <Link to="/contact">Contact us</Link>
            <Link to="/workspace">
              Team workspace <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
        <div className="footer-big" aria-hidden="true">
          small joys, big squish
          <Daisy />
        </div>
        <div className="footer-bottom shell">
          <span>© {new Date().getFullYear()} Mallow Club</span>
          <div>
            <Link to="/policies/privacy">Privacy</Link>
            <Link to="/policies/terms">Terms</Link>
            <Link to="/accessibility">Accessibility</Link>
          </div>
          <span>Made for little moments.</span>
        </div>
      </footer>
      <CartDrawer />
      <SearchDialog />
      <Dialog
        open={preview}
        onClose={() => setPreview(false)}
        title="A peek at Mallow Club"
      >
        <div className="prose">
          <p>
            You are exploring a frontend store preview. The catalog, prices,
            stock, shipping rates, and 3D characters are sample content.
          </p>
          <p>
            Accounts, orders, and team roles are simulated in this browser. No
            payment is collected, no email is sent, and no shipment is created.
            Do not enter real passwords or payment information.
          </p>
          <p>
            Live shopping will be available after the store services are
            connected.
          </p>
          <button className="button" onClick={() => setPreview(false)}>
            Let’s explore
          </button>
        </div>
      </Dialog>
    </>
  );
}
