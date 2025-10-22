import { describe, it, expect } from "vitest";
import { mergeTwoListsByRecursion, mergeTwoListsByIteration } from "./index.js";
import { listToLink, linkToList } from "../base.js";

describe("合并两个有序链表 - 递归实现", () => {
  it("示例1: 合并 [1,2,4] 和 [1,3,4]", () => {
    const list1 = listToLink([1, 2, 4]);
    const list2 = listToLink([1, 3, 4]);
    const result = mergeTwoListsByRecursion(list1, list2);
    expect(linkToList(result)).toEqual([1, 1, 2, 3, 4, 4]);
  });

  it("示例2: 合并空链表 [] 和 []", () => {
    const result = mergeTwoListsByRecursion(null, null);
    expect(result).toBe(null);
  });

  it("示例3: 合并 [] 和 [0]", () => {
    const list1 = null;
    const list2 = listToLink([0]);
    const result = mergeTwoListsByRecursion(list1, list2);
    expect(linkToList(result)).toEqual([0]);
  });

  it("第一个链表为空", () => {
    const list1 = null;
    const list2 = listToLink([1, 2, 3]);
    const result = mergeTwoListsByRecursion(list1, list2);
    expect(linkToList(result)).toEqual([1, 2, 3]);
  });

  it("第二个链表为空", () => {
    const list1 = listToLink([1, 2, 3]);
    const list2 = null;
    const result = mergeTwoListsByRecursion(list1, list2);
    expect(linkToList(result)).toEqual([1, 2, 3]);
  });

  it("合并不同长度的链表 [1,3,5,7] 和 [2,4]", () => {
    const list1 = listToLink([1, 3, 5, 7]);
    const list2 = listToLink([2, 4]);
    const result = mergeTwoListsByRecursion(list1, list2);
    expect(linkToList(result)).toEqual([1, 2, 3, 4, 5, 7]);
  });

  it("合并包含负数的链表 [-3,-1,2] 和 [-2,0,4]", () => {
    const list1 = listToLink([-3, -1, 2]);
    const list2 = listToLink([-2, 0, 4]);
    const result = mergeTwoListsByRecursion(list1, list2);
    expect(linkToList(result)).toEqual([-3, -2, -1, 0, 2, 4]);
  });

  it("合并只有一个元素的链表 [1] 和 [2]", () => {
    const list1 = listToLink([1]);
    const list2 = listToLink([2]);
    const result = mergeTwoListsByRecursion(list1, list2);
    expect(linkToList(result)).toEqual([1, 2]);
  });
});

describe("合并两个有序链表 - 迭代实现", () => {
  it("示例1: 合并 [1,2,4] 和 [1,3,4]", () => {
    const list1 = listToLink([1, 2, 4]);
    const list2 = listToLink([1, 3, 4]);
    const result = mergeTwoListsByIteration(list1, list2);
    expect(linkToList(result)).toEqual([1, 1, 2, 3, 4, 4]);
  });

  it("示例2: 合并空链表 [] 和 []", () => {
    const result = mergeTwoListsByIteration(null, null);
    expect(result).toBe(null);
  });

  it("示例3: 合并 [] 和 [0]", () => {
    const list1 = null;
    const list2 = listToLink([0]);
    const result = mergeTwoListsByIteration(list1, list2);
    expect(linkToList(result)).toEqual([0]);
  });

  it("第一个链表为空", () => {
    const list1 = null;
    const list2 = listToLink([1, 2, 3]);
    const result = mergeTwoListsByIteration(list1, list2);
    expect(linkToList(result)).toEqual([1, 2, 3]);
  });

  it("第二个链表为空", () => {
    const list1 = listToLink([1, 2, 3]);
    const list2 = null;
    const result = mergeTwoListsByIteration(list1, list2);
    expect(linkToList(result)).toEqual([1, 2, 3]);
  });

  it("合并不同长度的链表 [1,3,5,7] 和 [2,4]", () => {
    const list1 = listToLink([1, 3, 5, 7]);
    const list2 = listToLink([2, 4]);
    const result = mergeTwoListsByIteration(list1, list2);
    expect(linkToList(result)).toEqual([1, 2, 3, 4, 5, 7]);
  });

  it("合并包含负数的链表 [-3,-1,2] 和 [-2,0,4]", () => {
    const list1 = listToLink([-3, -1, 2]);
    const list2 = listToLink([-2, 0, 4]);
    const result = mergeTwoListsByIteration(list1, list2);
    expect(linkToList(result)).toEqual([-3, -2, -1, 0, 2, 4]);
  });

  it("合并只有一个元素的链表 [1] 和 [2]", () => {
    const list1 = listToLink([1]);
    const list2 = listToLink([2]);
    const result = mergeTwoListsByIteration(list1, list2);
    expect(linkToList(result)).toEqual([1, 2]);
  });
});
