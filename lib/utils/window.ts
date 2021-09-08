export function clickOutside(element: string, cb: (event: MouseEvent) => void) {
  const handler = (e: MouseEvent) => {
    // If user clicks inside the component, do nothing
    if ((e.target as HTMLElement).closest(element)) return;

    // If user clicks outside the element, hide it!
    // We can make sure that we clicked outside inside cb
    cb(e);

    // Remove handler to prevent overflow
    document.removeEventListener("click", handler);
  };

  document.addEventListener("click", handler);
}

export const browser = {
  isFirefox(): boolean {
    return typeof InstallTrigger !== "undefined";
  },
  isSafari(): boolean {
    return !!window.navigator.userAgent.match(/Version\/[\d]+.*Safari/);
  },
  isChrome(): boolean {
    return !!window.chrome;
  }
};

export function isBrowserSupported(): boolean {
  return browser.isChrome() || browser.isFirefox() || browser.isSafari();
}

export function onScroll(vue: Vue, callback: (e: Event) => void): void {
  window.addEventListener('scroll', callback, false);

  vue.$once('hook:beforeDestroy', () => {
    window.removeEventListener('scroll', callback, false);
  })
}
