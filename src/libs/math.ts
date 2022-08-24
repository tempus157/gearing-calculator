export function clamp(x: number, min: number, max: number) {
  return Math.min(Math.max(x, min), max);
}

export function round(x: number, digit: number) {
  const power = 10 ** digit;
  return Math.round(x * power) / power;
}

export function lerp(x: number, y: number, t: number) {
  return x * (1 - t) + y * t;
}

export function inverseLerp(x: number, y: number, value: number) {
  return clamp((value - x) / (y - x), 0, 1);
}
