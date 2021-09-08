import { clone } from "@/lib/utils/objects";
import Vue from "vue";

export function safeRemove<T extends object>(data: T[], key: string | number): T[] {
  const tmp = clone(data);
  Vue.delete(tmp, key);

  return tmp;
}

export function safeReplace<T extends object>(data: T[], key: number, item: T): T[] {
  const tmp = clone(data);
  tmp[key] = item;

  return tmp;
}
