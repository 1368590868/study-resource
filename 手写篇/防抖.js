const debounce = (fn, delay=500) => {
  let timer = 0;

  return function (...args) { 
    if (timer) clearTimeout(timer);

    timer = setTimeout(() => {
      if (typeof fn === "function") fn.apply(this, args);
    }, delay);
  };
};

const fn = () => {
  console.log("start input");
};


const testDebounce = debounce(fn(),1000)

testDebounce('hello')