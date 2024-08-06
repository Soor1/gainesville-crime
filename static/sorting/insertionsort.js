// This is the code for insertion sort, it takes an element from the array and compares it to the elements before it until it is in the correct position
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
