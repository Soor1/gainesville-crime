function merge(nums, start, middle, end) {
    let ln = middle - start + 1;
    let rn = end - middle;
    let left = [];
    let right = [];

    for (let x = 0; x < ln; x++) {
        left[x] = nums[start + x];
    }
    for (let y = 0; y < rn; y++) {
        right[y] = nums[middle + 1 + y];
    }

    let i = 0;
    let j = 0;
    let k = start;

    while (i < ln && j < rn) {
        if (left[i] <= right[j]) {
            nums[k] = left[i];
            i++;
        } else {
            nums[k] = right[j];
            j++;
        }
        k++;
    }

    while (i < ln) {
        nums[k] = left[i];
        i++;
        k++;
    }

    while (j < rn) {
        nums[k] = right[j];
        j++;
        k++;
    }
}

function mergeSort(nums, start, end) {
    if (start < end) {
        middle = (start + end) / 2;
        mergeSort(nums, start, middle);
        mergeSort(nums, middle + 1, end);
        merge(nums, start, middle, end);
    }
}

let nums = [3, 2, 1, 5, 6, 4];
mergeSort(nums, 0, nums.length - 1);
for (let x of nums) {
    console.log(x);
}
