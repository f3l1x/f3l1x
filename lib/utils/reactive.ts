import Vue, { WatchOptions } from "vue";

export function watchOnce(vue: Vue, expression: string, callback: (...args: any) => void, options?: WatchOptions): void {
  const unwatch = vue.$watch(expression, (...args) => {
    callback(...args);
    unwatch();
  }, options);
}
