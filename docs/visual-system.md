# Visual System

## Material language

Use translucent surfaces over the liquid field rather than putting content inside a canvas. Panels should use a low-alpha neutral fill, a one-pixel light border, restrained backdrop blur, and a clear focus-visible outline.

## Color roles

- Foundation: near-black blue-neutral background
- Field: ice blue and cyan with low-saturation depth bands
- Action: existing orange accent for links and primary actions
- Text: white for headings, cool gray for supporting copy
- Status: reserve warm colors for emphasis, not decoration everywhere

## Interaction

Pointer movement gently biases the field. Scroll adds a damped vertical energy response. These inputs must never capture pointer events from links, buttons, or forms. Hover and focus should be communicated by the DOM surface itself, not only by GPU animation.

## Responsive behavior

The canvas remains fixed and decorative. Content containers control readable measure and spacing. On touch devices, keep the field low-frequency and avoid device-motion permission prompts. Reduced motion disables continuous animation and uses a static frame.
