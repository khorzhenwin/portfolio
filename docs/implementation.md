# Implementation Checklist

- [x] Install `vgpu` and upgrade Next to 15.5.
- [x] Configure `.wgsl` loading for Turbopack and webpack.
- [x] Replace the Three.js particle implementation with a vGPU canvas.
- [x] Add pointer and scroll uniforms.
- [x] Prewarm the first effect pipeline.
- [x] Add reduced-motion rendering.
- [x] Dispose GPU resources and event listeners on teardown.
- [x] Mount the background once from `pages/_app.js`.
- [x] Preserve CSS fallback behavior when WebGPU is unavailable.
- [ ] Rename `ThreeBackground` to `LiquidGlassBackground` after the route migration is stable.
- [ ] Refine glass panel tokens and page composition.
- [ ] Add deterministic browser tests.
