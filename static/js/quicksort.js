function partition(nums, low, high) {
    let pivot = nums[low];
    let up = low;
    let down = high;

    while (up < down) {
        while (up < high && nums[up] <= pivot) {
            up++;
        }
        while (nums[down] > pivot) {
            down--;
        }
        if (up < down) {
            [nums[up], nums[down]] = [nums[down], nums[up]];
        }
    }
    [nums[low], nums[down]] = [nums[down], nums[low]];
    return down;
}

function quicksort(nums, low, high) {
    if (low < high) {
        let pivotIndex = partition(nums, low, high);
        quicksort(nums, low, pivotIndex - 1);
        quicksort(nums, pivotIndex + 1, high);
    }
}

let nums = [3, 2, 1, 5, 6, 4];
let low = 0;
let high = nums.length - 1;
quicksort(nums, low, high);
for (let x of nums) {
    console.log(x);
}
