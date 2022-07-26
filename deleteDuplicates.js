const deleteDuplicates = (head) => {
  let currNode = head;
  let prevNode = null;
  while (currNode) {
    if (currNode.val === prevNode?.val || null) {
      prevNode.next = currNode.next;
    }
    currNode = currNode.next;
  }
  return head;
};
