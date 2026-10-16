import { useState, type FormEvent } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { ArrowUpRight, Mail } from "lucide-react";
import { ButtonLink, Daisy, usePageTitle } from "../components/ui";
import { ProductImage } from "../components/CharacterArt";

const faq = [
  [
    "Where does Mallow Club ship?",
    "We are preparing Mallow Club for delivery within India. Prices are shown in INR. Confirmed coverage, delivery fees, dispatch estimates, and timelines will be available before live checkout opens.",
  ],
  [
    "Where are the products sourced?",
    "Our products are sourced internationally. We do not claim that they are locally manufactured. Country of origin, importer details, and product information will be provided with the final catalog.",
  ],
  [
    "What are Mallow Club toys made from?",
    "Mallow Club offers imported TPR (thermoplastic rubber) squishy fidget toys. Product-specific dimensions, care instructions, age guidance, and warnings will be provided with the final catalog. These are toys, not food.",
  ],
  [
    "Can I return, refund, or exchange an order?",
    "All sales are final. We do not offer returns, refunds, or exchanges for change of mind, except where required by law. If something arrives damaged, incorrect, or does not match your order, contact support@mallow.example with your order number and photos. This policy does not limit your statutory rights.",
  ],
  [
    "How can I track my order?",
    "Use the tracking page with your order number and checkout email. In this frontend preview, tracking shows only orders created in the current browser tab. Live courier events need a connected fulfilment service.",
  ],
  [
    "Are the characters shown actual product photographs?",
    "No. These are placeholder 3D character concepts and illustrations. Final product images, dimensions, composition, age guidance, warnings, and care instructions must be confirmed before the store launches.",
  ],
  [
    "Are these suitable for children?",
    "Age suitability and safety information have not been verified for the preview catalog. Please do not infer safety, food suitability, or age recommendations from a character’s appearance or its TPR material. Follow the confirmed product label when available.",
  ],
  [
    "Are the snack characters edible?",
    "No. The snack-inspired character concepts shown here are decorative product visuals, not food.",
  ],
  [
    "How can I get help?",
    "Email support@mallow.example for help with orders. For general questions or business enquiries, use hello@mallow.example.",
  ],
];
const content: Record<
  string,
  { title: string; intro: string; sections: [string, string][] }
