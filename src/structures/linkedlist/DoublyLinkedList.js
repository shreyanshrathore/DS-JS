class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}
export default class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  insertAtBegining(value) {
    let node = new Node(value);
    if (this.head == null) {
      this.head = this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }
    this.size++;
  }

  insertAtEnd(value) {
    let node = new Node(value);
    if (this.tail == null) {
      this.head = this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.size++;
  }

  insertAtIndex(index, value) {
    let node = new Node(value);
    if (index == 0) {
      this.insertAtBegining(value);
    } else if (index == this.size) {
      this.insertAtEnd(value);
    } else {
      let current = this.head;
      let prev;
      for (let i = 0; i < index; i++) {
        prev = current;
        current = current.next;
      }
      prev.next = node;
      node.prev = prev;
      node.next = current;
      current.prev = node;
    }
    this.size++;
  }

  removeFromBeginning() {
    if (this.head == null) {
      return;
    }
    this.head = this.head.next;
    this.head.prev = null;
    this.size--;
  }

  removeFromEnd() {
    if (this.tail == null) {
      return;
    }
    let newTail = this.tail.prev;
    newTail.next = null;
    newTail.prev = this.tail.prev.prev;
    this.tail = newTail;
    this.size--;
  }

  removeByValue(value) {
    if (this.head.value == value) {
      this.removeFromBeginning;
    } else if (this.tail.value == value) {
      this.removeFromEnd;
    } else {
      let current = this.head;
      let prev;
      while (current) {
        prev = current;
        current = current.next;
        if (current.value == value) {
          prev.current = current.next;
          current.next.prev = prev;
          break;
        }
      }
      this.size--;
    }
  }

  removeAtIndex(index) {
    if ((index = 0)) {
      this.removeFromBeginning;
    } else if (index == this.size) {
      this.removeFromEnd;
    } else {
      let current = this.head;
      let prev;
      for (let i = 0; i < index; i++) {
        prev = current;
        current = current.next;
      }
      prev.current = current.next;
      current.next.prev = prev;
      this.size--;
    }
  }

  traverseForward() {
    let values = [];
    let current = this.head;
    while (current) {
      values.push(current.value);
      current = current.next;
    }

    return values;
  }

  traverseBackward() {
    let values = [];
    let current = this.tail;
    while (current) {
      values.push(current.value);
      current = current.prev;
    }

    return values;
  }

  search(value) {
    if (this.tail.value == value) {
      return this.size - 1;
    } else {
      let current = this.head;
      let index = 0;
      while (current) {
        if (current.value == value) {
          return index;
        }
        current = current.next;
      }
      return -1;
    }
  }

  reverse() {
    if (this.head == null) {
      return;
    }
    // hack - divide
    let prev = null;
    let current = this.head;
    this.tail = this.head;
    while (current) {
      prev.next = current;
      current.prev = prev;
      current = current.next;
      prev.prev = current;
    }
    this.head = prev;
  }

  getLength() {
    return this.size;
  }

  isEmpty() {
    return !this.size;
  }

  clear() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  getNodeAt(index) {
    if (index == this.size) {
      return this.tail.value;
    }

    if (index > this.size) {
      return -1;
    }
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current.value;
  }
}
