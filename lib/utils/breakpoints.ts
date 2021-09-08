export function isMobile() {
  return window.matchMedia("(max-width: 639px)").matches;
}

export function onDesktop(vue: Vue, callback: (e: UIEvent) => void): void {
  const handler = (e: UIEvent): void => {
    if ((window.innerWidth || document.documentElement.clientWidth) >= 1280) {
      callback(e);
    }
  };

  window.addEventListener('resize', handler, false);

  vue.$once('hook:beforeDestroy', () => {
    window.removeEventListener('resize', handler, false);
  })
}

export function onMobile(vue: Vue, callback: (e: UIEvent) => void): void {
  const handler = (e: UIEvent): void => {
    if ((window.innerWidth || document.documentElement.clientWidth) >= 1280) {
      callback(e);
    }
  };

  window.addEventListener('resize', handler, false);

  vue.$once('hook:beforeDestroy', () => {
    window.removeEventListener('resize', handler, false);
  })
}