> = {
  "/shipping": {
    title: "A little journey to you.",
    intro: "Shipping & delivery information for Mallow Club in India.",
    sections: [
      [
        "Delivery within India",
        "Mallow Club is being prepared for orders within India, priced in INR. Serviceable PIN codes and final delivery charges will be checked at live checkout. The preview uses sample delivery rates of ₹79, or ₹0 for orders of ₹999 or more. These are demonstration values, not a confirmed offer.",
      ],
      [
        "International sourcing",
        "Products are sourced from other countries. Final listings will include the applicable country of origin, importer information, and any customer-facing import charges. We do not make local manufacturing claims.",
      ],
      [
        "Dispatch and delivery estimates",
        "Confirmed handling times, delivery windows, carrier services, and holiday cutoffs are pending. No dispatch or arrival dates are promised in this preview. Live ordering will require those details to be published first.",
      ],
      [
        "Tracking your order",
        "When live fulfilment is connected, your order details will provide the carrier and tracking reference after dispatch. For now, you can explore tracking with an order created in this browser session.",
      ],
      [
        "Address issues or delivery problems",
        "Check your name, phone number, address, and PIN code before placing an order. For an address correction or a delivery problem, contact support@mallow.example with the order number. Changes after dispatch depend on the carrier.",
      ],
    ],
  },
  "/policies/sales": {
    title: "Clear from the start.",
    intro:
      "Sales, returns, refunds & exchanges. Draft store policy for review before launch.",
    sections: [
      [
        "All sales are final",
        "We do not offer returns, refunds, or exchanges for change of mind, preference changes, or an order placed by mistake, except where required by applicable law. Review the confirmed product photos, description, colour, dimensions, and order details before purchase.",
      ],
      [
        "Incorrect, damaged, or missing items",
        "If your delivery is incorrect, damaged, incomplete, or otherwise does not match the order, email support@mallow.example with the order number, a description of the issue, and clear photos of the item and packaging. Keep the packaging while the issue is reviewed. Any remedy will be handled in accordance with applicable law.",
      ],
      [
        "Your statutory rights",
        "This policy does not exclude, restrict, or replace rights or remedies that cannot lawfully be excluded. The all sales final policy applies only to the extent permitted by applicable law.",
      ],
      [
        "Cancellations",
        "Change-of-mind cancellations are not offered once an order is accepted, except where required by law. If you notice an error, contact support promptly. We cannot promise that a dispatched order can be stopped.",
      ],
      [
        "Preview orders",
        "This frontend preview does not take payment, accept a real purchase, or create a shipment. Catalog details, prices, and inventory are sample data.",
      ],
    ],
  },
  "/policies/privacy": {
    title: "Your little privacy corner.",
    intro:
      "How this frontend preview handles information. This policy must be updated before live services are connected.",
    sections: [
      [
        "Information in your browser",
        "The shopping bag, favourites, and preview catalog changes are kept in local browser storage. Optional product demonstration clips are stored in IndexedDB in the same browser. Preview profile, addresses, and orders are stored in session storage for the current tab. Clearing site data removes the local preview. Closing the tab normally ends session storage, although your browser may restore it when restoring a session.",
      ],
      [
        "Account and payment details",
        "No password is saved or transmitted by the preview application. Account forms simulate a session. Do not enter a real password. We do not collect card numbers, UPI credentials, or banking information. No payment gateway is connected.",
      ],
      [
        "Messages you choose to send",
        "The contact form opens a draft in your own email application. Nothing is sent automatically. If you send an email, your email provider transmits the message to hello@mallow.example or support@mallow.example.",
      ],
      [
        "External links and fonts",
        "The store does not embed social media posts or tracking scripts. Store fonts and character visuals are served with the site. No analytics or advertising cookies are set by this frontend. Your hosting provider may separately keep request logs.",
      ],
      [
        "Questions and live-store changes",
        "For privacy questions, email hello@mallow.example. Before launch, this notice must be updated with the legal business identity, applicable contacts, service providers, retention periods, security measures, and customer-rights process for the live store.",
      ],
    ],
  },
  "/policies/terms": {
    title: "The little details.",
    intro: "Terms of use. Draft terms for review before launch.",
    sections: [
      [
        "About this preview",
        "Mallow Club is currently a frontend store demonstration. Products, prices, stock counts, character visuals, shipping charges, and account sessions are sample content. No real orders, payments, emails, or shipments are created.",
      ],
      [
        "Product information",
        "The character visuals are placeholders and do not establish actual appearance, dimensions, ingredients, materials, manufacturing origin, certification, therapeutic benefit, safety, or age suitability. Confirmed product information and photographs must be published before sales begin.",
      ],
      [
        "Orders and prices",
        "Amounts are shown in Indian rupees. Preview prices and delivery charges are illustrative. For live ordering, final pricing, tax treatment, delivery charges, availability, and order acceptance will need server confirmation. Browser changes alone cannot reserve inventory or confirm a payment.",
      ],
      [
        "Sales policy",
        "The intended store policy is all sales final, with no returns, refunds, or exchanges for change of mind, except where required by law. The published sales policy applies together with statutory rights that cannot be excluded.",
      ],
      [
        "Responsible use",
        "Do not attempt to interfere with the store, access another customer’s information, or misuse its services. Preview team roles demonstrate interface permissions only and do not provide production authentication or authorization.",
      ],
      [
        "Business information and contact",
        "General enquiries: hello@mallow.example. Order support: support@mallow.example. The legal seller name, registered address, importer details, grievance contact, and other required live-store disclosures are pending and must be completed before sales are enabled.",
      ],
    ],
  },
  "/accessibility": {
    title: "A little room for everyone.",
    intro:
      "Mallow Club is designed to support comfortable browsing across devices and input methods.",
    sections: [
      [
        "Keyboard and screen readers",
        "Navigation, search, filters, shopping controls, and dialogs use labelled interactive elements. Use the skip-to-content link to jump past navigation. Dialogs support Escape and keyboard focus.",
      ],
      [
        "Motion and 3D",
        "The store respects your device’s reduced-motion preference. The homepage play window supports touch and keyboard input. Press 1, 2, or 3 to select a squishy, Space to grab or release, arrow keys to move, Shift with an arrow to throw, and Escape to release. If WebGL is unavailable, a static portrait is shown. Product information does not depend on interacting with 3D.",
      ],
      [
        "Zoom and layout",
        "Text and controls adapt to smaller screens. Your browser’s zoom remains available. If you experience a barrier, email support@mallow.example with the page and a description of the issue.",
      ],
    ],
  },
};

