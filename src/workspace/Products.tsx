import { useState, type FormEvent } from "react";
import {
  Archive,
  Check,
  ImagePlus,
  Pencil,
  Plus,
  Search,
  Trash2,
} from "lucide-react";
import { store, useStore } from "../store/store";
import { categories, money, totalStock } from "../domain/catalog";
import type { Product } from "../domain/types";
import { Dialog, errorMessage, useUI } from "../components/ui";
import { ProductImage } from "../components/CharacterArt";
import { saveProductVideo, deleteProductVideo } from "../media/localMedia";
import { productSchema } from "../domain/schemas";

const blankProduct = (): Product => ({
  id: "",
  name: "",
  subtitle: "",
  description: "",
  price: 499,
  category: "Breakfast club",
  character: "bunny",
  color: "#F5F0E6",
  background: "#FDE68A",
  variants: [
    { id: crypto.randomUUID(), label: "Vanilla", color: "#F5F0E6", stock: 0 },
  ],
  active: false,
  featured: false,
});

async function readImage(file: File) {
  if (!["image/png", "image/jpeg", "image/webp"].includes(file.type))
    throw new Error("Choose a PNG, JPEG, or WebP image.");
  if (file.size > 5000000)
    throw new Error("Please use an image smaller than 5 MB.");
  const bitmap = await createImageBitmap(file);
  const ratio = Math.min(1, 1000 / Math.max(bitmap.width, bitmap.height));
  const canvas = document.createElement("canvas");
  canvas.width = bitmap.width * ratio;
  canvas.height = bitmap.height * ratio;
  const context = canvas.getContext("2d");
  if (!context) {
    bitmap.close();
    throw new Error("Image processing is unavailable in this browser.");
  }
  context.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
  bitmap.close();
  const data = canvas.toDataURL("image/webp", 0.82);
  if (data.length > 1500000)
    throw new Error(
      "The processed image is still too large. Choose a smaller image.",
    );
  return data;
}

