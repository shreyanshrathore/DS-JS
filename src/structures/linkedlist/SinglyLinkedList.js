import Node from "./index";

export default class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  insertAtBegining(value) {
    const newNode = new Node(value);
    if (this.head == null) {
      this.head = this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.size++;
  }

  insertAtlast(value) {
    const newNode = new Node(value);
    if (this.tail == null) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  insertAtIndex(value, k) {
    if (k > 0 && k > this.size) {
      return;
    }
    if (k == 0) {
      this.insertAtBegining(value);
      return;
    }
    const newNode = new Node(value);
    let current = this.head;
    let prev;
    for (let i = 0; i < k; i++) {
      prev = current;
      current = current.next;
    }
    prev.next = newNode;
    newNode.next = current;
    this.size++;
  }
  // RemoveByValue (first value that got matched)
  remove(value) {
    if (this.head == null) {
      return;
    }
    if (this.head.value == value) {
      this.head = this.head.next;
      if (this.head == null) {
        this.tail = null;
      }
      this.size--;
      return;
    }
    let current = this.head.next;
    let prev = this.head;

    while (current) {
      if (current.value == value) {
        prev.next = current.next;
        if (this.current == this.tail) {
          this.tail = prev;
        }
        this.size--;
        return;
      }
      prev = current;
      current = current.next;
    }
  }

  traverse() {
    let current = this.head;
    let values = [];
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    console.log(values.join(" -> "));
  }

  search(value) {
    let index = 0;
    if (this.head.value == value) {
      return index;
    }
    index++;
    let current = this.head.next;

    while (current) {
      if (current.value == value) {
        return index;
      }
      current = current.next;
      index++;
    }
    return -1;
  }

  // 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7
  // 7 -> 6 -> 5 -> 4 -> 3 -> 2 -> 1
  // break this to 2 diferent linkedlist while handling 2 pointers, and in each iteration, we will add the first element to the different linkedlist
  reverse() {
    let prev = null;
    let current = this.head;
    this.tail = this.head;

    while (current) {
      const next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    this.head = prev;
  }

  getLength() {
    return this.size;
  }
}
