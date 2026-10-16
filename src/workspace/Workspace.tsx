import { useState } from "react";
import { Link, NavLink, Navigate, useParams } from "react-router-dom";
import {
  ArrowUpRight,
  Boxes,
  ClipboardList,
  LayoutDashboard,
  LogOut,
  Package,
  Settings,
  ShieldCheck,
} from "lucide-react";
import { store, useStore } from "../store/store";
import { permissions } from "../domain/commerce";
import { money, totalStock } from "../domain/catalog";
import type { Role } from "../domain/types";
import { ButtonLink, usePageTitle } from "../components/ui";
import Products from "./Products";
import Inventory from "./Inventory";
import Orders from "./Orders";
import "../styles/workspace.css";

const sections = [
  { id: "overview", title: "Overview", icon: LayoutDashboard },
  { id: "products", title: "Products", icon: Package },
  { id: "inventory", title: "Inventory", icon: Boxes },
  { id: "orders", title: "Orders", icon: ClipboardList },
  { id: "settings", title: "Store & access", icon: Settings },
];
const roles: { id: Role; name: string; description: string }[] = [
  {
    id: "owner",
    name: "Store owner",
    description:
      "Products, inventory, orders, store information, and access overview.",
  },
  {
    id: "inventory",
    name: "Inventory team",
    description:
      "Product catalog and stock management. No customer order access.",
  },
  {
    id: "support",
    name: "Support team",
    description: "Order lookup and fulfilment updates. No catalog editing.",
  },
];

export default function Workspace() {
  const { user } = useStore();
  const { section = "overview" } = useParams();
  const [role, setRole] = useState<Role>("owner");
  usePageTitle("Team workspace");
  if (!user || user.role === "customer")
    return (
      <div className="page shell workspace-gateway">
        <ShieldCheck size={40} />
        <h1>A little behind the scenes.</h1>
        <p>
          Mallow Club team workspace. Choose a role to explore the frontend
          preview.
        </p>
        <div className="preview-info">
          This is a role simulation, not a secure staff login. Live access needs
          server-verified sessions, staff invitations, and enforced permissions.
          No production data is present.
        </div>
        <div className="role-options">
          {roles.map((item) => (
            <label key={item.id} className={role === item.id ? "selected" : ""}>
              <input
                type="radio"
                name="role"
                checked={role === item.id}
                onChange={() => setRole(item.id)}
              />
              <span>
                <strong>{item.name}</strong>
                <small>{item.description}</small>
              </span>
            </label>
          ))}
        </div>
        <button
          className="button"
          onClick={() =>
            store.signIn(
              `Preview ${roles.find((r) => r.id === role)!.name}`,
              `${role}@preview.example`,
              role,
            )
          }
        >
          Enter team preview <ArrowUpRight size={18} />
        </button>
        <ButtonLink to="/" secondary>
          Back to the shop
        </ButtonLink>
      </div>
    );
  const allowed = permissions[user.role];
  if (!allowed.includes(section))
    return (
      <div className="page shell workspace-denied">
        <ShieldCheck size={36} />
        <h1>This corner is restricted.</h1>
        <p>Your {user.role} preview role does not have access to this page.</p>
        <ButtonLink to="/workspace">Back to your workspace</ButtonLink>
      </div>
    );
  return (
    <div className="workspace shell">
      <aside className="workspace-sidebar">
        <Link className="workspace-logo" to="/workspace">
          <img src="/favicon.svg" width="36" height="36" alt="" />
          <span>
            Mallow Club
            <br />
            <small>Team workspace</small>
          </span>
        </Link>
        <div className="workspace-role">
          <ShieldCheck size={16} />
          {roles.find((r) => r.id === user.role)?.name}
        </div>
        <nav aria-label="Workspace navigation">
          {sections
            .filter((s) => allowed.includes(s.id))
            .map((s) => (
              <NavLink
                key={s.id}
                to={s.id === "overview" ? "/workspace" : `/workspace/${s.id}`}
                end
              >
                <s.icon size={18} />
                {s.title}
              </NavLink>
            ))}
        </nav>
        <div className="workspace-bottom">
          <Link to="/shop">
            View storefront <ArrowUpRight size={15} />
          </Link>
          <button onClick={() => store.signOut()}>
            <LogOut size={16} /> End team preview
          </button>
        </div>
      </aside>
      <div className="workspace-main">
        <div className="workspace-banner">
          <span>Frontend workspace preview</span>
          <span>Browser data only. No live orders or inventory.</span>
        </div>
        {section === "overview" ? (
          <Overview />
        ) : section === "products" ? (
          <Products />
        ) : section === "inventory" ? (
          <Inventory />
        ) : section === "orders" ? (
          <Orders />
        ) : section === "settings" ? (
          <StoreSettings />
        ) : (
          <Navigate to="/workspace" replace />
        )}
      </div>
    </div>
  );
}

