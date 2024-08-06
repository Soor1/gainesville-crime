function shellSort(nums, count) {
  for (
      let gap = Math.floor(nums.length / 2);
      gap > 0;
      gap = Math.floor(gap / 2)
  ) {
    count[0]++;
      for (let x = gap; x < nums.length; x++) {
        count[0]++;
          let temp = nums[x];
          count[0]++;
          let y;
          for (y = x; y >= gap && nums[y - gap][0] > temp[0]; y -= gap) {
            count[0]++;
              nums[y] = nums[y - gap];
              count[0]++;
          }
          nums[y] = temp;
          count[0]++;
      }
  }
}

function kLargestShellSort(v,k,count){
  console.log(v.length);
  shellSort(v,count);
  
  if(v.length > k)
    return v.slice(v.length-k,v.length);
  else
    return v;

}

function heapify(nums, index, size, count) {
  let greatest = index;
  let left = 2 * index + 1;
  let right = 2 * index + 2;

  count[0]++;
  if (left < size && nums[left][0] > nums[greatest][0]) {
      count[0]++;
      greatest = left;
  }
  count[0]++;
  if (right < size && nums[right][0] > nums[greatest][0]) {
      count[0]++;
      greatest = right;
  }
  count[0]++;
  if (greatest !== index) {
      [nums[index], nums[greatest]] = [nums[greatest], nums[index]];
      count[0]++;
      heapify(nums, greatest, size, count);
  }
}

function heapSort(nums, count) {
  let size = nums.length;

  for (let x = Math.floor(size / 2) - 1; x >= 0; x--) {
      count[0]++;
      heapify(nums, x, size, count);
  }

  for (let x = size - 1; x > 0; x--) {
      count[0]++;
      [nums[0], nums[x]] = [nums[x], nums[0]];
      count[0]++;
      heapify(nums, 0, x, count);
  }
}
// Function to find k largest array element using heaps
function kLargestHeap(v,k,count) { 
  heapSort(v,count);
  if(v.length > k)
    return v.slice(v.length-k,v.length);
  else
    return v;
  
}

 

/*// driver program

// Given array
const arr = [11, 3, 2, 1, 15, 5, 4, 45, 88, 96, 50, 45];
// Size of array
const n = arr.length;
const k = 3;
console.log(`${k} largest elements are: `);
let array = kLargestQuickSort(arr,k);
let iterator = array.values();

for (let value of iterator) {
console.log(value);
}*/
export {kLargestShellSort,kLargestHeap}