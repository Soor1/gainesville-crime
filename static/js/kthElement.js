//From geeksforgeeks
function partition(arr, low, high) { 
  let pivot = arr[high]; 
  let i = low - 1; 

  for (let j = low; j <= high - 1; j++) { 
      // If current element is smaller than the pivot 
      if (arr[j] < pivot) { 
          // Increment index of smaller element 
          i++; 
          // Swap elements 
          [arr[i], arr[j]] = [arr[j], arr[i]];  
      } 
  } 
  // Swap pivot to its correct position 
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];  
  return i + 1; // Return the partition index 
} 

function quickSort(arr, low, high) { 
  if (low >= high) return; 
  let pi = partition(arr, low, high); 

  quickSort(arr, low, pi - 1); 
  quickSort(arr, pi + 1, high); 
} 

function kLargestQuickSort(v,k){
  quickSort(v,0,v.length-1);
  return v.slice(v.length-k,v.length);
}



// Function to find k largest array element using heaps
function kLargestHeap(v,k) { 
  // Implementation using
  // a Priority Queue
  const pq = [];
  v.forEach(val => pq.push(val));
  pq.sort((a, b) => a - b);

  // If size of the priority
  // queue exceeds k
  if (pq.length > k) {
    pq.splice(0, pq.length - k);
  }
  let arr = []
  // Print the k largest element
  while (pq.length !== 0) {
    arr.push(pq.shift());
  }
  return arr;
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
export {kLargestQuickSort,kLargestHeap};