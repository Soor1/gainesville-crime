function swap(nums, minIdx, currIdx) {
    let temp = nums[minIdx];
    nums[minIdx] = nums[currIdx];
    nums[currIdx] = temp;
}

function selectionSort(nums, n) {
    for (x = 0; x < n - 1; x++) {
        let minIdx = x;
        for (y = x + 1; y < n; y++) {
            if (nums[y] < nums[minIdx]) {
                minIdx = y;
            }
        }
        swap(nums, minIdx, x);
    }
}

let nums = [3, 2, 1, 5, 6, 4];
selectionSort(nums, nums.length);
for (let x of nums) {
    console.log(x);
}
