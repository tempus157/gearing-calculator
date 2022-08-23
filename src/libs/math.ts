export function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export function round(value: number, digit: number) {
  const power = 10 ** digit;
  return Math.round(value * power) / power;
}
