// template.test.js - Template for test files
const solution = require("./rotate-array");

describe("Rotate Array", () => {
  test("2 steps", () => {
    const arr = [1, 2, 3, 4, 5];
    const result = solution(arr, 2);
    expect(result).toBe(arr);
    expect(result).toStrictEqual([3, 4, 5, 1, 2]);
  });

  test("3 steps", () => {
    const arr = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
    const result = solution(arr, 3);
    expect(result).toBe(arr);
    expect(result).toStrictEqual([8, 10, 12, 14, 16, 18, 20, 2, 4, 6]);
  });
  test("9 steps", () => {
    const arr = [7, 3, 9, 1];
    const result = solution(arr, 9);
    expect(result).toBe(arr);
    expect(result).toStrictEqual([3, 9, 1, 7]);
  });
});
