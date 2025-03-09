const myIterable = {
  from: "aaa",
  to: 4,
  [Symbol.iterator]() {
    const from = this.from;
    const to = this.to;
    if (typeof from == "number" && typeof to == "number" && to >= from) {
      let index = from - 1;
      return {
        next() {
          if (index < to) {
            index++;
            return { value: index, done: false };
          } else return { done: true };
        },
      };
    } else {
      throw new Error("Something went wrong");
    }
  },
};

for (const number of myIterable) {
  console.log(number);
}
