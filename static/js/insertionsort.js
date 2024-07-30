function insertionsort(nums, n) {
    for (let x = 0; x < n; x++) {
        let key = nums[x];
        let y = x - 1;

        while (y >= 0 && nums[y] > key) {
            nums[y + 1] = nums[y];
            y = y - 1;
        }
        nums[y + 1] = key;
    }
}

let nums = [3, 2, 1, 5, 6, 4];
insertionsort(nums, nums.length);
for (let x of nums) {
    console.log(x);
}
