export function throttling(fun, wait) {
  let times = null;

  return function() {
    let arg = arguments;
    if (!times) {
      times = setTimeout(() => {
        times = null;
        fun.apply(this, arg);
      }, wait);
    }
  };
}
