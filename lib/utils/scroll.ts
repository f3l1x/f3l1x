export function scrollTo(vue: Vue, selector: string) {
  vue.$nextTick(() => {
    const el = document.querySelector(selector);
    el && el.scrollIntoView();
  });
}
