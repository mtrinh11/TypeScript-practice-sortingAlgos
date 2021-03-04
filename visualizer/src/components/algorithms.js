"use strict";
exports.__esModule = true;
exports.partitionIterative = exports.QuickSortIterative = exports.partitionRecursive = exports.QuickSortRecursive = exports.MergeIterative = exports.MergeSortIterative = exports.MergeSortRecursive = exports.RadixSort = exports.BucketSort = exports.InsertionSort = exports.BubbleSort = void 0;
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
function MergeSortRecursive(arr) {
    if (arr.length > 1) {
        var mid = Math.floor(arr.length / 2);
        var L = arr.slice(0, mid);
        var R = arr.slice(mid, arr.length + 1);
        MergeSortRecursive(L);
        MergeSortRecursive(R);
        var i = 0;
        var j = 0;
        var k = 0;
        while (i < L.length && j < R.length) {
            if (L[i] < R[j]) {
                arr[k] = L[i];
                i++;
            }
            else {
                arr[k] = R[j];
                j++;
            }
            k++;
        }
        while (i < L.length) {
            arr[k] = L[i];
            i++;
            k++;
        }
        while (j < R.length) {
            arr[k] = R[j];
            j++;
            k++;
        }
    }
    return arr;
}
exports.MergeSortRecursive = MergeSortRecursive;
;
function MergeSortIterative(arr) {
    var subarraySize = 1;
    while (subarraySize < (arr.length - 1)) {
        var left = 0;
        while (left < (arr.length - 1)) {
            var mid = Math.min((left + subarraySize - 1), (arr.length - 1));
            var right = 2 * subarraySize + left - 1 > (arr.length - 1) ?
                arr.length - 1
                :
                    2 * subarraySize + left - 1;
            MergeIterative(arr, left, mid, right);
            left = left + subarraySize * 2;
        }
        subarraySize *= 2;
    }
    return arr;
}
exports.MergeSortIterative = MergeSortIterative;
function MergeIterative(arr, lft, mid, rt) {
    var leftLength = mid - lft + 1;
    var rightLength = rt - mid;
    var leftArray = new Array(leftLength);
    var rightArray = new Array(rightLength);
    for (var i_1 = 0; i_1 < leftLength; i_1++) {
        leftArray[i_1] = arr[lft + i_1];
    }
    for (var i_2 = 0; i_2 < rightLength; i_2++) {
        rightArray[i_2] = arr[mid + i_2 + 1];
    }
    var i = 0;
    var j = 0;
    var k = lft;
    while (i < leftLength && j < rightLength) {
        if (leftArray[i] > rightArray[j]) {
            arr[k] = rightArray[j];
            j++;
        }
        else {
            arr[k] = leftArray[i];
            i++;
        }
        k++;
    }
    while (i < leftLength) {
        arr[k] = leftArray[i];
        i++;
        k++;
    }
    while (j < rightLength) {
        arr[k] = rightArray[j];
        j++;
        k++;
    }
}
exports.MergeIterative = MergeIterative;
//takes last item in arr as pivot
function QuickSortRecursive(arr, low, high) {
    if (arr.length === 1) {
        return arr;
    }
    if (low < high) {
        var pi = partitionRecursive(arr, low, high);
        QuickSortRecursive(arr, low, pi - 1);
        QuickSortRecursive(arr, pi + 1, high);
    }
    return arr;
}
exports.QuickSortRecursive = QuickSortRecursive;
;
function partitionRecursive(arr, low, high) {
    var i = (low - 1);
    var pivot = arr[high];
    for (var curr = low; curr < high; curr++) {
        if (arr[curr] <= pivot) {
            i++;
            var temp_1 = arr[i];
            arr[i] = arr[curr];
            arr[curr] = temp_1;
        }
        var temp = arr[i + 1];
        arr[i + 1] = arr[high];
        arr[high] = temp;
    }
    return i + 1;
}
exports.partitionRecursive = partitionRecursive;
;
function QuickSortIterative(arr, start, end) {
    var size = end - start + 1;
    var stack = new Array(size);
    var top = -1;
    top++;
    stack[top] = start;
    top++;
    stack[top] = end;
    while (top >= 0) {
        // console.log(stack)
        end = stack[top];
        top--;
        start = stack[top];
        top--;
        var pi = partitionIterative(arr, start, end);
        if (pi - 1 > start) {
            top++;
            stack[top] = start;
            top++;
            stack[top] = pi - 1;
        }
        if (pi + 1 < end) {
            top++;
            stack[top] = pi + 1;
            top++;
            stack[top] = end;
        }
    }
    return arr;
}
exports.QuickSortIterative = QuickSortIterative;
;
function partitionIterative(arr, start, end) {
    var smaller = start - 1;
    var pivot = arr[end];
    for (var curr = start; curr < end; curr++) {
        if (arr[curr] <= pivot) {
            smaller++;
            var temp_2 = arr[smaller];
            arr[smaller] = arr[curr];
            arr[curr] = temp_2;
        }
    }
    var temp = arr[smaller + 1];
    arr[smaller + 1] = arr[end];
    arr[end] = temp;
    return smaller + 1;
}
exports.partitionIterative = partitionIterative;
var arrTest = [1, 32, 6, 32146, 4, 1, 5145, 9, 0, 1];
console.log(QuickSortIterative(arrTest, 0, arrTest.length - 1));
