export default class Stack {
  constructor() {
    this.item = [];
  }

  push(value) {
    return this.item.push(value);
  }

  pop() {
    if (this.isEmpty()) {
      return undefined; // or throw an error if preferred
    }
    return this.item.pop();
  }

  peek() {
    if (this.isEmpty()) {
      return undefined; // or throw an error
    }
    return this.item[this.item.length - 1];
  }

  isEmpty() {
    return this.item.length === 0;
  }

  size() {
    return this.item.length;
  }

  clear() {
    this.item = [];
  }
}
