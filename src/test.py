import matplotlib.pyplot as plt
import matplotlib.animation as animation
import random

def heapify(arr, n, i, bar_rects):
    largest = i
    l = 2 * i + 1
    r = 2 * i + 2
    
    if l < n and arr[i] < arr[l]:
        largest = l
        
    if r < n and arr[largest] < arr[r]:
        largest = r
        
    if largest != i:
        arr[i], arr[largest] = arr[largest], arr[i]
        update_plot(arr, bar_rects)
        heapify(arr, n, largest, bar_rects)

def heapsort(arr, bar_rects):
    n = len(arr)
    
    for i in range(n // 2 - 1, -1, -1):
        heapify(arr, n, i, bar_rects)
        
    for i in range(n - 1, 0, -1):
        arr[i], arr[0] = arr[0], arr[i]
        update_plot(arr, bar_rects)
        heapify(arr, i, 0, bar_rects)

def update_plot(arr, bar_rects):
    for rect, val in zip(bar_rects, arr):
        rect.set_height(val)
    plt.pause(0.001)

def visualize_sort(arr):
    fig, ax = plt.subplots()
    bar_rects = ax.bar(range(len(arr)), arr, align="edge")
    ax.set_xlim(0, len(arr))
    ax.set_ylim(0, int(1.1 * len(arr)))
    
    heapsort(arr, bar_rects)
    
    plt.show()

if __name__ == "__main__":
    data = [random.randint(1, 100) for _ in range(100)]
    visualize_sort(data)
