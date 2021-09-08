export function nl2br(str: string): string {
  return str.replace(/(?:\r\n|\r|\n)/g, '<br>');
}

export function trim(str: string, char: string): string {
  return str.replace(new RegExp(`^${char}|${char}$`, 'g'), '');
}

export function ltrim(str: string, char: string): string {
  return str.replace(new RegExp(`^${char}`, 'g'), '');
}

export function rtrim(str: string, char: string): string {
  return str.replace(new RegExp(`${char}$`, 'g'), '');
}

export function reverse(str: string): string {
  return str.split("").reverse().join("");
}

export function numeral(num: number): string {
  if (num >= 1000000000) {
    return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'g';
  }

  if (num >= 1000000) {
    return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'm';
  }

  if (num >= 1000) {
    return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'k';
  }

  return String(num);
}

export function hashCode(str: string): number {
  return Array.from(str)
    .reduce((s, c) => Math.imul(31, s) + c.charCodeAt(0) | 0, 0)
}

export function safeString(str: any): string {
  if (str === undefined) return '';
  if (str === null) return '';
  if (typeof str === 'boolean') return str ? '1' : '0';
  return String(str);
}

export function isEmpty(str: any): boolean {
  if (str === undefined) return true;
  if (str === null) return true;
  if (str === false) return true;

  return String(str).trim().length <= 0;
}
