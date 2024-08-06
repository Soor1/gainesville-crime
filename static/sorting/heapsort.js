// This is the code for the heap sort, it builds a heap from the array and then repeatedly extracts the top element from the heap
function heapify(nums, index, size) {
    greatest = index;
    left = 2 * index + 1;
    right = 2 * index + 2;

    if (left < size && nums[left] > nums[greatest]) {
        greatest = left;
    }
    if (right < size && nums[right] > nums[greatest]) {
        greatest = right;
    }
    if (greatest != index) {
        [nums[index], nums[greatest]] = [nums[greatest], nums[index]];
        heapify(nums, greatest, size);
    }
}

function heapsort(nums) {
    size = nums.length;

    for (let x = Math.floor(size / 2) - 1; x >= 0; x--) {
        heapify(nums, x, size);
    }

    for (let x = size - 1; x > 0; x--) {
        [nums[0], nums[x]] = [nums[x], nums[0]];
        heapify(nums, 0, x);
    }
}
