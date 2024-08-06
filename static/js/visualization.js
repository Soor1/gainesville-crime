// Initialize variables
let sort_btn = document.getElementById("sort_btn");
let reset_btn = document.getElementById("reset_btn");
let sort_bars = document.getElementById("sort_bars");
let sort_select = document.getElementById("sort_select");
let sort_title = document.getElementById("sort_title");
let numDataPoints = 250;
let heightFactor = 400;
let nums = [];
let speedFactor = 25;
let controller = new AbortController();

// Function to generate random arrays to sort
function randomArrays() {
    nums = [];
    for (let x = 0; x < numDataPoints; x++) {
        let randValue = Math.random();
        nums.push(randValue);
    }
    console.log("Arrays generated");
}

// Function that rerenders all the bars at the appropritate size
function renderBars(array, container) {
    container.innerHTML = "";
    for (let i = 0; i < array.length; i++) {
        let bar = document.createElement("div");
        bar.classList.add("bar");
        bar.style.height = array[i] * heightFactor + "px";
        container.appendChild(bar);
    }
}

// sleep function that allows the program to pause for a certain amount of time to show the shifting of elements in the sort
function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

// Partition function for the quick sort which cuts the array into two parts and compares
async function partition(nums, low, high, container, signal) {
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
            renderBars(nums, container);
            await sleep(speedFactor);
            if (signal.aborted) return;
        }
    }
    [nums[low], nums[down]] = [nums[down], nums[low]];
    renderBars(nums, container);
    await sleep(speedFactor);
    if (signal.aborted) return;
    return down;
}

// Quick sort function that recursively sorts the array
async function quicksort(nums, low, high, container, signal) {
    if (low < high) {
        let pivotIndex = await partition(nums, low, high, container, signal);
        if (signal.aborted) return;
        await quicksort(nums, low, pivotIndex - 1, container, signal);
        if (signal.aborted) return;
        await quicksort(nums, pivotIndex + 1, high, container, signal);
    }
}

// Heapify function adds elements to the heap and puts in the correct position
async function heapify(nums, index, size, container, signal) {
    let greatest = index;
    let left = 2 * index + 1;
    let right = 2 * index + 2;

    if (left < size && nums[left] > nums[greatest]) {
        greatest = left;
    }
    if (right < size && nums[right] > nums[greatest]) {
        greatest = right;
    }
    if (greatest != index) {
        [nums[index], nums[greatest]] = [nums[greatest], nums[index]];
        renderBars(nums, container);
        await sleep(speedFactor);
        if (signal.aborted) return;
        await heapify(nums, greatest, size, container, signal);
    }
}

// Heap sort function that builds the heap and then extracts the top element from the heap
async function heapsort(nums, container, signal) {
    let size = nums.length;

    for (let x = Math.floor(size / 2) - 1; x >= 0; x--) {
        await heapify(nums, x, size, container, signal);
        if (signal.aborted) return;
    }

    for (let x = size - 1; x > 0; x--) {
        [nums[0], nums[x]] = [nums[x], nums[0]];
        renderBars(nums, container);
        await sleep(speedFactor);
        if (signal.aborted) return;
        await heapify(nums, 0, x, container, signal);
    }
}

// Bubble sort function that compares adjacent elements and swaps them if they are in the wrong order
async function bubblesort(nums, n, container, signal) {
    for (let x = 0; x < n - 1; x++) {
        for (let y = 0; y < n - x - 1; y++) {
            if (nums[y] > nums[y + 1]) {
                [nums[y], nums[y + 1]] = [nums[y + 1], nums[y]];
                renderBars(nums, container);
                await sleep(speedFactor);
                if (signal.aborted) return;
            }
        }
    }
}

// Insertion sort function that builds the final sorted array one element at a time
async function insertionsort(nums, n, container, signal) {
    for (let x = 0; x < n; x++) {
        let key = nums[x];
        let y = x - 1;

        while (y >= 0 && nums[y] > key) {
            nums[y + 1] = nums[y];
            y = y - 1;
            renderBars(nums, container);
            await sleep(speedFactor);
            if (signal.aborted) return;
        }
        nums[y + 1] = key;
    }
}

// Merge function that merges two subarrays of the array
async function merge(nums, left, middle, right, container, signal) {
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
        renderBars(nums, container);
        await sleep(speedFactor);
        if (signal.aborted) return;
    }

    while (i < n1) {
        nums[k] = L[i];
        i++;
        k++;
        renderBars(nums, container);
        await sleep(speedFactor);
        if (signal.aborted) return;
    }

    while (j < n2) {
        nums[k] = R[j];
        j++;
        k++;
        renderBars(nums, container);
        await sleep(speedFactor);
        if (signal.aborted) return;
    }
}

