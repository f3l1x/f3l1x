export function clone<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj));
}

export function isEmpty(obj: object): boolean {
  return Object.keys(obj).length <= 0;
}
