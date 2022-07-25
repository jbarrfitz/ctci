class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
};

const nodeA2 = new Node(4);
const nodeA1 = new Node(2, nodeA2);
const nodeA0 = new Node(1, nodeA1);
const nodeB2 = new Node(4);
const nodeB1 = new Node(3, nodeB2);
const nodeB0 = new Node(1, nodeB1);

const mergeTwoLists = (list1, list2) => {
  let pointer1 = list1;
  let pointer2 = list2;
  while (pointer1 || pointer2) {
    if (pointer1.val <= pointer2.val) {
      pointer1 = pointer1.next;
    } else {
      let savedNode = pointer1.next;
      
    }
  }
}
