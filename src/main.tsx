import {
  Component,
  lazy,
  Suspense,
  type ErrorInfo,
  type ReactNode,
} from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UIProvider, ButtonLink } from "./components/ui";
import { Layout } from "./components/Layout";
import { BagPage } from "./components/Cart";
import "./styles/base.css";
import "./styles/storefront.css";
import "./styles/commerce.css";

const Home = lazy(() => import("./pages/Home"));
const Shop = lazy(() => import("./pages/Shop"));
const Product = lazy(() => import("./pages/Product"));
const Checkout = lazy(() => import("./pages/Checkout"));
const Account = lazy(() => import("./pages/Account"));
const Login = lazy(() =>
  import("./pages/Account").then((module) => ({ default: module.Login })),
);
const Confirmation = lazy(() => import("./pages/OrderConfirmation"));
const PaymentReturn = lazy(() => import("./pages/PaymentReturn"));
const Track = lazy(() => import("./pages/Track"));
const Info = lazy(() => import("./pages/Info"));
const Workspace = lazy(() => import("./workspace/Workspace"));

class ErrorBoundary extends Component<
  { children: ReactNode },
  { failed: boolean }
> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("Mallow Club rendering error", error, info.componentStack);
  }
  render() {
    if (this.state.failed)
      return (
        <div className="page shell empty-state">
          <h1>A little hiccup.</h1>
          <p>The store couldn’t finish loading. Please reload and try again.</p>
          <button className="button" onClick={() => window.location.reload()}>
            Reload the store
          </button>
          <a href="mailto:support@mallow.example">Contact support</a>
        </div>
      );
    return this.props.children;
  }
}
function NotFound() {
  return (
    <div className="page shell empty-state">
      <span className="section-kicker">404</span>
      <h1>A little lost?</h1>
      <p>
        This page wandered off. Your next little companion is still in the shop.
      </p>
      <ButtonLink to="/shop">Back to the squish shop</ButtonLink>
    </div>
  );
}

createRoot(document.getElementById("root")!).render(
  <ErrorBoundary>
    <BrowserRouter>
      <UIProvider>
        <Suspense
          fallback={
            <div className="loading-page" role="status">
              <img src="/favicon.svg" alt="" width="56" height="56" />
              <p>Finding a little happy…</p>
            </div>
          }
        >
          <Routes>
            <Route element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="shop" element={<Shop />} />
              <Route path="shop/:id" element={<Product />} />
              <Route path="favourites" element={<Shop favourites />} />
              <Route path="bag" element={<BagPage />} />
              <Route path="checkout" element={<Checkout />} />
              <Route path="checkout/return" element={<PaymentReturn />} />
              <Route path="order/:id" element={<Confirmation />} />
              <Route path="account" element={<Account />} />
              <Route path="account/login" element={<Login />} />
              <Route path="account/signup" element={<Login mode="signup" />} />
              <Route path="account/reset" element={<Login mode="reset" />} />
              <Route path="track" element={<Track />} />
              <Route path="our-world" element={<Info />} />
              <Route path="help" element={<Info />} />
              <Route path="shipping" element={<Info />} />
              <Route path="contact" element={<Info />} />
              <Route path="policies/:policy" element={<Info />} />
              <Route path="accessibility" element={<Info />} />
              <Route path="workspace" element={<Workspace />} />
              <Route path="workspace/:section" element={<Workspace />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </UIProvider>
    </BrowserRouter>
  </ErrorBoundary>,
);
