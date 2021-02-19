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
    return [0]
}

//
export function MergeSort(arr: number[]): number[] {
    return [0];
};

export function QuickSort(arr: number[]): number[] {
    return [0];
};



