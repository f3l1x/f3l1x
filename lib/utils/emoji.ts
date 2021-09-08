import nodeEmoji from "node-emoji";

export function emojify(str: string): string {
  return nodeEmoji.emojify(str);
}
