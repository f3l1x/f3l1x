export function userclick(e: KeyboardEvent, url: string): void {
  if (e.shiftKey) {
    window.open(url, "_blank");
  } else if (e.metaKey || e.ctrlKey) {
    window.open(url);
  } else {
    window.location.href = url;
  }
}
