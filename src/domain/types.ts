export type Character =
  | "bunny"
  | "bear"
  | "frog"
  | "cat"
  | "peach"
  | "loaf"
  | "butter"
  | "cheese"
  | "pancakes"
  | "donut"
  | "egg"
  | "mochi";
export type Category =
  "All squishies" | "Breakfast club" | "Sweet treats" | "Little pals";
export type Role = "customer" | "owner" | "inventory" | "support";
export type OrderStatus =
  "Confirmed" | "Packed" | "Shipped" | "Delivered" | "Cancelled";

export interface Variant {
  id: string;
  label: string;
  color: string;
  stock: number;
}
export interface Product {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  price: number;
  category: Exclude<Category, "All squishies">;
  character: Character;
  color: string;
  background: string;
  variants: Variant[];
  featured: boolean;
  active: boolean;
  image?: string;
  squishVideoId?: string;
}
export interface CartItem {
  productId: string;
  variantId: string;
  quantity: number;
}
export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
}
export interface Address {
  id: string;
  ownerEmail: string;
  name: string;
  phone: string;
  line1: string;
  line2: string;
  city: string;
  state: string;
  pincode: string;
}
export interface OrderItem extends CartItem {
  name: string;
  variant: string;
  price: number;
  color: string;
  character: Character;
}
export interface OrderEvent {
  status: OrderStatus;
  date: string;
  note: string;
}
export interface Order {
  id: string;
  email: string;
  date: string;
  items: OrderItem[];
  address: Address;
  subtotal: number;
  shipping: number;
  total: number;
  status: OrderStatus;
  events: OrderEvent[];
  tracking: string;
  carrier: string;
}
export interface StoreState {
  products: Product[];
  cart: CartItem[];
  wishlist: string[];
  user: User | null;
  addresses: Address[];
  orders: Order[];
  movements: StockMovement[];
}
export interface StockMovement {
  id: string;
  product: string;
  variant: string;
  change: number;
  stock: number;
  reason: string;
  date: string;
  actor: string;
}
