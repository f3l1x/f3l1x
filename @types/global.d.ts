declare const InstallTrigger: any;

interface Window {
  smartlook: any;
  chrome: any;
}

interface DOMEvent<T extends EventTarget> extends Event {
  target: T,
  currentTarget: T
}

interface DOMDragEvent<T extends EventTarget> extends DragEvent {
  target: T,
  currentTarget: T
}

interface DOMClipboardEvent<T extends EventTarget> extends ClipboardEvent {
  target: T,
  currentTarget: T
}
