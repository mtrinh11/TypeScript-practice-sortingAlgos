//Basic Sorting Counting Algorithms
export function BubbleSort(arr: number[]): number[] {
    let swap: boolean = true;
    while (swap) {
        swap = false;
        for (let i: number = 0; i < arr.length - 1; i++) {
                if (arr[i] > arr[i + 1]) {
                    swap = true;
                    let temp: number = arr[i];
                    arr[i] = arr[i + 1];
                    arr[i + 1] = temp;
                }
        }
    }
    return arr
} 

export function InsertionSort(arr: number[]): number[] {
    for (let i = 1; i < arr.length; i++) {
        let curr = arr[i];
        let j = i - 1;
        while (j >= 0 && curr < arr[j]) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = curr;
    };
    return arr
}

//Distribution Sorts
export function BucketSort(arr: number[]): number[] {
    return [0]
}

export function RadixSort(arr: number[]): number[] {
    return [0]
}

//Distribution Sorts
export function MergeSortRecursive(arr: number[]): number[] {
    if (arr.length > 1) {
        let mid = Math.floor(arr.length / 2)
        let L = arr.slice(0, mid)
        let R = arr.slice(mid, arr.length + 1)
        MergeSortRecursive(L)
        MergeSortRecursive(R)

        let i = 0;
        let j = 0;
        let k = 0;
        while (i < L.length && j < R.length) {
            if (L[i] < R[j]) {
                arr[k] = L[i]
                i++
            } else {
                arr[k] = R[j]
                j++
            }
            k++
        }
        while (i < L.length) {
            arr[k] = L[i]
            i++
            k++
        }
        while (j < R.length) {
            arr[k] = R[j]
            j++
            k++
        }
    }
    return arr;
};

export function MergeSortIterative( arr: number[]) {
    let subarraySize = 1;
    while (subarraySize < (arr.length - 1)) {
        let left = 0;
        while (left < (arr.length - 1)) {
            let mid = Math.min((left + subarraySize - 1), (arr.length - 1))
            let right = 2 * subarraySize + left - 1 > (arr.length - 1) ? 
                arr.length - 1
                : 
                2 * subarraySize + left -1
            MergeIterative(arr, left, mid, right)
            left = left + subarraySize * 2
        }
        subarraySize *= 2
    }
    return arr
}

export function MergeIterative(arr: number[], lft: number, mid: number, rt: number) {
    let leftLength = mid - lft + 1
    let rightLength = rt - mid

    let leftArray = new Array(leftLength)
    let rightArray = new Array(rightLength)

    for (let i: number = 0; i < leftLength; i++) {
        leftArray[i] = arr[lft + i]
    }
    for (let i: number = 0; i < rightLength; i++) {
        rightArray[i] = arr[mid + i + 1]
    }

    let i = 0;
    let j = 0;
    let k = lft;
    while (i < leftLength && j < rightLength) {
        if (leftArray[i] > rightArray[j]) {
            arr[k] = rightArray[j]
            j++
        } else {
            arr[k] = leftArray[i]
            i++
        }
        k++
    }

    while (i < leftLength) {
        arr[k] = leftArray[i]
        i++
        k++
    }

    while (j < rightLength) {
        arr[k] = rightArray[j]
        j++
        k++
    }
}

//takes last item in arr as pivot
export function QuickSortRecursive(arr: number[], low: number, high: number) {
    if (arr.length === 1) {
        return arr
    }
    if (low < high) {
        let pi = partitionRecursive(arr, low, high)
        QuickSortRecursive(arr, low, pi - 1)
        QuickSortRecursive(arr, pi + 1, high)
    }
    return arr
};

export function partitionRecursive(arr: number[], low: number, high: number): number {
    let i = (low - 1)
    let pivot = arr[high]
    for (let curr = low; curr < high; curr++) {
        if (arr[curr] <= pivot) {
            i++
            let temp = arr[i]
            arr[i] = arr[curr] 
            arr[curr] = temp
        }
        let temp = arr[i+1]
        arr[i+1] = arr[high]
        arr[high] = temp
    }
    return i + 1
};

export function QuickSortIterative(arr: number[], start: number, end: number): number[] {
    let size = end - start + 1
    let stack = new Array(size)
    let top = -1

    top++
    stack[top] = start
    top++
    stack[top] = end

    while (top >= 0) {
        console.log(stack)
        end = stack[top]
        top--
        start = stack[top]
        top--

        let pi = partitionIterative(arr, start, end)

        if (pi - 1 > start) {
            top++
            stack[top] = start
            top++
            stack[top] = pi - 1
        }
        if (pi + 1 < end) {
            top++
            stack[top] = pi + 1
            top++
            stack[top] = end
        }
    }

    return arr
};

export function partitionIterative(arr: number[], start: number, end: number): number {
    let smaller = start - 1
    let pivot = arr[end]

    for (let curr = start; curr < end; curr++) {
        if (arr[curr] <= pivot) {
            smaller++
            let temp = arr[smaller]
            arr[smaller] = arr[curr]
            arr[curr] = temp
        }
        let temp = arr[smaller + 1]
        arr[smaller + 1] = arr[end]
        arr[end] = temp
    }

    return smaller + 1
}

let arrTest = [1, 32, 6, 32146, 4, 1, 5145, 9]
console.log(QuickSortIterative(arrTest , 0 , arrTest.length - 1))