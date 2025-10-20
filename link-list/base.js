export class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

// [1,2,3,4,5] => 1->2->3->4->5
export function listToLink(params) {
  let head = new ListNode(params[0]);
  let current = head;
  for (let i = 1; i < params.length; i++) {
    current.next = new ListNode(params[i]);
    current = current.next;
  }
  return head;
}

// 1->2->3->4->5 => [1,2,3,4,5]
export function linkToList(head) {
  let result = [];
  let current = head;
  while (current) {
    result.push(current.val);
    current = current.next;
  }
  return result;
}
