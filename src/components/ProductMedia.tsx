import { useEffect, useRef, useState } from "react";
import { Hand, Image, Pause } from "lucide-react";
import type { Product } from "../domain/types";
import { ProductImage } from "./CharacterArt";
import { loadProductVideo } from "../media/localMedia";
import { errorMessage } from "./ui";
import "../styles/product-media.css";

export function ProductMedia({
  product,
  color,
}: {
  product: Product;
  color: string;
}) {
  const [url, setUrl] = useState("");
  const [playing, setPlaying] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [error, setError] = useState("");
  const video = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    let cancelled = false;
    let objectUrl = "";
    setUrl("");
    setError("");
    setShowVideo(false);
    setPlaying(false);
    if (product.squishVideoId) {
      loadProductVideo(product.squishVideoId)
        .then((blob) => {
          if (cancelled) return;
          objectUrl = URL.createObjectURL(blob);
          setUrl(objectUrl);
        })
        .catch((failure) => {
          if (!cancelled) setError(errorMessage(failure));
        });
    }
    return () => {
      cancelled = true;
      if (objectUrl) URL.revokeObjectURL(objectUrl);
    };
  }, [product.squishVideoId, product.id]);
  useEffect(() => {
    video.current?.pause();
    setPlaying(false);
    setShowVideo(false);
  }, [color]);
  async function squish() {
    if (!video.current) return;
    setError("");
    setShowVideo(true);
    video.current.currentTime = 0;
    try {
      await video.current.play();
      setPlaying(true);
    } catch {
      setError(
        "The video could not play. Try again or use the video controls.",
      );
      setPlaying(false);
    }
  }
  return (
    <div className="product-gallery">
      <div
        className="product-main-visual product-photo"
        style={{
          background: `color-mix(in srgb, ${product.background} 28%, var(--cream))`,
        }}
      >
        {!showVideo && (
          <ProductImage
            id={product.id}
            character={product.character}
            color={color}
            name={product.name}
          />
        )}
        {url && (
          <video
            ref={video}
            className={
              showVideo
                ? "product-squish-video"
                : "product-squish-video hidden-video"
            }
            src={url}
            controls={showVideo}
            playsInline
            muted
            preload="metadata"
            aria-label={`${product.name} squish demonstration`}
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
            onEnded={() => setPlaying(false)}
            onError={() => {
              setError(
                "This video format could not be played. Product image remains available.",
              );
              setPlaying(false);
              setShowVideo(false);
            }}
          />
        )}
        {!product.image && !showVideo && (
          <span className="visual-note">
            Concept placeholder. Actual product photo pending.
          </span>
        )}
      </div>
      {url && (
        <div className="product-video-controls">
          <button
            className="squish-button"
            onClick={
              playing ? () => video.current?.pause() : () => void squish()
            }
          >
            {playing ? (
              <>
                <Pause size={17} /> Pause clip
              </>
            ) : (
              <>
                <Hand size={17} />{" "}
                {showVideo ? "Squish again" : "Give it a squish"}
              </>
            )}
          </button>
          {showVideo && (
            <button
              className="text-link"
              onClick={() => {
                video.current?.pause();
                setShowVideo(false);
                setPlaying(false);
              }}
            >
              <Image size={16} /> Back to photo
            </button>
          )}
        </div>
      )}
      {error && (
        <p className="small media-error" role="status">
          {error}
        </p>
      )}
    </div>
  );
}