function Overview() {
  const { products, orders, user } = useStore();
  const allowed = permissions[user!.role];
  const active = products.filter((p) => p.active);
  const units = active.reduce((sum, p) => sum + totalStock(p), 0);
  const low = active
    .flatMap((p) => p.variants)
    .filter((v) => v.stock <= 5).length;
  const revenue = orders
    .filter((o) => o.status !== "Cancelled")
    .reduce((sum, o) => sum + o.total, 0);
  return (
    <>
      <div className="workspace-heading">
        <div>
          <span className="section-kicker">A peek behind the squish</span>
          <h1>Your store, at a glance.</h1>
          <p>
            Figures reflect sample catalog and orders created in this session.
          </p>
        </div>
      </div>
      <div className="metrics-grid">
        <article>
          <span>Active products</span>
          <strong>{active.length}</strong>
          <small>{products.length - active.length} archived</small>
        </article>
        <article>
          <span>Units in stock</span>
          <strong>{units}</strong>
          <small>Across active variants</small>
        </article>
        {allowed.includes("orders") && (
          <article>
            <span>Preview order value</span>
            <strong>{money(revenue)}</strong>
            <small>{orders.length} preview orders this session</small>
          </article>
        )}
        <article>
          <span>Stock to review</span>
          <strong>{low}</strong>
          <small>Variants with 5 or fewer units</small>
        </article>
      </div>
      <div className="workspace-panels">
        <section className="workspace-panel">
          <h2>A little stock check</h2>
          {active
            .filter((p) => p.variants.some((v) => v.stock <= 5))
            .map((p) => (
              <div className="overview-row" key={p.id}>
                <span>
                  <strong>{p.name}</strong>
                  <small>
                    {p.variants
                      .filter((v) => v.stock <= 5)
                      .map((v) => `${v.label}: ${v.stock}`)
                      .join(", ")}
                  </small>
                </span>
                <span className="status-badge">
                  {totalStock(p) ? "Low stock" : "Out of stock"}
                </span>
              </div>
            ))}
          {low === 0 && <p>Stock looks good. No variants need attention.</p>}
          {allowed.includes("inventory") && (
            <Link className="text-link" to="/workspace/inventory">
              Manage inventory <ArrowUpRight size={16} />
            </Link>
          )}
        </section>
        <section className="workspace-panel">
          <h2>
            {allowed.includes("orders")
              ? "Latest little hauls"
              : "Your workspace access"}
          </h2>
          {allowed.includes("orders") ? (
            orders.length ? (
              orders.slice(0, 5).map((o) => (
                <Link
                  className="overview-row"
                  to="/workspace/orders"
                  key={o.id}
                >
                  <span>
                    <strong>{o.id}</strong>
                    <small>
                      {o.address.name} · {o.status}
                    </small>
                  </span>
                  <strong>{money(o.total)}</strong>
                </Link>
              ))
            ) : (
              <div className="workspace-empty">
                <Package size={35} />
                <p>
                  No preview orders yet. Try the storefront checkout to create
                  one.
                </p>
                <ButtonLink to="/shop" secondary>
                  Explore the shop
                </ButtonLink>
              </div>
            )
          ) : (
            <p>
              Your role can manage products and inventory. Customer orders and
              store access are restricted to other team roles.
            </p>
          )}
        </section>
      </div>
    </>
  );
}

function StoreSettings() {
  return (
    <>
      <div className="workspace-heading">
        <h1>Store & access.</h1>
        <p>The live connections this frontend is ready to receive.</p>
      </div>
      <div className="workspace-panel">
        <h2>Mallow Club</h2>
        <dl className="settings-list">
          <div>
            <dt>Store currency</dt>
            <dd>INR (₹)</dd>
          </div>
          <div>
            <dt>Shipping country</dt>
            <dd>India</dd>
          </div>
          <div>
            <dt>General enquiries</dt>
            <dd>
              <a href="mailto:hello@mallow.example">hello@mallow.example</a>
            </dd>
          </div>
          <div>
            <dt>Customer support</dt>
            <dd>
              <a href="mailto:support@mallow.example">support@mallow.example</a>
            </dd>
          </div>
          <div>
            <dt>Sales policy</dt>
            <dd>
              All sales final. No returns, refunds, or exchanges, except where
              required by law.
            </dd>
          </div>
        </dl>
      </div>
      <div className="workspace-panel">
        <h2>Service connections</h2>
        <p className="small">
          These services are intentionally unconnected in this frontend-only
          build.
        </p>
        {[
          [
            "Customer accounts",
            "Server sessions, email verification, recovery, and account security.",
          ],
          [
            "Team access",
            "Server-verified staff invitations, role permissions, and audit logging.",
          ],
          [
            "Inventory & orders",
            "Authoritative database, transactional reservations, and stock reconciliation.",
          ],
          [
            "Payments",
            "Hosted payment gateway, signed webhooks, and server-side amount verification.",
          ],
          [
            "Fulfilment",
            "Courier booking, delivery estimates, and verified tracking events.",
          ],
        ].map(([title, description]) => (
          <div className="integration-row" key={title}>
            <span>
              <strong>{title}</strong>
              <small>{description}</small>
            </span>
            <span className="status-badge">Not connected</span>
          </div>
        ))}
      </div>
      <div className="workspace-panel">
        <h2>Role permissions</h2>
        <div className="table-scroll">
          <table>
            <thead>
              <tr>
                <th>Role</th>
                <th>Products</th>
                <th>Inventory</th>
                <th>Orders</th>
                <th>Store & access</th>
              </tr>
            </thead>
            <tbody>
              {roles.map((role) => (
                <tr key={role.id}>
                  <th>{role.name}</th>
                  {["products", "inventory", "orders", "settings"].map(
                    (permission) => (
                      <td key={permission}>
                        {permissions[role.id].includes(permission)
                          ? "Allowed"
                          : "Restricted"}
                      </td>
                    ),
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="small">
          Frontend controls demonstrate permissions. Production authorization
          must be enforced by the server for every action.
        </p>
      </div>
    </>
  );
}
