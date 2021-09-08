export function onKeydown(vue: Vue, callback: (e: KeyboardEvent) => void): void {
  window.addEventListener('keydown', callback, false);

  vue.$once('hook:beforeDestroy', () => {
    window.removeEventListener('keydown', callback, false);
  })
}

export function onKeydownEscape(vue: Vue, callback: (e: KeyboardEvent) => void): void {
  onKeydown(vue, (e) => {
    if (e.code === 'Escape') {
      callback(e);
    }
  })
}
