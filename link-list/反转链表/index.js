export const reverseListByIteration = function (head) {
  let prev = null;
  let current = head;

  while (current) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
};

export const reverseListByRecursion = function (head) {
  if (!head || !head.next) return head;

  const newHead = reverseListByRecursion(head.next);

  head.next.next = head;
  head.next = null;

  return newHead;
};