export default function Products() {
  const { products } = useStore();
  const { toast } = useUI();
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("active");
  const [editing, setEditing] = useState<Product | null>(null);
  const [isNew, setIsNew] = useState(false);
  const [error, setError] = useState("");
  const [imageBusy, setImageBusy] = useState(false);
  const [saving, setSaving] = useState(false);
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const shown = products.filter(
    (p) =>
      (filter === "all" || (filter === "active" ? p.active : !p.active)) &&
      `${p.name} ${p.id}`.toLowerCase().includes(query.toLowerCase()),
  );
  async function save(event: FormEvent) {
    event.preventDefault();
    if (!editing || saving) return;
    let savedVideoId: string | undefined;
    setSaving(true);
    setError("");
    try {
      if (isNew && products.some((p) => p.id === editing.id))
        throw new Error(
          "This product URL already exists. Choose a unique one.",
        );
      productSchema.parse(editing);
      const oldVideoId = products.find(
        (product) => product.id === editing.id,
      )?.squishVideoId;
      savedVideoId = videoFile ? await saveProductVideo(videoFile) : undefined;
      const product = savedVideoId
        ? { ...editing, squishVideoId: savedVideoId }
        : editing;
      store.saveProduct(product);
      setEditing(null);
      setVideoFile(null);
      toast(isNew ? "Preview product created." : "Preview product updated.");
      if (oldVideoId && oldVideoId !== product.squishVideoId)
        deleteProductVideo(oldVideoId).catch((failure) =>
          toast(errorMessage(failure)),
        );
    } catch (failure) {
      setError(errorMessage(failure));
      if (savedVideoId)
        deleteProductVideo(savedVideoId).catch((failure) =>
          toast(errorMessage(failure)),
        );
    } finally {
      setSaving(false);
    }
  }
  function edit(product: Product, fresh = false) {
    setEditing(structuredClone(product));
    setIsNew(fresh);
    setError("");
    setVideoFile(null);
  }
  return (
    <>
      <div className="workspace-heading">
        <div>
          <h1>Little personalities.</h1>
          <p>Manage the catalog, variants, and storefront visibility.</p>
        </div>
        <button
          className="button small-button"
          onClick={() => edit(blankProduct(), true)}
        >
          <Plus size={17} /> Add product
        </button>
      </div>
      <div className="workspace-toolbar">
        <div className="search-field">
          <Search size={17} />
          <input
            aria-label="Search products"
            placeholder="Search products or URL…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <select
          aria-label="Filter product status"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="active">Active products</option>
          <option value="archived">Archived products</option>
          <option value="all">All products</option>
        </select>
      </div>
      <div className="workspace-panel table-scroll">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Category</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Status</th>
              <th>
                <span className="sr-only">Actions</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {shown.map((product) => (
              <tr key={product.id}>
                <td>
                  <div className="table-product">
                    <div style={{ background: product.background }}>
                      <ProductImage
                        id={product.id}
                        character={product.character}
                        color={product.color}
                        name={product.name}
                      />
                    </div>
                    <span>
                      <strong>{product.name}</strong>
                      <small>{product.id}</small>
                    </span>
                  </div>
                </td>
                <td>{product.category}</td>
                <td>{money(product.price)}</td>
                <td>{totalStock(product)}</td>
                <td>
                  <span className="status-badge">
                    {product.active ? "Active" : "Archived"}
                  </span>
                </td>
                <td>
                  <div className="table-actions">
                    <button
                      className="icon-button"
                      aria-label={`Edit ${product.name}`}
                      onClick={() => edit(product)}
                    >
                      <Pencil size={16} />
                    </button>
                    <button
                      className="icon-button"
                      aria-label={`${product.active ? "Archive" : "Restore"} ${product.name}`}
                      onClick={() => {
                        try {
                          store.saveProduct({
                            ...product,
                            active: !product.active,
                          });
                          toast(
                            product.active
                              ? "Product archived. It is hidden from the shop."
                              : "Product restored to the shop.",
                          );
                        } catch (failure) {
                          toast(errorMessage(failure));
                        }
                      }}
                    >
                      {product.active ? (
                        <Archive size={17} />
                      ) : (
                        <Check size={17} />
                      )}
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {!shown.length && (
          <p className="workspace-empty">No products match this view.</p>
        )}
      </div>
      <Dialog
        open={Boolean(editing)}
        onClose={() => {
          if (!saving) setEditing(null);
        }}
        title={isNew ? "Add a little personality" : "Edit product"}
        className="product-editor"
      >
        {editing && (
          <form onSubmit={save}>
            <div className="form-grid">
              <label className="field full-field">
                Product name
                <input
                  required
                  minLength={2}
                  maxLength={80}
                  value={editing.name}
                  onChange={(e) =>
                    setEditing({
                      ...editing,
                      name: e.target.value,
                      ...(isNew
                        ? {
                            id: e.target.value
                              .toLowerCase()
                              .replace(/[^a-z0-9]+/g, "-")
                              .replace(/^-|-$/g, ""),
                          }
                        : {}),
                    })
                  }
                />
              </label>
              <label className="field full-field">
                Product URL name
                <input
                  required
                  pattern="[a-z0-9]+(-[a-z0-9]+)*"
                  readOnly={!isNew}
                  value={editing.id}
                  onChange={(e) =>
                    setEditing({ ...editing, id: e.target.value })
                  }
                />
              </label>
              <label className="field full-field">
                Short description
                <input
                  required
                  minLength={2}
                  maxLength={100}
                  value={editing.subtitle}
                  onChange={(e) =>
                    setEditing({ ...editing, subtitle: e.target.value })
                  }
                />
              </label>
              <label className="field full-field">
                Description
                <textarea
                  required
                  minLength={20}
                  maxLength={3000}
                  rows={4}
                  value={editing.description}
                  onChange={(e) =>
                    setEditing({ ...editing, description: e.target.value })
                  }
                />
              </label>
              <label className="field">
                Price (INR)
                <input
                  type="number"
                  required
                  min="1"
                  max="100000"
                  step="1"
                  value={editing.price}
                  onChange={(e) =>
                    setEditing({ ...editing, price: Number(e.target.value) })
                  }
                />
              </label>
              <label className="field">
                Category
                <select
                  value={editing.category}
                  onChange={(e) =>
                    setEditing({
                      ...editing,
                      category: e.target.value as Product["category"],
                    })
                  }
                >
                  {categories.slice(1).map((category) => (
                    <option key={category}>{category}</option>
                  ))}
                </select>
              </label>
              <label className="field">
                Placeholder illustration
                <select
                  value={editing.character}
                  onChange={(e) =>
                    setEditing({
                      ...editing,
                      character: e.target.value as Product["character"],
                    })
                  }
                >
                  {[
                    "butter",
                    "cheese",
                    "pancakes",
                    "donut",
                    "egg",
                    "mochi",
                    "loaf",
                    "bunny",
                    "bear",
                    "frog",
                    "cat",
                    "peach",
                  ].map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
              </label>
              <label className="field">
                Illustration colour
                <input
                  type="color"
                  value={editing.color}
                  onChange={(e) =>
                    setEditing({ ...editing, color: e.target.value })
                  }
                />
              </label>
              <label className="field">
                Photo background
                <input
                  type="color"
                  value={editing.background}
                  onChange={(e) =>
                    setEditing({ ...editing, background: e.target.value })
                  }
                />
              </label>
              <label className="field image-upload">
                <span>
                  <ImagePlus size={17} /> Product image
                </span>
                <input
                  type="file"
                  accept="image/png,image/jpeg,image/webp"
                  disabled={imageBusy}
                  onChange={async (e) => {
                    const file = e.target.files?.[0];
                    if (!file) return;
                    setImageBusy(true);
                    setError("");
                    try {
                      const image = await readImage(file);
                      setEditing((current) =>
                        current ? { ...current, image } : null,
                      );
                    } catch (failure) {
                      setError(errorMessage(failure));
                    } finally {
                      setImageBusy(false);
                    }
                  }}
                />
                <small>
                  PNG, JPEG, or WebP. Up to 5 MB. Stored in this browser.
                </small>
              </label>
              {editing.image && (
                <div className="upload-preview full-field">
                  <img src={editing.image} alt="Product upload preview" />
                  <button
                    type="button"
                    className="text-link"
                    onClick={() => {
                      const next = { ...editing };
                      delete next.image;
                      setEditing(next);
                    }}
                  >
                    Remove image
                  </button>
                </div>
              )}
            </div>
            <div className="product-video-upload">
              <label className="field">
                Squish video (optional)
                <input
                  aria-label="Squish video (optional)"
                  type="file"
                  accept="video/mp4,video/webm"
                  disabled={saving}
                  onChange={(event) => {
                    const file = event.target.files?.[0];
                    if (!file) return;
                    if (
                      !["video/mp4", "video/webm"].includes(file.type) ||
                      file.size > 25000000
                    ) {
                      setError(
                        "Choose an MP4 or WebM clip smaller than 25 MB.",
                      );
                      event.target.value = "";
                      return;
                    }
                    setVideoFile(file);
                    setError("");
                  }}
                />
                <small>
                  Use your own product footage. Up to 60 seconds and 25 MB. The
                  product’s squish button plays this clip. Stored in this
                  browser preview.
                </small>
              </label>
              {(videoFile || editing.squishVideoId) && (
                <div className="attached-video">
                  <span>{videoFile?.name ?? "Squish clip attached"}</span>
                  <button
                    type="button"
                    className="text-link"
                    onClick={() => {
                      const next = { ...editing };
                      delete next.squishVideoId;
                      setEditing(next);
                      setVideoFile(null);
                    }}
                  >
                    Remove clip
                  </button>
                </div>
              )}
            </div>
            <div className="editor-variants">
              <div className="section-heading">
                <h3>Variants</h3>
                <button
                  type="button"
                  className="text-link"
                  onClick={() =>
                    setEditing({
                      ...editing,
                      variants: [
                        ...editing.variants,
                        {
                          id: crypto.randomUUID(),
                          label: "",
                          color: editing.color,
                          stock: 0,
                        },
                      ],
                    })
                  }
                >
                  <Plus size={15} /> Add variant
                </button>
              </div>
              {editing.variants.map((variant, index) => (
                <div key={variant.id} className="variant-editor">
                  <label className="field">
                    Name
                    <input
                      aria-label={`Variant ${index + 1} name`}
                      required
                      value={variant.label}
                      maxLength={60}
                      onChange={(e) =>
                        setEditing({
                          ...editing,
                          variants: editing.variants.map((v) =>
                            v.id === variant.id
                              ? { ...v, label: e.target.value }
                              : v,
                          ),
                        })
                      }
                    />
                  </label>
                  <label className="field">
                    Colour
                    <input
                      type="color"
                      aria-label={`Variant ${index + 1} colour`}
                      value={variant.color}
                      onChange={(e) =>
                        setEditing({
                          ...editing,
                          variants: editing.variants.map((v) =>
                            v.id === variant.id
                              ? { ...v, color: e.target.value }
                              : v,
                          ),
                        })
                      }
                    />
                  </label>
                  <label className="field">
                    Stock
                    <input
                      type="number"
                      aria-label={`Variant ${index + 1} stock`}
                      min="0"
                      max="100000"
                      step="1"
                      required
                      value={variant.stock}
                      onChange={(e) =>
                        setEditing({
                          ...editing,
                          variants: editing.variants.map((v) =>
                            v.id === variant.id
                              ? { ...v, stock: Number(e.target.value) }
                              : v,
                          ),
                        })
                      }
                    />
                  </label>
                  <button
                    type="button"
                    className="icon-button"
                    aria-label={`Remove variant ${index + 1}`}
                    disabled={editing.variants.length <= 1}
                    onClick={() =>
                      setEditing({
                        ...editing,
                        variants: editing.variants.filter(
                          (v) => v.id !== variant.id,
                        ),
                      })
                    }
                  >
                    <Trash2 size={17} />
                  </button>
                </div>
              ))}
            </div>
            <div className="editor-flags">
              <label className="checkbox">
                <input
                  type="checkbox"
                  checked={editing.active}
                  onChange={(e) =>
                    setEditing({ ...editing, active: e.target.checked })
                  }
                />{" "}
                Visible in shop
              </label>
              <label className="checkbox">
                <input
                  type="checkbox"
                  checked={editing.featured}
                  onChange={(e) =>
                    setEditing({ ...editing, featured: e.target.checked })
                  }
                />{" "}
                Featured on homepage
              </label>
            </div>
            <div className="form-error" role="alert">
              {error}
            </div>
            <button className="button full" disabled={imageBusy || saving}>
              {saving
                ? "Saving product…"
                : imageBusy
                  ? "Processing image…"
                  : "Save preview product"}
            </button>
          </form>
        )}
      </Dialog>
    </>
  );
}
