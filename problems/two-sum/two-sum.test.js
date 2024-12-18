// example/twoSum.test.js - Example test file
const twoSum = require("./two-sum");

describe("Two Sum", () => {
  test("Example 1", () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });

  test("Example 2", () => {
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
  });

  test("Example 3", () => {
    expect(twoSum([3, 3], 6)).toEqual([0, 1]);
  });
});
