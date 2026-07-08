import '@testing-library/jest-dom'

if (typeof window !== 'undefined') {
  window.HTMLElement.prototype.scrollIntoView = jest.fn();

  class IntersectionObserver {
    observe = jest.fn();
    unobserve = jest.fn();
    disconnect = jest.fn();
  }

  Object.defineProperty(window, 'IntersectionObserver', {
    writable: true,
    configurable: true,
    value: IntersectionObserver,
  });

  if (!window.PointerEvent) {
    class PointerEvent extends Event {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      constructor(type: string, props: any) {
        super(type, props);
      }
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).PointerEvent = PointerEvent;
  }
}
