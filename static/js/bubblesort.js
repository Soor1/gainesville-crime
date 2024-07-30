function bubblesort(nums, n) {
    for (let x = 0; x < n - 1; x++) {
        for (let y = 0; y < n - x - 1; y++) {
            if (nums[y] > nums[y + 1]) {
                [nums[y], nums[y + 1]] = [nums[y + 1], nums[y]];
            }
        }
    }
}

let nums = [3, 2, 1, 5, 6, 4];
bubblesort(nums, nums.length);
for (let x of nums) {
    console.log(x);
}
