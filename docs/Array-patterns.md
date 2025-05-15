# Array Problem-Solving Patterns

Below is a comprehensive list of problem-solving patterns for array-related challenges in data structures and algorithms.

---

## **1. Sliding Window**

**Use Case:** Problems involving subarrays or contiguous elements.

- **Technique:** Maintain a window (subarray) of a specific size or expand/shrink dynamically.
- **Examples:**
  - Maximum sum of a subarray of size `k`.
  - Longest substring without repeating characters.
  - Minimum window substring.

---

## **2. Two Pointers**

**Use Case:** Problems involving comparisons between elements in a sorted array or when narrowing a search space.

- **Technique:** Use two pointers starting at different positions (e.g., beginning and end) to traverse the array.
- **Examples:**
  - Pair with a target sum in a sorted array.
  - Remove duplicates from a sorted array.
  - Trapping rainwater problem.

---

## **3. Hashing**

**Use Case:** Problems requiring efficient lookup, counting, or frequency tracking.

- **Technique:** Use a hash map or hash set for constant-time operations.
- **Examples:**
  - Two sum problem.
  - Longest substring with unique characters.
  - Subarray with given sum.

---

## **4. Prefix Sum**

**Use Case:** Problems requiring cumulative sums or range-based calculations.

- **Technique:** Precompute prefix sums to answer queries in constant time.
- **Examples:**
  - Subarray sum equals `k`.
  - Range sum query.
  - Count subarrays with equal number of 0s and 1s.

---

## **5. Kadane’s Algorithm**

**Use Case:** Problems involving finding the maximum/minimum sum of subarrays.

- **Technique:** Use dynamic programming to track local and global maximums.
- **Examples:**
  - Maximum sum subarray.
  - Maximum product subarray (variation).

---

## **6. Binary Search**

**Use Case:** Problems on sorted arrays or finding specific elements or ranges.

- **Technique:** Divide the search space into halves recursively.
- **Examples:**
  - Find element in a rotated sorted array.
  - Search in a sorted array.
  - Find the peak element.

---

## **7. Sorting and Two Pointers**

**Use Case:** Problems that benefit from sorting arrays for simplified traversal.

- **Technique:** Sort the array and use two pointers for comparisons.
- **Examples:**
  - Triplet sum to zero.
  - Meeting room problem.
  - Merge intervals.

---

## **8. Merge Intervals**

**Use Case:** Problems involving overlapping intervals.

- **Technique:** Sort intervals by start time and merge based on conditions.
- **Examples:**
  - Merge overlapping intervals.
  - Insert an interval into a sorted list.
  - Meeting rooms problem.

---

## **9. Cyclic Sort**

**Use Case:** Problems with numbers in a specific range (e.g., 1 to N).

- **Technique:** Place numbers at their correct indices.
- **Examples:**
  - Find missing number.
  - Find duplicate numbers.
  - Smallest missing positive integer.

---

## **10. Fast and Slow Pointers (Tortoise and Hare)**

**Use Case:** Problems related to cyclic patterns in arrays.

- **Technique:** Use two pointers moving at different speeds to detect cycles.
- **Examples:**
  - Linked list cycle detection.
  - Find duplicate numbers in an array.
  - Happy number problem.

---

## **11. Monotonic Stack**

**Use Case:** Problems involving the next greater/smaller element.

- **Technique:** Use a stack to maintain elements in a monotonic order.
- **Examples:**
  - Next greater element.
  - Largest rectangle in histogram.
  - Daily temperatures.

---

## **12. Backtracking**

**Use Case:** Problems involving generating permutations, subsets, or combinations.

- **Technique:** Explore all possibilities recursively.
- **Examples:**
  - Subset sum.
  - Permutations of an array.
  - N-queens problem.

---

## **13. Greedy Algorithms**

**Use Case:** Problems where locally optimal choices lead to a globally optimal solution.

- **Technique:** Sort the array and make the best choice at each step.
- **Examples:**
  - Assign cookies to children.
  - Minimize the sum of absolute differences.
  - Job scheduling problems.

---

## **14. Divide and Conquer**

**Use Case:** Problems that can be divided into smaller subproblems.

- **Technique:** Recursively solve subproblems and combine results.
- **Examples:**
  - Merge sort.
  - Quick sort.
  - Maximum subarray sum using divide and conquer.

---

## **15. Bit Manipulation**

**Use Case:** Problems involving subsets or binary representations.

- **Technique:** Use bitwise operations to manipulate data.
- **Examples:**
  - Single number in an array.
  - Subsets of an array.
  - XOR of all elements.

---

## **16. Union-Find**

**Use Case:** Problems involving grouping or connected components.

- **Technique:** Use a union-find data structure to track components.
- **Examples:**
  - Detect cycles in a graph.
  - Number of connected components.
  - Accounts merging.

---

## **17. Matrix Traversal**

**Use Case:** 2D array problems requiring traversal or modifications.

- **Technique:** Use directional vectors for systematic traversal.
- **Examples:**
  - Spiral matrix traversal.
  - Search in a 2D matrix.
  - Flood fill algorithm.

---

These patterns form the foundation for tackling almost all array-related problems. Familiarize yourself with these techniques and practice recognizing which pattern applies to different problems for efficient solutions.
