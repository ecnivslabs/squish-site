import { useEffect, useId, useRef, useState } from "react";
import { createPlayground } from "./createPlayground";

export default function SquishyScene() {
  const host = useRef<HTMLDivElement>(null);
  const instructions = useId();
  const [failed, setFailed] = useState(false);
  const [ready, setReady] = useState(false);
  const [status, setStatus] = useState("");
  useEffect(() => {
    if (!host.current) return;
    try {
      const dispose = createPlayground(host.current, setStatus, setFailed);
      setReady(true);
      return dispose;
    } catch {
      setFailed(true);
    }
  }, []);
  return (
    <div className="squishy-viewer hero-viewer">
      <div
        ref={host}
        className={`three-host ${ready && !failed ? "ready" : ""}`}
        role={failed ? "img" : "application"}
        aria-label={
          failed
            ? "Butter, cheese, and pancake squishy concepts"
            : "Squishy play window"
        }
        aria-describedby={instructions}
        tabIndex={failed ? undefined : 0}
      >
        {(!ready || failed) && (
          <img
            className="scene-fallback"
            src="/products/pancake-stack-ffcba4.png"
            alt=""
          />
        )}
      </div>
      <p id={instructions} className="sr-only">
        Interactive concept models with simulated soft-body physics. Press and
        hold a squishy to squeeze it. Drag to lift, then release to throw.
        Keyboard: 1 selects butter, 2 cheese, 3 pancakes. Space grabs or
        releases. Arrow keys move. Shift with an arrow throws. Escape releases.
      </p>
      <span className="sr-only" role="status">
        {status}
      </span>
      {failed && (
        <p className="scene-unavailable">
          Interactive preview unavailable. Explore the product photos below.
        </p>
      )}
    </div>
  );
}