export default function Info() {
  const { pathname } = useLocation();
  const { policy } = useParams();
  const page = content[pathname];
  usePageTitle(
    pathname === "/our-world"
      ? "Our little world"
      : pathname === "/contact"
        ? "Say hello"
        : pathname === "/help"
          ? "The help corner"
          : (page?.title ?? "Page not found"),
  );
  if (pathname === "/our-world")
    return (
      <div className="our-world-page">
        <section className="shell world-intro">
          <div>
            <span className="sticker-tag">The world of Mallow Club</span>
            <h1>
              A little more
              <br />
              personality, please.
            </h1>
            <p>
              We like the little things. A pat of butter. A stack of pancakes. A
              familiar snack turned into an unexpected little desk companion.
            </p>
            <p>
              Mallow Club brings together imported TPR squishy fidget toys,
              from food-inspired little finds to playful characters. A little
              squeeze, a little pause, a little something for your desk.
            </p>
            <ButtonLink to="/shop">
              Find your squish <ArrowUpRight size={18} />
            </ButtonLink>
          </div>
          <div className="world-intro-art">
            <Daisy />
            <ProductImage
              id="butter-block"
              character="butter"
              color="#FDE68A"
              name="Butter Block"
            />
          </div>
        </section>
        <section className="world-letter shell">
          <h2>
            Small things.
            <br />
            Their own little story.
          </h2>
          <div>
            <p>
              Maybe it’s a butter block by your keyboard. Pancakes on your
              bookshelf. A cheese block that always gets a second look.
            </p>
            <p>
              There’s no grand promise behind these toys. Just a collection of
              playful little characters and the moments you choose to make with
              them.
            </p>
            <p>
              The characters you see in this preview are concepts. We’ll share
              the real product photos and details before the shop opens.
            </p>
            <a className="text-link" href="mailto:hello@mallow.example">
              Say hello <ArrowUpRight size={18} />
            </a>
          </div>
        </section>
      </div>
    );
  if (pathname === "/contact") return <Contact />;
  if (pathname === "/help")
    return (
      <div className="page shell help-page">
        <div className="page-heading">
          <Daisy />
          <h1>A little help?</h1>
          <p>Clear answers for your little questions.</p>
        </div>
        <div className="faq-list">
          {faq.map(([question, answer]) => (
            <details key={question}>
              <summary>
                {question}
                <span>+</span>
              </summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
        <div className="help-contact">
          <h2>Still a little stuck?</h2>
          <p>Send your question to support@mallow.example.</p>
          <ButtonLink to="/contact">
            Get in touch <ArrowUpRight size={18} />
          </ButtonLink>
        </div>
      </div>
    );
  if (!page)
    return (
      <div className="page shell empty-state">
        <h1>This page wandered off.</h1>
        <p>
          {policy
            ? "That policy is not available."
            : "Please check the address."}
        </p>
        <ButtonLink to="/">Back home</ButtonLink>
      </div>
    );
  return (
    <div className="page shell policy-page">
      <div className="policy-heading">
        <span className="section-kicker">
          Mallow Club /{" "}
          {pathname.includes("policies")
            ? "Store policies"
            : "The little details"}
        </span>
        <h1>{page.title}</h1>
        <p>{page.intro}</p>
      </div>
      <div className="policy-layout">
        <nav aria-label="Policy sections">
          {page.sections.map(([title], index) => (
            <a key={title} href={`#section-${index}`}>
              {title}
            </a>
          ))}
          <Link to="/contact">
            Contact us <ArrowUpRight size={14} />
          </Link>
        </nav>
        <div className="prose">
          {page.sections.map(([title, text], index) => (
            <section id={`section-${index}`} key={title}>
              <h2>{title}</h2>
              <p>{text}</p>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}

function Contact() {
  const [topic, setTopic] = useState("Order support");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [opened, setOpened] = useState(false);
  function submit(event: FormEvent) {
    event.preventDefault();
    const to =
      topic === "Order support" ? "support@mallow.example" : "hello@mallow.example";
    const subject = encodeURIComponent(`Mallow Club: ${topic}`);
    const body = encodeURIComponent(
      `Hello Mallow Club,\n\n${message}\n\nFrom,\n${name}`,
    );
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
    setOpened(true);
  }
  return (
    <div className="page shell contact-page">
      <div className="page-heading">
        <span className="sticker-tag">Say hello</span>
        <h1>Let’s have a little chat.</h1>
        <p>Order questions, little ideas, or a quick hello.</p>
      </div>
      <div className="contact-layout">
        <div>
          <div className="contact-card">
            <Mail size={25} />
            <h2>A little help</h2>
            <p>Questions about your order?</p>
            <a href="mailto:support@mallow.example">
              support@mallow.example <ArrowUpRight size={16} />
            </a>
          </div>
          <div className="contact-card">
            <Daisy />
            <h2>Hello, Mallow Club</h2>
            <p>General questions and business enquiries.</p>
            <a href="mailto:hello@mallow.example">
              hello@mallow.example <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
        <form onSubmit={submit}>
          <h2>What’s on your mind?</h2>
          <label className="field">
            Your name
            <input
              required
              minLength={2}
              maxLength={100}
              autoComplete="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label className="field">
            A little about
            <select value={topic} onChange={(e) => setTopic(e.target.value)}>
              <option>Order support</option>
              <option>Product question</option>
              <option>Business enquiry</option>
              <option>Just saying hello</option>
            </select>
          </label>
          <label className="field">
            Your message
            <textarea
              required
              minLength={10}
              maxLength={3000}
              rows={6}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Include your order number if you have one."
            />
          </label>
          <button className="button">
            Open email draft <ArrowUpRight size={18} />
          </button>
          <p className="small">
            Opens your email app. Review and send the draft there. Nothing is
            sent automatically.
          </p>
          {opened && (
            <p className="info-panel" role="status">
              Your email app was requested. If nothing opened, email{" "}
              {topic === "Order support"
                ? "support@mallow.example"
                : "hello@mallow.example"}{" "}
              directly.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
