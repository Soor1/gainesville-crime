// This is the code for the shell sort, it finds an original gap and compares indicies across that gap until comparing adjacent elements
function shellSort(nums) {
    for (
        let gap = Math.floor(nums.length / 2);
        gap > 0;
        gap = Math.floor(gap / 2)
    ) {
        for (let x = gap; x < nums.length; x++) {
            let temp = nums[x];
            let y;
            for (y = x; y >= gap && nums[y - gap] > temp; y -= gap) {
                nums[y] = nums[y - gap];
            }
            nums[y] = temp;
        }
    }
}
