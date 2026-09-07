import { clock, effect, frameLoop, init, surface } from "vgpu";
import liquidGlassShader from "../components/liquidGlass.wgsl";

const DEFAULT_POINTER = { x: 0.5, y: 0.5 };

export function startLiquidGlass(canvas, onError) {
  let disposed = false;
  let loop;
  let gpu;
  let removeResize;
  let removePointer;
  let removeScroll;
  let scrollVelocity = 0;
  let lastScroll = window.scrollY;
  let pointer = { ...DEFAULT_POINTER };

  const fail = (error) => {
    if (!disposed) onError?.(error);
  };

  void (async () => {
    try {
      gpu = await init();
      if (disposed) {
        gpu.dispose();
        return;
      }

      const canvasSurface = surface(gpu, canvas, { dpr: [1, 2] });
      const liquid = effect(gpu, liquidGlassShader, {
        label: "portfolio-liquid-glass",
        set: {
          params: {
            time: 0,
            aspect: canvasSurface.size[0] / canvasSurface.size[1],
            scroll: 0,
            intensity: 1,
            pointer: [pointer.x, pointer.y],
            resolution: canvasSurface.size,
          },
        },
      });
      await liquid.compile(canvasSurface);
      if (disposed) {
        gpu.dispose();
        return;
      }
      const time = clock(gpu);
      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      removeResize = canvasSurface.onResize(({ width, height }) => {
        liquid.set({
          params: {
            aspect: width / height,
            resolution: [width, height],
          },
        });
      });

      const updatePointer = (event) => {
        pointer = {
          x: event.clientX / window.innerWidth,
          y: 1 - event.clientY / window.innerHeight,
        };
      };
      const updateScroll = () => {
        const nextScroll = window.scrollY;
        scrollVelocity = Math.max(
          -1,
          Math.min(1, (nextScroll - lastScroll) / 120),
        );
        lastScroll = nextScroll;
      };

      if (!reducedMotion) {
        window.addEventListener("pointermove", updatePointer, { passive: true });
        window.addEventListener("scroll", updateScroll, { passive: true });
        removePointer = () => window.removeEventListener("pointermove", updatePointer);
        removeScroll = () => window.removeEventListener("scroll", updateScroll);
      }

      const render = (frame) => {
        try {
          scrollVelocity *= 0.94;
          liquid.set({
            params: {
              time: time.time,
              scroll: scrollVelocity,
              pointer: [pointer.x, pointer.y],
            },
          });
          frame.pass(canvasSurface, liquid);
        } catch (error) {
          loop?.stop();
          fail(error);
        }
      };

      if (reducedMotion) {
        liquid.draw(canvasSurface);
      } else {
        loop = frameLoop(gpu, render);
      }
    } catch (error) {
      fail(error);
    }
  })();

  return () => {
    disposed = true;
    loop?.stop();
    removeResize?.();
    removePointer?.();
    removeScroll?.();
    gpu?.dispose();
  };
}
