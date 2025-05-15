import SinglyLinkedList from "../../structures/linkedlist/SinglyLinkedList.js";

describe("SinglyLinkedList", () => {
  let list;

  beforeEach(() => {
    list = new SinglyLinkedList();
  });

  test("should be empty initially", () => {
    expect(list.head).toBeNull();
    expect(list.tail).toBeNull();
    expect(list.getLength()).toBe(0);
  });

  test("should add element at the beginning with insertAtBegining()", () => {
    list.insertAtBegining(10);
    expect(list.head.value).toBe(10);
    expect(list.tail.value).toBe(10);
    expect(list.getLength()).toBe(1);

    list.insertAtBegining(20);
    expect(list.head.value).toBe(20);
    expect(list.tail.value).toBe(10);
    expect(list.getLength()).toBe(2);
  });

  test("should add element at the end with insertAtlast()", () => {
    list.insertAtlast(10);
    expect(list.head.value).toBe(10);
    expect(list.tail.value).toBe(10);
    expect(list.getLength()).toBe(1);

    list.insertAtlast(20);
    expect(list.tail.value).toBe(20);
    expect(list.getLength()).toBe(2);
  });

  test("should insert element at specific index with insertAtIndex()", () => {
    list.insertAtBegining(10);
    list.insertAtBegining(20);
    list.insertAtIndex(15, 1); // Insert 15 at index 1
    expect(list.getLength()).toBe(3);
    expect(list.search(15)).toBe(1);
  });

  test("should remove an element by value with remove()", () => {
    list.insertAtBegining(10);
    list.insertAtBegining(20);
    list.insertAtBegining(30);

    list.remove(20);
    expect(list.getLength()).toBe(2);
    expect(list.search(20)).toBe(-1);

    list.remove(10);
    expect(list.tail.value).toBe(30);
    expect(list.getLength()).toBe(1);

    list.remove(30);
    expect(list.head).toBeNull();
    expect(list.tail).toBeNull();
    expect(list.getLength()).toBe(0);
  });

  test("should traverse and return the elements in correct order", () => {
    list.insertAtBegining(10);
    list.insertAtlast(20);
    list.insertAtlast(30);

    // Spy console.log to verify output
    const logSpy = jest.spyOn(console, "log");
    list.traverse();
    expect(logSpy).toHaveBeenCalledWith("10 -> 20 -> 30");

    logSpy.mockRestore();
  });

  test("should find an element by value with search()", () => {
    list.insertAtBegining(10);
    list.insertAtlast(20);
    list.insertAtlast(30);

    expect(list.search(10)).toBe(0);
    expect(list.search(20)).toBe(1);
    expect(list.search(30)).toBe(2);
    expect(list.search(40)).toBe(-1); // Element not found
  });

  test("should reverse the linked list", () => {
    list.insertAtBegining(10);
    list.insertAtlast(20);
    list.insertAtlast(30);

    list.reverse();
    expect(list.head.value).toBe(30);
    expect(list.tail.value).toBe(10);

    const logSpy = jest.spyOn(console, "log");
    list.traverse();
    expect(logSpy).toHaveBeenCalledWith("30 -> 20 -> 10");

    logSpy.mockRestore();
  });
});
