struct Params {
  time: f32,
  aspect: f32,
  scroll: f32,
  intensity: f32,
  pointer: vec2f,
  resolution: vec2f,
};

@group(0) @binding(0) var<uniform> params: Params;

fn hash(value: vec2f) -> f32 {
  return fract(sin(dot(value, vec2f(127.1, 311.7))) * 43758.5453);
}

fn noise(value: vec2f) -> f32 {
  let cell = floor(value);
  let local = fract(value);
  let smoothValue = local * local * (3.0 - 2.0 * local);
  let a = hash(cell);
  let b = hash(cell + vec2f(1.0, 0.0));
  let c = hash(cell + vec2f(0.0, 1.0));
  let d = hash(cell + vec2f(1.0, 1.0));
  return mix(mix(a, b, smoothValue.x), mix(c, d, smoothValue.x), smoothValue.y);
}

fn liquid(uv: vec2f) -> vec3f {
  let centered = (uv - 0.5) * vec2f(params.aspect, 1.0);
  let pointer = (params.pointer - 0.5) * 0.55;
  let drift = vec2f(params.time * 0.075, -params.time * 0.045 + params.scroll * 0.3);
  let warped = centered + pointer;
  let wave = sin(warped.x * 5.4 + params.time * 0.65) * 0.16;
  let field = noise(warped * 4.6 + drift + wave) * 0.9;
  let ribbon = 0.5 + 0.5 * sin((warped.x * 1.4 + warped.y * 2.2 + field) * 8.0 - params.time * 0.5);
  let bands = pow(1.0 - abs(sin((warped.x - warped.y) * 7.0 + params.time * 0.35)), 12.0);
  let caustic = pow(max(0.0, sin((warped.x + field) * 10.0 - params.time * 0.8)), 8.0);

  let deep = vec3f(0.015, 0.035, 0.12);
  let electric = vec3f(0.02, 0.55, 0.95);
  let glass = vec3f(0.35, 0.95, 1.0);
  let warm = vec3f(1.0, 0.22, 0.025);
  var color = mix(deep, electric, smoothstep(0.12, 0.7, field));
  color = mix(color, glass, smoothstep(0.58, 0.9, ribbon) * 0.72);
  color += warm * smoothstep(0.82, 0.98, ribbon) * 0.55;
  color += vec3f(0.15, 0.55, 0.95) * bands * 0.8;
  color += vec3f(0.55, 0.9, 1.0) * caustic * 0.65;
  return color * params.intensity;
}

@fragment
fn fs_main(@location(0) uv: vec2f) -> @location(0) vec4f {
  let color = liquid(uv);
  let vignette = smoothstep(1.08, 0.28, distance(uv, vec2f(0.5)));
  let highlight = pow(max(0.0, 1.0 - distance(uv, vec2f(0.28, 0.16)) * 2.2), 4.0);
  let edgeLight = smoothstep(0.2, 0.0, abs(uv.y - (0.2 + uv.x * 0.22)));
  return vec4f((color + vec3f(highlight * 0.45, highlight * 0.65, highlight) + vec3f(edgeLight * 0.18)) * vignette, 1.0);
}
