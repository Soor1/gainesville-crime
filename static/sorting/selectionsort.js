// This is the code for the selection sort, it finds the minimum element in the array and swaps it with the first element until the array is sorted
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
