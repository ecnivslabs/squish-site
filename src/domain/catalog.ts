import type { Product } from "./types";

const previewDetails =
  " This is a placeholder concept for our imported TPR squishy toy collection. Actual product photographs, dimensions, country of origin, age guidance, and care instructions will be confirmed before launch. Not edible.";

export const initialProducts: Product[] = [
  {
    id: "butter-block",
    name: "Butter Block",
    subtitle: "A very good little pat",
    character: "butter",
    color: "#FDE68A",
    background: "#7ECDC0",
    price: 499,
    category: "Breakfast club",
    featured: true,
    active: true,
    description:
      "The familiar butter block as a squishy-shaped little find. A simple block silhouette with an embossed butter label." +
      previewDetails,
    variants: [
      { id: "classic", label: "Classic butter", color: "#FDE68A", stock: 18 },
      { id: "pink", label: "Strawberry butter", color: "#F7C8D4", stock: 9 },
    ],
  },
  {
    id: "cheese-please",
    name: "Cheese Please",
    subtitle: "The big cheese of little things",
    character: "cheese",
    color: "#FDE68A",
    background: "#F7C8D4",
    price: 449,
    category: "Breakfast club",
    featured: true,
    active: true,
    description:
      "A rounded cheese block with molded Swiss-cheese dimples. A food-inspired squishy concept, not a food product." +
      previewDetails,
    variants: [
      { id: "yellow", label: "Classic yellow", color: "#FDE68A", stock: 12 },
      { id: "peach", label: "Peach cheese", color: "#FFCBA4", stock: 5 },
    ],
  },
  {
    id: "pancake-stack",
    name: "Pancake Stack",
    subtitle: "Breakfast, with a little twist",
    character: "pancakes",
    color: "#FFCBA4",
    background: "#A8D8F0",
    price: 599,
    category: "Breakfast club",
    featured: true,
    active: true,
    description:
      "A stack of golden pancake shapes with a syrup-inspired topping and a tiny butter pat. A breakfast-inspired squishy concept." +
      previewDetails,
    variants: [
      { id: "maple", label: "Maple stack", color: "#FFCBA4", stock: 23 },
    ],
  },
  {
    id: "glazed-daydream",
    name: "Glazed Daydream",
    subtitle: "A little sprinkle of personality",
    character: "donut",
    color: "#F7C8D4",
    background: "#D4A5E8",
    price: 549,
    category: "Sweet treats",
    featured: true,
    active: true,
    description:
      "A donut-shaped concept with pink icing, a round little centre, and colourful sprinkles. A sweet-looking squishy, not an edible treat." +
      previewDetails,
    variants: [
      {
        id: "strawberry",
        label: "Strawberry glaze",
        color: "#F7C8D4",
        stock: 8,
      },
      { id: "lavender", label: "Lavender glaze", color: "#D4A5E8", stock: 0 },
    ],
  },
  {
    id: "strawberry-mochi",
    name: "Strawberry Mochi",
    subtitle: "A little round of cute",
    character: "mochi",
    color: "#F7C8D4",
    background: "#A8E6CF",
    price: 399,
    category: "Sweet treats",
    featured: false,
    active: true,
    description:
      "A rounded mochi-inspired shape with a strawberry perched on top. A dessert-inspired squishy concept." +
      previewDetails,
    variants: [
      { id: "rose", label: "Strawberry milk", color: "#F7C8D4", stock: 16 },
    ],
  },
  {
    id: "toast-to-you",
    name: "Toast to You",
    subtitle: "The toast of your little collection",
    character: "loaf",
    color: "#FDE68A",
    background: "#FFCBA4",
    price: 449,
    category: "Breakfast club",
    featured: false,
    active: true,
    description:
      "A toast-shaped squishy concept with rounded crust edges and a little pat of butter. A bakery-inspired silhouette for the breakfast collection." +
      previewDetails,
    variants: [
      { id: "butter", label: "Butter toast", color: "#FDE68A", stock: 7 },
    ],
  },
  {
    id: "sunny-side",
    name: "Sunny Side",
    subtitle: "A little sunnier, please",
    character: "egg",
    color: "#FDE68A",
    background: "#7ECDC0",
    price: 349,
    category: "Breakfast club",
    featured: false,
    active: true,
    description:
      "A fried-egg-inspired squishy concept with a bright yellow centre and a softly curved white shape." +
      previewDetails,
    variants: [
      { id: "sunny", label: "Sunny yellow", color: "#FDE68A", stock: 20 },
    ],
  },
  {
    id: "mochi-bunny",
    name: "Mochi Bunny",
    subtitle: "For the little animal person",
    character: "bunny",
    color: "#F5F0E6",
    background: "#A8D8F0",
    price: 499,
    category: "Little pals",
    featured: false,
    active: true,
    description:
      "A little bunny concept with small upright ears, painted details, and a soft oval silhouette. A character-shaped alternative to the food-inspired collection." +
      previewDetails,
    variants: [
      { id: "cream", label: "Vanilla", color: "#F5F0E6", stock: 6 },
      { id: "pink", label: "Rose milk", color: "#F7C8D4", stock: 0 },
    ],
  },
];

export const categories = [
  "All squishies",
  "Breakfast club",
  "Sweet treats",
  "Little pals",
] as const;
export const money = (amount: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
export const totalStock = (product: Product) =>
  product.variants.reduce((sum, item) => sum + item.stock, 0);
