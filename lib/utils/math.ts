export function clamp(min: number, value: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

export function parseNumber(num: any, decimals: number = 0): number {
  return parseInt(String(num * Math.pow(10, decimals))) / Math.pow(10, decimals);
}
