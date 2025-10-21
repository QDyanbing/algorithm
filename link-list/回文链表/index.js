export const isPalindrome = function (head) {
  //  快慢指针找到中间节点
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  //  反转后半部分
  let prev = null;
  let curr = slow;
  while (curr) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  //  比较前半部分和反转后的后半部分
  let left = head;
  let right = prev;
  while (left && right) {
    //  如果前半部分和反转后的后半部分不相等，则返回 false
    if (left.val !== right.val) return false;
    left = left.next;
    right = right.next;
  }

  //  如果前半部分和反转后的后半部分相等，则返回 true
  return true;
};
