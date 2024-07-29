let sort_btn = document.getElementById("sort_btn");
let speed = document.getElementById("speed");
let quicksortBars = document.getElementById("quicksort_bars");
let heapsortBars = document.getElementById("heapsort_bars");
let numDataPoints = 500;
let heightFactor = 400;
let heapsortNums = [];
let quicksortNums = [];
let speedFactor = 5;

speed.addEventListener("change", (e) => {
    speedFactor = parseInt(e.target.value);
    console.log("Speed factor changed to:", speedFactor);
});

function randomArrays() {
    for (let x = 0; x < numDataPoints; x++) {
        let randValue = Math.random();
        heapsortNums.push(randValue);
        quicksortNums.push(randValue);
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

window.onload = function () {
    randomArrays();
    renderBars(quicksortNums, quicksortBars);
    renderBars(heapsortNums, heapsortBars);
};

sort_btn.addEventListener("click", async function () {
    await quicksort(quicksortNums, 0, quicksortNums.length - 1, quicksortBars);

    let quicksortBarsChildren = quicksortBars.children;

    for (let bar of quicksortBarsChildren) {
        bar.style.backgroundColor = "#0f141d";
    }

    await heapsort(heapsortNums, heapsortBars);

    let heapsortBarsChildren = heapsortBars.children;

    for (let bar of heapsortBarsChildren) {
        bar.style.backgroundColor = "#0f141d";
    }

    console.log("Arrays sorted");
});
