class BaseStorage {
  #maxSize;
  #storage;
  constructor(size = 10) {
    if (typeof size !== "number" || size <= 0)
      throw new Error("Invalid max size");
    this.#maxSize = size;
    this.#storage = [];
  }

  _getStorage() {
    return this.#storage;
  }

  isEmpty() {
    return this.#storage.length == 0;
  }

  toArray() {
    return [...this.#storage];
  }
}

class Stack extends BaseStorage {
  push(elem) {
    const storage = this._getStorage();
    if (storage.length == this.maxSize)
      throw new Error("Cannot push, stack is full.");
    storage.push(elem);
  }
  pop() {
    if (this.isEmpty()) throw new Error("Stack is Empty. Cannot pop.");
    return this._getStorage().pop();
  }
  peek() {
    const storage = this._getStorage();
    return storage[storage.length - 1] ?? null;
  }

  static fromIterable(iterable) {
    if (iterable == null || typeof iterable[Symbol.iterator] !== "function")
      throw new Error(`${iterable} isn't iterable`);
    const tempArray = Array.from(iterable);
    const stack = new Stack(tempArray.length);
    for (const element of tempArray) {
      stack.push(element);
    }
    return stack;
  }
}

class Queue extends BaseStorage {
  push(elem) {
    const storage = this._getStorage();
    if (storage.length == this.maxSize)
      throw new Error("Cannot push, queue is full.");
    storage.push(elem);
  }
  shift() {
    if (this.isEmpty()) throw new Error("Stack is Empty. Cannot pop.");
    return this._getStorage().shift();
  }
  peek() {
    const storage = this._getStorage();
    return storage[0] ?? null;
  }
  static fromIterable(iterable) {
    if (iterable == null || typeof iterable[Symbol.iterator] !== "function")
      throw new Error(`${iterable} isn't iterable`);
    const tempArray = Array.from(iterable);
    const queue = new Queue(tempArray.length);
    for (const element of tempArray) {
      queue.push(element);
    }
    return queue;
  }
}
