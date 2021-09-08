import { trimStart } from "lodash";
import { isEmpty } from "~/lib/utils/strings";

export function isValid(url: string): boolean {
  try {
    new URL(url);
  } catch (_) {
    return false;
  }

  return true;
}

export function isAbsolute(url: string): boolean {
  return (url.indexOf('://') > 0 || url.indexOf('//') === 0);
}

export function isRelative(url: string): boolean {
  return !isAbsolute(url);
}

export function normalize(...parts: string[]): string {
  const output = [];
  const filtered = parts.filter(p => !isEmpty(p));

  for (const [i, part] of filtered.entries()) {
    if (i <= 0) {
      output.push(part);
    } else {
      output.push(trimStart(part, '/'));
    }
  }

  return output.join('/');
}
