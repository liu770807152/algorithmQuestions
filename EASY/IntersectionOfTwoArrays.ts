/*
349.Given two integer arrays nums1 and nums2, return an array of their intersection. 
Each element in the result must be unique and you may return the result in any order.

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Explanation: [4,9] is also accepted.
*/

function intersection(nums1: number[], nums2: number[]): number[] {
	const set1: Set<number> = new Set(nums1), result: Set<number> = new Set(nums2);
	for (const num of nums2) {
		if (set1.has(num)) result.add(num);
	}
	return Array.from(result);
};

console.log(intersection([1,2,2,1], [2,2]));