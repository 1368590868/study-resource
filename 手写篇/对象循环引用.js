class Test {
  getCircularReplacer() {
    const seen = new WeakSet();
    return (key, value) => {
      if (typeof value === "object" && value !== null) {
        console.log(seen.has(value));
        if (seen.has(value)) {
          return;
        }
        seen.add(value);
      }
      return value;
    };
  }

  constructor() {
    const obj = { a: 3 };
    obj.b = obj;
    console.log(obj)

    const objs = { a: 3, b: { a: 3, b: { a: 3, b: { a: 3, b: 4 } } } };

    const str = JSON.stringify(obj, this.getCircularReplacer());
    console.log(str);
  }
}

new Test();
