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
      constructor(type: string, props: Record<string, unknown>) {
        super(type, props);
      }
    }
    Object.defineProperty(window, 'PointerEvent', {
      value: PointerEvent,
    });
  }
}
