// Import the Stack class (or ensure it's in the same directory)
import Stack from "../structures/Stack";

describe("Stack", () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  test("should be empty initially", () => {
    expect(stack.isEmpty()).toBe(true);
    expect(stack.size()).toBe(0);
  });

  test("should add element with push()", () => {
    stack.push(10);
    expect(stack.isEmpty()).toBe(false);
    expect(stack.size()).toBe(1);
    expect(stack.peek()).toBe(10);
  });

  test("should remove element with pop()", () => {
    stack.push(10);
    stack.push(20);
    const poppedValue = stack.pop();
    expect(poppedValue).toBe(20); // Last in, first out
    expect(stack.size()).toBe(1);
    expect(stack.peek()).toBe(10);
  });

  test("should return undefined when popping from an empty stack", () => {
    const poppedValue = stack.pop();
    expect(poppedValue).toBeUndefined();
    expect(stack.isEmpty()).toBe(true);
  });

  test("should return the top element with peek() without removing it", () => {
    stack.push(10);
    stack.push(20);
    expect(stack.peek()).toBe(20); // Peek at top without removing it
    expect(stack.size()).toBe(2); // Stack size should remain unchanged
  });

  test("should correctly track the size of the stack", () => {
    stack.push(10);
    stack.push(20);
    expect(stack.size()).toBe(2);

    stack.pop();
    expect(stack.size()).toBe(1);

    stack.push(30);
    expect(stack.size()).toBe(2);
  });

  test("should clear the stack with clear()", () => {
    stack.push(10);
    stack.push(20);
    stack.clear();
    expect(stack.isEmpty()).toBe(true);
    expect(stack.size()).toBe(0);
  });
});
