/**
 * https://www.geeksforgeeks.org/batch/gfg-160-problems/track/arrays-gfg-160/problem/rotate-array-by-n-elements-1587115621
 * Problem Description:
 * Given an unsorted array arr[]. Rotate the array to the left (counter-clockwise direction) by d steps, where d is a positive integer. Do the mentioned change in the array in place.
 */

// Array.reverse is not an in-place operation.

/**
 * @param {number[]} arr - array
 * @param {number} d - steps
 * @return {number[]} - rotated array
 */
function solution(arr, d) {
  const reverse = (arr, start, end) => {
    while (start < end) {
      let tmp = arr[start];
      arr[start] = arr[end];
      arr[end] = tmp;
      start++;
      end--;
    }
  };
  let shift = d % arr.length;
  reverse(arr, 0, arr.length - 1);
  reverse(arr, 0, arr.length - shift - 1);
  reverse(arr, arr.length - shift, arr.length - 1);
  return arr;
}

module.exports = solution;
