// This is the code for the bubble sort, it compares adjacent elements and swaps them if they are in the wrong order
function bubblesort(nums, n) {
    for (let x = 0; x < n - 1; x++) {
        for (let y = 0; y < n - x - 1; y++) {
            if (nums[y] > nums[y + 1]) {
                [nums[y], nums[y + 1]] = [nums[y + 1], nums[y]];
            }
        }
    }
}
