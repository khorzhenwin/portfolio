# Architecture

## Rendering boundary

`ThreeBackground` remains the temporary public component name so existing imports can be migrated safely. It renders no Three.js scene. On mount it calls `startLiquidGlass(canvas, onError)`.

The renderer creates one vGPU context, one canvas surface, one effect, and one clock. Dynamic input is written through `effect.set()` and the effect is drawn each frame. Cleanup stops the frame loop, unregisters listeners, and disposes the GPU context so React Strict Mode does not leak resources.

## Shader contract

`liquidGlass.wgsl` owns the `Params` uniform block:

- `time`: animation clock
- `aspect`: canvas aspect ratio
- `scroll`: damped scroll velocity
- `intensity`: field brightness
- `pointer`: normalized pointer coordinates
- `resolution`: canvas size

The entry shader keeps bindings in the entry file. Helper functions can later move to pure WGSL modules without introducing resource bindings in imported modules.

## Next.js integration

The project uses Next 15.5 and the vGPU WGSL loader in both the top-level Turbopack rule and webpack hook. The canvas is created only after mount, so WebGPU is never requested during server rendering.

## Progressive enhancement

If `init()` or pipeline compilation fails, the component marks the background as fallback and CSS remains visible. The renderer is decorative and has `aria-hidden="true"`; semantic content never depends on GPU output.
