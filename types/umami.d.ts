interface Umami {
  track(eventName: string, data?: Record<string, string | number>): void;
}

interface Window {
  umami?: Umami;
}
