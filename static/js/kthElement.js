function shellSort(nums) {
  for (
      let gap = Math.floor(nums.length / 2);
      gap > 0;
      gap = Math.floor(gap / 2)
  ) {
      for (let x = gap; x < nums.length; x++) {
          let temp = nums[x];
          let y;
          for (y = x; y >= gap && nums[y - gap][0] > temp[0]; y -= gap) {
              nums[y] = nums[y - gap];
          }
          nums[y] = temp;
      }
  }
}

function kLargestShellSort(v,k){
  shellSort(v);
  return v.slice(v.length-k,v.length);
}

function heapify(nums, index, size) {
  let greatest = index;
  let left = 2 * index + 1;
  let right = 2 * index + 2;

  if (left < size && nums[left][0] > nums[greatest][0]) {
      greatest = left;
  }
  if (right < size && nums[right][0] > nums[greatest][0]) {
      greatest = right;
  }
  if (greatest !== index) {
      [nums[index], nums[greatest]] = [nums[greatest], nums[index]];
      heapify(nums, greatest, size);
  }
}

function heapSort(nums) {
  let size = nums.length;

  for (let x = Math.floor(size / 2) - 1; x >= 0; x--) {
      heapify(nums, x, size);
  }

  for (let x = size - 1; x > 0; x--) {
      [nums[0], nums[x]] = [nums[x], nums[0]];
      heapify(nums, 0, x);
  }
}
// Function to find k largest array element using heaps
function kLargestHeap(v,k) { 
  heapSort(v);
  return v.slice(v.length-k,v.length);
  
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