export function debounce(delay: number = 150) {
  let delayRef: any = null;
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const original = descriptor.value;

    descriptor.value = function (...args: any) {
      clearTimeout(delayRef);
      delayRef = setTimeout(() => {
        original.apply(this, args);
      }, delay);
    };
    return descriptor;
  };
}
