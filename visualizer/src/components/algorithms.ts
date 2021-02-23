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
export function MergeSort(arr: number[]): number[] {
    return [0];
};

export function QuickSort(arr: number[]): number[] {
    return [0];
};

console.log(InsertionSort([3,1,4,5,2,5.,2334,1]))