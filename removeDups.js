class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  }

  prepend(value) {
    let node = new Node(value);
    node.next = this.head;
    this.head = node;
  }

  pop() {
    let curr = this.head;

    if (!curr) return null;
    if (!curr.next) {
      this.head = null;
      return curr;
    }

    while (curr.next.next) {
      curr = curr.next;
    }

    let last = this.tail;
    this.tail = curr;
    this.tail.next = null;
    return last;
  }

  popFirst() {
    let first = this.head;
    if (this.head && this.head.next) {
      this.head = this.head.next;
    }
    return first;
  }

  head() {
    return this.head;
  }

  tail() {
    return this.tail;
  }

  _toArray() {
    let arr = [];
    let curr = this.head;
    while (curr) {
      arr.push(curr.value);
      curr = curr.next;
    }
    return arr;
  }
}

const removeDuplicates = (list) => {
  const set = new Set();
  let curr = list.head;
  let prev = null;
  while (curr) {
    if (set.has(curr.value)) {
      let elem = curr;
      prev.next = curr.next;
      curr = curr.next;
      elem.next = null;
    } else {
      set.add(curr.value);
      prev = curr;
      curr = curr.next;
    }
  }
  return list;
};

let list = new LinkedList();
for (let elem of [1, 5, 1, 6, 8, 6, 8, 8, 8, 8]) {
  list.append(elem);
}

removeDuplicates(list);
console.log(list._toArray());
