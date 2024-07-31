let sort_btn = document.getElementById("sort_btn");
let reset_btn = document.getElementById("reset_btn");
let sort_bars = document.getElementById("sort_bars");
let sort_select = document.getElementById("sort_select");
let sort_title = document.getElementById("sort_title");
let numDataPoints = 200;
let heightFactor = 400;
let nums = [];
let speedFactor = 10;

function randomArrays() {
    for (let x = 0; x < numDataPoints; x++) {
        let randValue = Math.random();
        nums.push(randValue);
    }
    console.log("Arrays generated");
}

function renderBars(array, container) {
    container.innerHTML = "";
    for (let i = 0; i < array.length; i++) {
        let bar = document.createElement("div");
        bar.classList.add("bar");
        bar.style.height = array[i] * heightFactor + "px";
        container.appendChild(bar);
    }
}

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function partition(nums, low, high, container) {
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
        }
    }
    [nums[low], nums[down]] = [nums[down], nums[low]];
    renderBars(nums, container);
    await sleep(speedFactor);
    return down;
}

async function quicksort(nums, low, high, container) {
    if (low < high) {
        let pivotIndex = await partition(nums, low, high, container);
        await quicksort(nums, low, pivotIndex - 1, container);
        await quicksort(nums, pivotIndex + 1, high, container);
    }
}

async function heapify(nums, index, size, container) {
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
        await heapify(nums, greatest, size, container);
    }
}

async function heapsort(nums, container) {
    let size = nums.length;

    for (let x = Math.floor(size / 2) - 1; x >= 0; x--) {
        await heapify(nums, x, size, container);
    }

    for (let x = size - 1; x > 0; x--) {
        [nums[0], nums[x]] = [nums[x], nums[0]];
        renderBars(nums, container);
        await sleep(speedFactor);
        await heapify(nums, 0, x, container);
    }
}

async function bubblesort(nums, n, container) {
    for (let x = 0; x < n - 1; x++) {
        for (let y = 0; y < n - x - 1; y++) {
            if (nums[y] > nums[y + 1]) {
                [nums[y], nums[y + 1]] = [nums[y + 1], nums[y]];
                renderBars(nums, container);
                await sleep(speedFactor);
            }
        }
    }
}

async function insertionsort(nums, n, container) {
    for (let x = 0; x < n; x++) {
        let key = nums[x];
        let y = x - 1;

        while (y >= 0 && nums[y] > key) {
            nums[y + 1] = nums[y];
            y = y - 1;
            renderBars(nums, container);
            await sleep(speedFactor);
        }
        nums[y + 1] = key;
    }
}

async function merge(nums, left, middle, right, container) {
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
    }

    while (i < n1) {
        nums[k] = L[i];
        i++;
        k++;
        renderBars(nums, container);
        await sleep(speedFactor);
    }

    while (j < n2) {
        nums[k] = R[j];
        j++;
        k++;
        renderBars(nums, container);
        await sleep(speedFactor);
    }
}

async function mergesort(nums, start, end, container) {
    if (start < end) {
        let middle = Math.floor(start + (end - start) / 2);
        await mergesort(nums, start, middle, container);
        await mergesort(nums, middle + 1, end, container);
        await merge(nums, start, middle, end, container);
    }
}

async function swap(nums, minIdx, currIdx, container) {
    let temp = nums[minIdx];
    nums[minIdx] = nums[currIdx];
    nums[currIdx] = temp;
    renderBars(nums, container);
    await sleep(speedFactor);
}

async function selectionsort(nums, n, container) {
    for (let x = 0; x < n - 1; x++) {
        let minIdx = x;
        for (let y = x + 1; y < n; y++) {
            if (nums[y] < nums[minIdx]) {
                minIdx = y;
            }
            renderBars(nums, container);
            await sleep(speedFactor);
        }
        if (minIdx !== x) {
            await swap(nums, minIdx, x, container);
        }
    }
}

async function shellsort(nums, container) {
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
        }
    }
}

function changeTitle() {
    let newTitle = sort_select.value;
    sort_title.innerHTML = newTitle;
}

function reset() {
    randomArrays();
    renderBars(nums, sort_bars);
    console.log(nums.length);
    changeTitle();
}

window.onload = function () {
    reset();
};

sort_select.addEventListener("change", function () {
    changeTitle();
    window.location.reload();
});

sort_btn.addEventListener("click", async function () {
    if (sort_select.value === "Bubble Sort") {
        await bubblesort(nums, nums.length, sort_bars);
    } else if (sort_select.value === "Quick Sort") {
        await quicksort(nums, 0, nums.length - 1, sort_bars);
    } else if (sort_select.value === "Heap Sort") {
        await heapsort(nums, sort_bars);
    } else if (sort_select.value === "Merge Sort") {
        await mergesort(nums, 0, nums.length - 1, sort_bars);
    } else if (sort_select.value == "Insertion Sort") {
        await insertionsort(nums, nums.length, sort_bars);
    } else if (sort_select.value == "Selection Sort") {
        await selectionsort(nums, nums.length, sort_bars);
    } else if (sort_select.value == "Shell Sort") {
        await shellsort(nums, sort_bars);
    }

    let sortBarsChildren = sort_bars.children;

    for (let bar of sortBarsChildren) {
        bar.style.backgroundColor = "#0f141d";
    }

    console.log("Arrays sorted");
});

reset_btn.addEventListener("click", function () {
    nums = [];
    window.location.reload();
});
