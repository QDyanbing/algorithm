import { describe, it, expect } from "vitest";
import { reverseListByIteration, reverseListByRecursion } from "./index.js";
import { listToLink, linkToList } from "../base.js";

describe("反转链表 - 迭代方法", () => {
  it("测试用例: [1,2,3,4,5]", () => {
    const head = listToLink([1, 2, 3, 4, 5]);
    const reversed = reverseListByIteration(head);
    expect(linkToList(reversed)).toEqual([5, 4, 3, 2, 1]);
  });

  it("测试用例: [1,2]", () => {
    const head = listToLink([1, 2]);
    const reversed = reverseListByIteration(head);
    expect(linkToList(reversed)).toEqual([2, 1]);
  });

  it("测试用例: []", () => {
    const reversed = reverseListByIteration(null);
    expect(reversed).toBeNull();
  });
});

describe("反转链表 - 递归方法", () => {
  it("测试用例: [1,2,3,4,5]", () => {
    const head = listToLink([1, 2, 3, 4, 5]);
    const reversed = reverseListByRecursion(head);
    expect(linkToList(reversed)).toEqual([5, 4, 3, 2, 1]);
  });

  it("测试用例: [1,2]", () => {
    const head = listToLink([1, 2]);
    const reversed = reverseListByRecursion(head);
    expect(linkToList(reversed)).toEqual([2, 1]);
  });

  it("测试用例: []", () => {
    const reversed = reverseListByRecursion(null);
    expect(reversed).toBeNull();
  });
});
