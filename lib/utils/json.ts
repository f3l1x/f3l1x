export function safeParse(input: any): any | undefined {
  if (input === null) return null;
  if (input === undefined) return undefined;

  try {
    return JSON.parse(input);
  } catch (e) {
    return undefined;
  }
}

export function isJson(str: string): boolean {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }

  return true;
}
