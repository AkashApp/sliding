// Sliding Window Maximum
// You are given an array of integers nums, there is sliding window of size k
// which is moving from the very left of the array to the very right.
// You can only see the k numbers in the window. Each time the sliding window moves right by one position.
// Return the max sliding window.

// Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
// Output: [3,3,5,5,6,7]

const maxSlidingWindow = (nums, k) => {
    const result = [];
    const n= nums.length;
    for (let i = 0; i < n - k + 1; i++) {
        let max = nums[i];
        for(let j = i; j < i + k; j++) {
            if(nums[j] > max) {
                max = nums[j];
            }
        }
        result.push(max);
    }
    return result;
}
console.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3));



