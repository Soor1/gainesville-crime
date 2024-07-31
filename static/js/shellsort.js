function shellsort(nums) {
    for (
        let gap = Math.floor(nums.length / 2);
        gap > 0;
        gap = Math.floor(gap / 2)
    ) {
        for (let x = gap; x < nums.length; x++) {
            let temp = nums[x];
            let y = x;
            for (y = x; y >= gap && nums[y - gap] > temp; y -= gap) {
                nums[y] = nums[y - gap];
            }
            nums[y] = temp;
        }
    }
}

let nums = [3, 2, 1, 5, 6, 4];
shellsort(nums);
for (let x of nums) {
    console.log(x);
}
