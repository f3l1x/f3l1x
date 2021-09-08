import Vue from "vue";

export function toggle<T extends string | number>(array: T[], key: T): T[] {
  if (array.includes(key)) {
    Vue.delete(array, array.indexOf(key));
  } else {
    array.push(key);
  }
  return array;
}
