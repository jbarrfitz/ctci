class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

const nodeOne = new Node(1);
const nodeTwo = new Node(2, nodeOne);
const nodeThree = new Node(3, nodeTwo);
const nodeFour = new Node(4, nodeThree);
const nodeFive = new Node(5, nodeFour);

const reverseList = (head) => {
  let curr = head;
  let saved = curr.next;
  let prev = null;
  while (curr) {
    curr.next = prev;
    prev = curr;
    curr = saved;
    curr ? (saved = curr.next) : (saved = null);
  }
  return prev;
};

console.log(reverseList(nodeFive));
