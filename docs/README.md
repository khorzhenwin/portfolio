# Liquid Glass Redesign

This redesign replaces the route-level Three.js particle background with a shared vGPU WebGPU liquid field.

## Current implementation

- `components/ThreeBackground.js` now owns a client-mounted canvas.
- `lib/liquidGlassRenderer.js` owns vGPU initialization, uniforms, input listeners, frame lifecycle, and cleanup.
- `components/liquidGlass.wgsl` renders the animated liquid field.
- `pages/_app.js` mounts the renderer once for every route.
- WebGPU failure falls back to the CSS background.
- Reduced-motion users receive one static GPU frame without pointer or scroll listeners.

## Direction

Keep text, links, images, project cards, and articles in accessible DOM. Use vGPU for atmosphere and motion, then build glass surfaces with CSS over the field. The visual language is a technical instrument panel: dark neutral surfaces, ice/cyan energy, and warm orange actions.

## Next pass

1. Refine the glass tokens and panel hierarchy in `styles/globals.css` and page styles.
2. Add hover/focus state uniforms for project and navigation surfaces.
3. Add deterministic browser pixel checks and a non-WebGPU manual check.
4. Split the WGSL into pure helper modules when the field stabilizes.
