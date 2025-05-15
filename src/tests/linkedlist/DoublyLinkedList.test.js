import DoublyLinkedList from "../../structures/linkedlist/DoublyLinkedList";

describe("DoublyLinkedList", () => {
  let list;

  beforeEach(() => {
    list = new DoublyLinkedList();
  });

  // Test Insertion Methods
  test("insertAtBeginning(value)", () => {
    list.insertAtBegining(10);
    list.insertAtBegining(20);
    expect(list.traverseForward()).toEqual([20, 10]);
    expect(list.head.value).toBe(20);
    expect(list.tail.value).toBe(10);
  });

  test("insertAtEnd(value)", () => {
    list.insertAtEnd(10);
    list.insertAtEnd(20);
    expect(list.traverseForward()).toEqual([10, 20]);
    expect(list.head.value).toBe(10);
    expect(list.tail.value).toBe(20);
  });

  test("insertAtIndex(value, index)", () => {
    list.insertAtEnd(10);
    list.insertAtEnd(30);
    list.insertAtIndex(20, 1); // Insert at index 1
    expect(list.traverseForward()).toEqual([10, 20, 30]);
    list.insertAtIndex(5, 0); // Insert at beginning
    expect(list.traverseForward()).toEqual([5, 10, 20, 30]);
    list.insertAtIndex(40, 4); // Insert at end
    expect(list.traverseForward()).toEqual([5, 10, 20, 30, 40]);
  });

  // Test Deletion Methods
  test("removeFromBeginning()", () => {
    list.insertAtEnd(10);
    list.insertAtEnd(20);
    list.removeFromBeginning();
    expect(list.traverseForward()).toEqual([20]);
    expect(list.head.value).toBe(20);
    expect(list.tail.value).toBe(20);
  });

  test("removeFromEnd()", () => {
    list.insertAtEnd(10);
    list.insertAtEnd(20);
    list.removeFromEnd();
    expect(list.traverseForward()).toEqual([10]);
    expect(list.head.value).toBe(10);
    expect(list.tail.value).toBe(10);
  });

  test("removeByValue(value)", () => {
    list.insertAtEnd(10);
    list.insertAtEnd(20);
    list.insertAtEnd(30);
    list.removeByValue(20);
    expect(list.traverseForward()).toEqual([10, 30]);
    list.removeByValue(10);
    expect(list.traverseForward()).toEqual([30]);
    list.removeByValue(30);
    expect(list.traverseForward()).toEqual([]);
  });

  test("removeAtIndex(index)", () => {
    list.insertAtEnd(10);
    list.insertAtEnd(20);
    list.insertAtEnd(30);
    list.removeAtIndex(1);
    expect(list.traverseForward()).toEqual([10, 30]);
    list.removeAtIndex(0);
    expect(list.traverseForward()).toEqual([30]);
    list.removeAtIndex(0);
    expect(list.traverseForward()).toEqual([]);
  });

  // Test Traversal Methods
  test("traverseForward()", () => {
    list.insertAtEnd(10);
    list.insertAtEnd(20);
    list.insertAtEnd(30);
    expect(list.traverseForward()).toEqual([10, 20, 30]);
  });

  test("traverseBackward()", () => {
    list.insertAtEnd(10);
    list.insertAtEnd(20);
    list.insertAtEnd(30);
    expect(list.traverseBackward()).toEqual([30, 20, 10]);
  });

  // Test Search
  test("search(value)", () => {
    list.insertAtEnd(10);
    list.insertAtEnd(20);
    list.insertAtEnd(30);
    expect(list.search(20)).toBe(1);
    expect(list.search(10)).toBe(0);
    expect(list.search(30)).toBe(2);
    expect(list.search(40)).toBe(-1);
  });

  // Test Reversal
  test("reverse()", () => {
    list.insertAtEnd(10);
    list.insertAtEnd(20);
    list.insertAtEnd(30);
    list.reverse();
    expect(list.traverseForward()).toEqual([30, 20, 10]);
    expect(list.head.value).toBe(30);
    expect(list.tail.value).toBe(10);
  });

  // Test Utilities
  test("getLength()", () => {
    expect(list.getLength()).toBe(0);
    list.insertAtEnd(10);
    list.insertAtEnd(20);
    expect(list.getLength()).toBe(2);
  });

  test("isEmpty()", () => {
    expect(list.isEmpty()).toBe(true);
    list.insertAtEnd(10);
    expect(list.isEmpty()).toBe(false);
  });

  test("clear()", () => {
    list.insertAtEnd(10);
    list.insertAtEnd(20);
    list.clear();
    expect(list.isEmpty()).toBe(true);
    expect(list.traverseForward()).toEqual([]);
  });

  test("getNodeAt(index)", () => {
    list.insertAtEnd(10);
    list.insertAtEnd(20);
    list.insertAtEnd(30);
    expect(list.getNodeAt(0).value).toBe(10);
    expect(list.getNodeAt(1).value).toBe(20);
    expect(list.getNodeAt(2).value).toBe(30);
    expect(list.getNodeAt(3)).toBe(null); // Out of range
  });
});
