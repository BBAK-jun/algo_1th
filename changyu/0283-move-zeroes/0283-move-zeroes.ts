/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
	let insertPos = 0;

	for (let i = 0; i < nums.length; i++) {
		if (nums[i] !== 0) {
			nums[insertPos] = nums[i];
			insertPos++;
		}
	}

	while (insertPos < nums.length) {
		nums[insertPos] = 0;
		insertPos++;
	}
}