import { z } from "zod";

export const addressSchema = z.object({
  id: z.string(),
  ownerEmail: z.email(),
  name: z.string().trim().min(2).max(100),
  phone: z
    .string()
    .regex(/^[6-9]\d{9}$/, "Enter a valid 10 digit Indian mobile number."),
  line1: z.string().trim().min(5).max(200),
  line2: z.string().max(200),
  city: z.string().trim().min(2).max(100),
  state: z.string().min(2).max(100),
  pincode: z.string().regex(/^[1-9]\d{5}$/, "Enter a valid 6 digit PIN code."),
});
export const productSchema = z.object({
  id: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
  name: z.string().trim().min(2).max(80),
  subtitle: z.string().trim().min(2).max(100),
  description: z.string().trim().min(20).max(3000),
  price: z.number().int().min(1).max(100000),
  category: z.enum(["Breakfast club", "Sweet treats", "Little pals"]),
  character: z.enum([
    "bunny",
    "bear",
    "frog",
    "cat",
    "peach",
    "loaf",
    "butter",
    "cheese",
    "pancakes",
    "donut",
    "egg",
    "mochi",
  ]),
  color: z.string().regex(/^#[0-9a-f]{6}$/i),
  background: z.string().regex(/^#[0-9a-f]{6}$/i),
  variants: z
    .array(
      z.object({
        id: z.string().min(1),
        label: z.string().trim().min(1),
        color: z.string().regex(/^#[0-9a-f]{6}$/i),
        stock: z.number().int().min(0).max(100000),
      }),
    )
    .min(1),
  active: z.boolean(),
  featured: z.boolean(),
  image: z
    .string()
    .max(1500000)
    .regex(/^data:image\/(png|jpeg|webp);base64,[A-Za-z0-9+/=]+$/)
    .optional(),
  squishVideoId: z.uuid().optional(),
});
export const cartSchema = z
  .array(
    z.object({
      productId: z.string(),
      variantId: z.string(),
      quantity: z.number().int().min(1).max(100000),
    }),
  )
  .max(100);
export const userSchema = z.object({
  id: z.string(),
  name: z.string().min(1).max(100),
  email: z.email(),
  role: z.enum(["customer", "owner", "inventory", "support"]),
});
export const orderSchema = z.object({
  id: z.string(),
  email: z.email(),
  date: z.iso.datetime(),
  items: z
    .array(
      z.object({
        productId: z.string(),
        variantId: z.string(),
        quantity: z.number().int().positive(),
        name: z.string(),
        variant: z.string(),
        price: z.number().nonnegative(),
        color: z.string(),
        character: productSchema.shape.character,
      }),
    )
    .min(1),
  address: addressSchema,
  subtotal: z.number().nonnegative(),
  shipping: z.number().nonnegative(),
  total: z.number().nonnegative(),
  status: z.enum(["Confirmed", "Packed", "Shipped", "Delivered", "Cancelled"]),
  events: z.array(
    z.object({
      status: z.enum([
        "Confirmed",
        "Packed",
        "Shipped",
        "Delivered",
        "Cancelled",
      ]),
      date: z.iso.datetime(),
      note: z.string(),
    }),
  ),
  tracking: z.string(),
  carrier: z.string(),
});