// Merge sort function that recursively sorts the array
async function mergesort(nums, start, end, container, signal) {
    if (start < end) {
        let middle = Math.floor(start + (end - start) / 2);
        await mergesort(nums, start, middle, container, signal);
        if (signal.aborted) return;
        await mergesort(nums, middle + 1, end, container, signal);
        if (signal.aborted) return;
        await merge(nums, start, middle, end, container, signal);
    }
}

// Swap function that swaps two elements in the array
async function swap(nums, minIdx, currIdx, container, signal) {
    let temp = nums[minIdx];
    nums[minIdx] = nums[currIdx];
    nums[currIdx] = temp;
    renderBars(nums, container);
    await sleep(speedFactor);
    if (signal.aborted) return;
}

// Selection sort function that selects the minimum element from the unsorted portion and swaps it with the first element
async function selectionsort(nums, n, container, signal) {
    for (let x = 0; x < n - 1; x++) {
        let minIdx = x;
        for (let y = x + 1; y < n; y++) {
            if (nums[y] < nums[minIdx]) {
                minIdx = y;
            }
            renderBars(nums, container);
            await sleep(speedFactor);
            if (signal.aborted) return;
        }
        if (minIdx !== x) {
            await swap(nums, minIdx, x, container, signal);
            if (signal.aborted) return;
        }
    }
}

// Shell sort function that sorts the array by comparing elements that are across the gap until the gap is reduced to adjacent elements
async function shellsort(nums, container, signal) {
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
            renderBars(nums, container);
            await sleep(speedFactor);
            if (signal.aborted) return;
        }
    }
}

// Function that changes the title of the sorting algorithm deping on the selected option
function changeTitle() {
    let newTitle = sort_select.value;
    sort_title.innerHTML = newTitle;
}

// Function that resets the array and the bars
function reset() {
    randomArrays();
    renderBars(nums, sort_bars);
    console.log(nums.length);
    changeTitle();
}

// Event listener that listens for page to load and calls the reset function
window.onload = function () {
    reset();
};

// Event listener that listens for the sort select to change and calls the changeTitle function
sort_select.addEventListener("change", function () {
    controller.abort();
    controller = new AbortController();
    nums = [];
    randomArrays();
    renderBars(nums, sort_bars);
    console.log(nums.length);
    changeTitle();
});

// Event listener that listens for the sort button to be clicked and calls the sorting algorithm function
sort_btn.addEventListener("click", async function () {
    let signal = controller.signal;
    if (sort_select.value === "Bubble Sort") {
        await bubblesort(nums, nums.length, sort_bars, signal);
    } else if (sort_select.value === "Quick Sort") {
        await quicksort(nums, 0, nums.length - 1, sort_bars, signal);
    } else if (sort_select.value === "Heap Sort") {
        await heapsort(nums, sort_bars, signal);
    } else if (sort_select.value === "Merge Sort") {
        await mergesort(nums, 0, nums.length - 1, sort_bars, signal);
    } else if (sort_select.value == "Insertion Sort") {
        await insertionsort(nums, nums.length, sort_bars, signal);
    } else if (sort_select.value == "Selection Sort") {
        await selectionsort(nums, nums.length, sort_bars, signal);
    } else if (sort_select.value == "Shell Sort") {
        await shellsort(nums, sort_bars, signal);
    }

    console.log("Arrays sorted");
});

// Event listener that listens for the reset button to be clicked and calls the reset function
reset_btn.addEventListener("click", function () {
    nums = [];
    controller.abort();
    window.location.reload();
});

// Grow and Shrink logic for buttons
sort_btn.addEventListener("mousedown", function () {
    this.style.transform = "scale(0.9)";
});
sort_btn.addEventListener("mouseup", function () {
    this.style.transform = "scale(1.1)";
});
sort_btn.addEventListener("mouseenter", function () {
    this.style.transform = "scale(1.1)";
});
sort_btn.addEventListener("mouseleave", function () {
    this.style.transform = "scale(1)";
});

reset_btn.addEventListener("mousedown", function () {
    this.style.transform = "scale(0.9)";
});
reset_btn.addEventListener("mouseup", function () {
    this.style.transform = "scale(1.1)";
});
reset_btn.addEventListener("mouseenter", function () {
    this.style.transform = "scale(1.1)";
});
reset_btn.addEventListener("mouseleave", function () {
    this.style.transform = "scale(1)";
});

sort_select.addEventListener("mousedown", function () {
    this.style.transform = "scale(0.9)";
});
sort_select.addEventListener("mouseup", function () {
    this.style.transform = "scale(1.1)";
});
sort_select.addEventListener("mouseenter", function () {
    this.style.transform = "scale(1.1)";
});
sort_select.addEventListener("mouseleave", function () {
    this.style.transform = "scale(1)";
});
