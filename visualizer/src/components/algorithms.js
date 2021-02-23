"use strict";
exports.__esModule = true;
exports.QuickSort = exports.MergeSort = exports.RadixSort = exports.BucketSort = exports.InsertionSort = exports.BubbleSort = void 0;
//Basic Sorting Counting Algorithms
function BubbleSort(arr) {
    var swap = true;
    while (swap) {
        swap = false;
        for (var i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                swap = true;
                var temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
            }
        }
    }
    return arr;
}
exports.BubbleSort = BubbleSort;
function InsertionSort(arr) {
    for (var i = 1; i < arr.length; i++) {
        var curr = arr[i];
        var j = i - 1;
        while (j >= 0 && curr < arr[j]) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = curr;
    }
    ;
    return arr;
}
exports.InsertionSort = InsertionSort;
//Distribution Sorts
function BucketSort(arr) {
    return [0];
}
exports.BucketSort = BucketSort;
function RadixSort(arr) {
    return [0];
}
exports.RadixSort = RadixSort;
//Distribution Sorts
function MergeSort(arr) {
    return [0];
}
exports.MergeSort = MergeSort;
;
function QuickSort(arr) {
    return [0];
}
exports.QuickSort = QuickSort;
;
console.log(InsertionSort([3, 1, 4, 5, 2, 5., 2334, 1]));
