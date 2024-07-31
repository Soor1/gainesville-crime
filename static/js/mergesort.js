function merge(nums, left, middle, right) {
    let n1 = middle - left + 1;
    let n2 = right - middle;
    let L = new Array(n1);
    let R = new Array(n2);

    for (let x = 0; x < n1; x++) {
        L[x] = nums[left + x];
    }
    for (let y = 0; y < n2; y++) {
        R[y] = nums[middle + 1 + y];
    }

    let i = 0;
    let j = 0;
    let k = left;

    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            nums[k] = L[i];
            i++;
        } else {
            nums[k] = R[j];
            j++;
        }
        k++;
    }

    while (i < n1) {
        nums[k] = L[i];
        i++;
        k++;
    }

    while (j < n2) {
        nums[k] = R[j];
        j++;
        k++;
    }
}

function mergeSort(nums, start, end) {
    if (start < end) {
        let middle = Math.floor(start + (end - start) / 2);
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
