import { ListNode } from "../base.js";

export const mergeTwoListsByRecursion = function (list1, list2) {
  if (!list1) return list2;
  if (!list2) return list1;

  if (list1.val < list2.val) {
    list1.next = mergeTwoListsByRecursion(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeTwoListsByRecursion(list1, list2.next);
    return list2;
  }
};

export const mergeTwoListsByIteration = function (list1, list2) {
  const newList = new ListNode(-1);
  let temp = newList;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      temp.next = list1;
      list1 = list1.next;
    } else {
      temp.next = list2;
      list2 = list2.next;
    }

    temp = temp.next;
  }

  temp.next = list1 ? list1 : list2;

  return newList.next;
};
