let sort_btn = document.getElementById("sort_btn");
let reset_btn = document.getElementById("reset_btn");
let sort_bars = document.getElementById("sort_bars");
let sort_select = document.getElementById("sort_select");
let sort_title = document.getElementById("sort_title");
let numDataPoints = 200;
let heightFactor = 400;
let nums = [];
let speedFactor = 20;

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
        await mergesort(nums, sort_bars);
    } else if (sort_select.value == "Insertion Sort") {
        await insertionsort(nums, nums.length, sort_bars);
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
