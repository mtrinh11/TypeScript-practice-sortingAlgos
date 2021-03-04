const Descriptions = (props: any) => {
    switch(props.type) {
        case 'bubble': 
            return (
                <div className='description'>
                    <p>
                    In a bubble sort, we continually swap adjacent elements if they are unordered. 
                    </p>
                    <p>Time Complexity: O(n^2)</p>
                    
                    
                </div>
            )
        case 'insertion': 
            return (
                <div className='description'>
                    <p>
                    For insertion sort, we start at the 0th index and look at every item in the array. 
                    We compare that item to the item before it and continue to do that until we find an
                    item it is bigger than. We then swap the item we were initially looking at into that place.
                    </p>
                    <p>Time Complexity: O(n^2)</p>
                </div>
            )
        case 'merge': 
            return (
                <div className='description'>
                    <p>
                    A merge sort is a Divide and Conquer algorithm. We divide the array
                    into two halves and continues to do that until we have arrays of length 1. 
                    Then when we merge the arrays back together, we merge 2 at a time and take 
                    the smallest of the two arrays until they have completely merged into 1 array
                    </p>
                    <p>Time Complexity: O(n log(n))</p>
                </div>
            )
        case 'quick': 
            return (
                <div className='description'>
                    <p>
                    A quick sort is a Divide and Conquer algorithm. First we pick a pivot and partitions 
                    the array around the picked pivot. The pivot can be picked in a myriad of ways. In the
                    example here, we choose the last item in the array as our pivot. In partitioning the array,
                    we move all the items greater than the pivot to the right and all items less than the pivot to the left.
                    we then run the quicksort on those 2 subarrays and keep going until the array is sorted.
                    </p>
                    <p>Time Complexity: O(n log(n))</p>
                </div>
            )
        default:
            return (
                <div>Welcome to my Sorting Algorithm Visualizer!</div>
            )
    }
}

export default Descriptions