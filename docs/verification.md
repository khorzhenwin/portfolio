# Verification

## Local commands

```bash
npm run lint
npm run build
npx vgpu check components/liquidGlass.wgsl --require-validation
```

## Browser checks

- Load `/`, `/blog`, and one article route with WebGPU enabled.
- Confirm the canvas is nonblank and content remains selectable and clickable.
- Move the pointer, scroll, resize, and navigate between routes.
- Enable `prefers-reduced-motion` and confirm one static frame renders.
- Test a browser without WebGPU and confirm the CSS fallback remains visible.
- Check keyboard focus rings and mobile layout at fixed viewport sizes.

## Performance checks

- Confirm the first effect is compiled before the animation loop begins.
- Confirm route changes do not create another GPU context.
- Confirm React Strict Mode does not leave duplicate loops or listeners.
- Check GPU load and frame stability on a mobile-class device.
