import { normalize } from "~/lib/utils/url";
import { dayjs } from "~/lib/3rd/dayjs";

export function linker(item: any, type: string): string {
  switch (type) {
    case "article":
      return normalize('/blog', dayjs(item.date).format("YYYY/MM/DD"), item.slug);
    default:
      throw `Undefined linker type ${type}`;
  }
}
