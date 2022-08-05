const deleteDuplicates = (head) => {
  if (!head || !head.next) {
    return head;
  }
  let currNode = head;
  while (currNode && currNode.next) {
    if (currNode.next.val === currNode.val) {
      currNode.next = currNode.next.next;
    } else {
      currNode = currNode.next;
    }
  }
  return head;
};
