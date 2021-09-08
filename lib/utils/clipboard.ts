export function copy(text: string): boolean {
  const input = document.createElement('textarea');
  input.innerHTML = text;
  document.body.appendChild(input);
  input.select();

  try {
    return document.execCommand("copy");  // Security exception may be thrown by some browsers.
  } catch (ex) {
    console.warn("Copy to clipboard failed.", ex);
    return false;
  } finally {
    document.body.removeChild(input);
  }
}
