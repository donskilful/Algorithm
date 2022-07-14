const findNumSum = (nums, target) => {
    let map = {}
    nums.forEach(num => map[num] = true)
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] && map[target - nums[i]]) {
            return [nums[i], target - nums[i]]
        }
    }
}

console.log(findNumSum([2,7,11,15], 9))