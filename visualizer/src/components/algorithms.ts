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

export function MergeSortIterative( arrL: number[], arrR: number[]) {
    if (!arrL.length || !arrR.length) {
        return arrL || arrR
    }
    let result = []
    let i = 0;
    let j = 0;
    while (result.length < arrL.length + arrR.length) {
        if (arrL[i] < arrR[j]) {

        }
    }
}

export function MergeIterative(arr: number[]): number[] {
    return
}

export function QuickSort(arr: number[]): number[] {
    return [0];
};

console.log(MergeSort([1,32,6,32146,4,1,5145,9]))