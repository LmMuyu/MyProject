export function debouncing(fun, wait) {
  let times = null;

  return function() {
    let arg = arguments;
    if (times) clearTimeout(times);
    times = setTimeout(() => {
      fun.apply(this, arg);
    }, wait);
  };
}
