import numpy as np
import matplotlib.pyplot as plt
import time
import math

def constant(n):
    return np.ones_like(n)

def logarithmic(n):
    return np.log(n)

def linear(n):
    return n

def linearithmic(n):
    return n * np.log(n)

def quadratic(n):
    return n**2

def exponential(n):
    return 2**n

def factorial(n):
    return np.array([math.factorial(i) for i in n])

def quicksort(arr):
    if len(arr) <= 1:
        return arr
    
    pivot = arr[len(arr) // 2]
    left = []
    middle = []
    right = []
    
    for x in arr:
        if x < pivot:
            left.append(x)
        elif x == pivot:
            middle.append(x)
        else:
            right.append(x)
    
    return quicksort(left) + middle + quicksort(right)

def heapify(heap, index, size):
    greatest = index
    left = (2 * index) + 1
    right = (2 * index) + 2
    
    if left < size and heap[left] > heap[greatest]:
        greatest = left
    if right < size and heap[right] > heap[greatest]:
        greatest = right
    if greatest != index:
        heap[greatest], heap[index] = heap[index], heap[greatest]
        heapify(heap, greatest, size)

def heapsort(arr):
    size = len(arr)
    
    for x in range((size // 2) - 1, -1, -1):
        heapify(arr, x, size)
    
    for x in range(size - 1, 0, -1):
        arr[0], arr[x] = arr[x], arr[0]
        heapify(arr, 0, x)

FUNCTIONS = [
    (constant, 'O(1)', 'red'),
    (logarithmic, 'O(log n)', 'orange'),
    (linear, 'O(n)', 'yellow'),
    (linearithmic, 'O(n log n)', 'green'),
    (quadratic, 'O(n^2)', 'blue'),
    (exponential, 'O(2^n)', 'indigo'),
    (factorial, 'O(n!)', 'violet')
]

def compare_asymptotic(n):
    x = np.arange(1, n+1, 1)
    plt.figure(figsize=(10, 8))
    plt.title(f'Time Complexity for n = {n}')
    for func, label, color in FUNCTIONS:
        if label != 'O(2^n)' and label != 'O(n!)': 
            plt.plot(x, func(x), color, label=label)
    
    arr = np.random.randint(0, 100, n)
    start_time = time.time()
    quicksort(arr.tolist())
    end_time = time.time()
    quicksort_time = (end_time - start_time) * 1000  
    plt.plot(n, quicksort_time, 'o', label='Quicksort')

    arr = np.random.randint(0, 100, n)
    start_time = time.time()
    heapsort(arr.tolist())
    end_time = time.time()
    heapsort_time = (end_time - start_time) * 1000  
    plt.plot(n, heapsort_time, 'o', label='Heapsort')

    plt.xlabel('Input size')
    plt.ylabel('Time (milliseconds)')
    plt.legend()
    plt.yscale('log')  
    plt.show()

compare_asymptotic(100000)
