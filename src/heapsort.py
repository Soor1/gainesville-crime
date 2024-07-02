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

def heapsort(heap):
    size = len(heap)
    
    for x in range((size // 2) - 1, -1, -1):
        heapify(heap, x, size)
    
    for x in range(size - 1, 0, -1):
        heap[0], heap[x] = heap[x], heap[0]
        heapify(heap, 0, x)

if __name__ == '__main__':
    arr = [1212, 123, 1756, 12732, 849, 192, 3, 7592, 8503]
    heapsort(arr)
    
    print(arr)
