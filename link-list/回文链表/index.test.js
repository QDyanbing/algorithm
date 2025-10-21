import { describe, it, expect } from "vitest";
import { isPalindrome } from "./index.js";
import { listToLink } from "../base.js";

describe("回文链表", () => {
  it("测试用例: [1,2,3,3,2,1] - 偶数长度回文链表", () => {
    const head = listToLink([1, 2, 3, 3, 2, 1]);
    expect(isPalindrome(head)).toBe(true);
  });

  it("测试用例: [1,2] - 非回文链表", () => {
    const head = listToLink([1, 2]);
    expect(isPalindrome(head)).toBe(false);
  });

  it("测试用例: [1,2,2,1] - 偶数长度回文链表", () => {
    const head = listToLink([1, 2, 2, 1]);
    expect(isPalindrome(head)).toBe(true);
  });

  it("测试用例: [1,2,3,2,1] - 奇数长度回文链表", () => {
    const head = listToLink([1, 2, 3, 2, 1]);
    expect(isPalindrome(head)).toBe(true);
  });

  it("测试用例: [1] - 单个节点", () => {
    const head = listToLink([1]);
    expect(isPalindrome(head)).toBe(true);
  });

  it("测试用例: [1,2,3,4,5] - 非回文链表", () => {
    const head = listToLink([1, 2, 3, 4, 5]);
    expect(isPalindrome(head)).toBe(false);
  });

  it("测试用例: [1,1] - 两个相同节点", () => {
    const head = listToLink([1, 1]);
    expect(isPalindrome(head)).toBe(true);
  });

  it("测试用例: [9,9,9,9,9] - 所有节点值相同", () => {
    const head = listToLink([9, 9, 9, 9, 9]);
    expect(isPalindrome(head)).toBe(true);
  });

  it("测试用例: [1,0,1] - 包含0的回文链表", () => {
    const head = listToLink([1, 0, 1]);
    expect(isPalindrome(head)).toBe(true);
  });
});
