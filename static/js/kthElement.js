//From geeksforgeeks
// Function to find k largest array element
function kLargest(v, N, K) {
    // Implementation using
    // a Priority Queue
    const pq = [];
    v.forEach(val => pq.push(val));
    pq.sort((a, b) => a - b);
  
    // If size of the priority
    // queue exceeds k
    if (pq.length > K) {
      pq.splice(0, pq.length - K);
    }
  
    // Print the k largest element
    while (pq.length !== 0) {
      console.log(pq.shift());
    }
    console.log();
  }
  
   
  
  // driver program
  
  // Given array
  const arr = [11, 3, 2, 1, 15, 5, 4, 45, 88, 96, 50, 45];
  // Size of array
  const n = arr.length;
  const k = 3;
  console.log(`${k} largest elements are: `);
  kLargest(arr, n, k);