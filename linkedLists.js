class List {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(value) {
    let node = makeNode(value);

    if (!this.tail) {
      this.head = this.tail = node;
      return node;
    }
    this.tail.next = node;
    this.tail = node;
    this.length++;
    return node;
  }

  prepend(value) {
    let node = makeNode(value);
    if (!this.head) {
      this.head = this.tail = node;
      this.length++;
      return node;
    }
    node.next = this.head;
    this.head = node;
    this.length++;
    return node;
  }

  removeFirst() {
    if (!this.head) {
      return null;
    }
    let nodeToRemove = this.head;
    this.head = nodeToRemove.next;
    nodeToRemove.next = null;
    if (nodeToRemove === this.tail) {
      this.tail = null;
    }
    this.length--;
    return nodeToRemove;
  }

  findNodeBefore(node) {
    if (!node || node === this.head) {
      return null;
    }
    let current = this.head;
    while (current) {
      if ((current.next = node)) {
        break;
      }
      current = current.next;
    }
    return current;
  }

  removeLast() {
    if (!this.tail) {
      return null;
    }
    let nodeToRemove = this.tail;
    this.tail = this.findNodeBefore(this.tail);
    if (nodeToRemove === this.head) {
      this.head = null;
    }
    this.length--;
    return nodeToRemove;
  }

  print() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }

  insert(value, asIndex) {
    let previous = null;
    let current = this.head;
    let currentIndex = 0;

    if (asIndex <= 0 || !asIndex) {
      return this.prepend(value);
    }
    if (asIndex >= this.length) {
      return this.append(value);
    }
    let node = makeNode(value);
    while (current && currentIndex !== asIndex) {
      previous = current;
      current = current.next;
      currentIndex++;
      previous.next = node;
      node.next = current;
      this.length++;
      return node;
    }
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }
    if (index === 0) {
      return this.removeFirst();
    }
    let current = this.head;
    let previous = null;
    let currentIndex = 0;

    while (current && currentIndex !== index) {
      previous = current;
      current = current.next;
      currentIndex++;
    }
    previous.next = current.next;
    current.next = null;
    this.length--;
    return current;
  }
}

const makeNode = (value, next = null) => {
  return {
    value: value,
    next,
  };
};

let test = new List();
console.log('First, as an empty list');
test.print();
console.log('Then, with contents');
test.append('t');
test.append('e');
test.append('s');
test.append('t');
test.print();
console.log('Remove the last element');
test.removeLast();
test.print();
console.log('Insert an n at index 2');
test.insert('n', 2);
test.print();
