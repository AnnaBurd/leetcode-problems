// Bruteforce:
const twoSum = (nums, target) => {
	for (let i = 0; i < nums.length; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			if (nums[i] + nums[j] === target) {
				return [i, j];
			}
		}
	}

	return [-1, -1];
};

const nums = [2, 7, 11, 15];
const target = 9;

console.log(twoSum(nums, target));

// Using Hashmap (Map in V8 js engine uses "Deterministic hash tables")

const twoSumBetter = (nums, target) => {
	const map = new Map();

	for (let i = 0; i < nums.length; i++) {
		if (map.has(target - nums[i])) {
			return [i, map.get(target - nums[i])];
		} else {
			map.set(nums[i], i);
		}
	}
};

console.log(twoSumBetter(nums, target));
