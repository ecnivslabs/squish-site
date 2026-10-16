import { lazy, Suspense, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowDown, ArrowUpRight, Heart } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useStore } from "../store/store";
import {
  ButtonLink,
  Daisy,
  Spark,
  TextLink,
  usePageTitle,
} from "../components/ui";
import { ProductImage } from "../components/CharacterArt";
import { ProductCard } from "../components/ProductCard";

const SquishyScene = lazy(() => import("../three/SquishyScene"));
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  usePageTitle("A little pocket of happy");
  const { products } = useStore();
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      const context = gsap.context(() => {
        gsap.from(".hero-copy > *", {
          y: 30,
          opacity: 0,
          duration: 0.9,
          stagger: 0.1,
          ease: "power3.out",
          clearProps: "all",
        });
        gsap.from(".hero-stage", {
          y: 35,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out",
          clearProps: "all",
        });
        gsap.to(".world-character", {
          rotate: -9,
          y: -24,
          ease: "none",
          scrollTrigger: {
            trigger: ".world-section",
            start: "top bottom",
            end: "bottom top",
            scrub: 0.8,
          },
        });
        gsap.from(".world-note", {
          rotate: 5,
          y: 25,
          opacity: 0.6,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".world-section",
            start: "top 75%",
            once: true,
          },
        });
      }, root);
      return () => context.revert();
    });
    return () => media.revert();
  }, []);

  return (
    <div ref={root}>
      <section className="hero shell">
        <div className="hero-copy">
          <span className="sticker-tag">
            <span /> Fresh from the squish menu
          </span>
          <h1>
            A little joy.
            <br />A lot of squish.
          </h1>
          <p>
            Butter, cheese, pancakes, and more.
            <br className="desktop-break" /> Imported TPR squishies for little
            everyday breaks.
          </p>
          <div className="hero-cta">
            <ButtonLink to="/shop">
              Find your squish <ArrowUpRight size={20} />
            </ButtonLink>
            <span className="hero-handwritten">
              Pick your little treat.
              <svg viewBox="0 0 65 35" aria-hidden="true">
                <path
                  d="M61 3Q38 37 5 20M5 20L18 16M5 20L13 32"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </div>
          <p className="hero-footnote">
            <Daisy className="tiny-flower" /> Looks like a snack. It’s a
            squishy.
          </p>
        </div>
        <div className="hero-stage">
          <div className="stage-dots" />
          <Daisy className="hero-daisy" />
          <Spark className="hero-spark" />
          <span className="stage-label">the breakfast squish club</span>
          <Suspense
            fallback={
              <div className="scene-placeholder">
                <img
                  src="/products/pancake-stack-ffcba4.png"
                  alt="Pancake squishy concept"
                  width="640"
                  height="640"
                />
              </div>
            }
          >
            <SquishyScene />
          </Suspense>
          <div className="hello-sticker">
            oh,
            <br />
            hello you!
          </div>
        </div>
        <a
          className="hero-scroll"
          href="#squish-shop"
          aria-label="Explore the collection"
        >
          <ArrowDown size={17} />
        </a>
      </section>
      <div className="character-ribbon" aria-hidden="true">
        <div>
          {[0, 1].map((i) => (
            <span key={i}>
              a little squish <Daisy /> a little joy <Daisy /> a little play{" "}
              <Daisy /> a little squish <Daisy /> a little joy <Daisy /> a
              little play <Daisy />
            </span>
          ))}
        </div>
      </div>
      <section id="squish-shop" className="shop-section shell">
        <div className="section-heading" data-reveal>
          <div>
            <span className="section-kicker">The squish shop</span>
            <h2>The squish menu.</h2>
            <p>A little butter? A stack of pancakes? Find your kind of happy.</p>
          </div>
          <TextLink to="/shop">Shop the menu</TextLink>
        </div>
        <div className="featured-products">
          {products
            .filter((p) => p.featured && p.active)
            .slice(0, 4)
            .map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
        </div>
        <p className="catalog-note">
          A peek at what’s to come. Sample products, prices, and character
          visuals.
        </p>
      </section>
      <section className="category-section shell">
        <div className="section-heading" data-reveal>
          <div>
            <span className="section-kicker">
              What are you in the mood for?
            </span>
            <h2>A little of what you fancy.</h2>
          </div>
          <Daisy />
        </div>
        <div className="category-grid">
          <Link
            to="/shop?category=Breakfast+club"
            className="category-tile animals"
            data-reveal
          >
            <div>
              <span>Your morning favourites</span>
              <h3>Breakfast club</h3>
              <span className="circle-link">
                <ArrowUpRight />
              </span>
            </div>
            <ProductImage
              id="butter-block"
              character="butter"
              color="#FDE68A"
              name="Butter Block"
            />
          </Link>
          <Link
            to="/shop?category=Sweet+treats"
            className="category-tile snacks"
            data-reveal
          >
            <div>
              <span>A little sugar, a lot of squish</span>
              <h3>Sweet treats</h3>
              <span className="circle-link">
                <ArrowUpRight />
              </span>
            </div>
            <ProductImage
              id="glazed-daydream"
              character="donut"
              color="#F7C8D4"
              name="Glazed Daydream"
            />
          </Link>
          <Link
            to="/shop?category=Little+pals"
            className="category-tile pocket"
            data-reveal
          >
            <div>
              <span>For the animal person</span>
              <h3>Little pals</h3>
              <span className="circle-link">
                <ArrowUpRight />
              </span>
            </div>
            <ProductImage
              id="mochi-bunny"
              character="bunny"
              color="#F5F0E6"
              name="Mochi Bunny"
            />
          </Link>
        </div>
      </section>
      <section className="world-section">
        <div className="shell world-grid">
          <div className="world-visual">
            <div className="world-character">
              <ProductImage
                id="pancake-stack"
                character="pancakes"
                color="#FFCBA4"
                name="Pancake Stack"
              />
            </div>
            <Daisy className="world-daisy" />
            <Spark className="world-spark" />
            <div className="world-note">
              a little breakfast
              <br />
              for your desk
              <Heart size={19} />
            </div>
          </div>
          <div className="world-copy" data-reveal>
            <span className="sticker-tag">Hello from Mallow Club</span>
            <h2>
              For the love
              <br />
              of little joys.
            </h2>
            <p>
              A pat of butter. A block of cheese. A stack of pancakes that
              belongs on your desk, not your plate.
            </p>
            <p>
              That’s the world of Mallow Club. Imported TPR fidget toys in
              familiar food shapes, with a few little pals along the way.
              Pick one up. Give it a squish. Take a little break.
            </p>
            <TextLink to="/our-world">Inside our little world</TextLink>
          </div>
        </div>
      </section>
      <section className="home-faq shell">
        <div data-reveal>
          <span className="section-kicker">Before you pick a pal</span>
          <h2>
            Little questions.
            <br />
            Clear answers.
          </h2>
          <TextLink to="/help">Visit the help corner</TextLink>
        </div>
        <div className="faq-list" data-reveal>
          {[
            [
              "Where do you deliver?",
              "Mallow Club is being prepared for delivery within India, with prices in INR. Final delivery coverage and timelines will be shown when live checkout is connected.",
            ],
            [
              "Can I return or exchange my order?",
              "All sales are final. We do not offer returns, refunds, or exchanges for change of mind, except where required by law. If an item arrives incorrect or damaged, contact support@mallow.example.",
            ],
            [
              "Are these photos of the products?",
              "The characters on this preview are original 3D concept visuals and illustrations. They are placeholders, not product photographs. Actual product details and photos will be added before launch.",
            ],
          ].map(([question, answer]) => (
            <details key={question}>
              <summary>
                {question}
                <span>+</span>
              </summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>
      <section className="closing-section shell" data-reveal>
        <Daisy />
        <h2>
          A little treat.
          <br />
          Hold the bites.
        </h2>
        <ButtonLink to="/shop">
          Find your squish <ArrowUpRight size={20} />
        </ButtonLink>
        <Spark />
      </section>
    </div>
  );
}
