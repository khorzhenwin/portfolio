import { useEffect, useRef, useState } from "react";
import { startLiquidGlass } from "../lib/liquidGlassRenderer";

export default function ThreeBackground() {
  const canvasRef = useRef(null);
  const [fallback, setFallback] = useState(false);

  useEffect(() => {
    if (!canvasRef.current) return undefined;

    return startLiquidGlass(canvasRef.current, () => setFallback(true));
  }, []);

  return (
    <div className={`three-bg${fallback ? " three-bg-fallback" : ""}`}>
      <div className="three-bg-gradient" />
      <canvas ref={canvasRef} className="liquid-glass-canvas" aria-hidden="true" />
    </div>
  );
}
