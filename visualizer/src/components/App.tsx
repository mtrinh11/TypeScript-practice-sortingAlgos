//sorting-algorithms-f9d25.web.app
import '../styles/App.css';
import {useEffect, useState} from 'react';
import {connect} from 'react-redux'
import {createRandomData, updateCols, updateData, flipStopped} from '../store/actions/DataActions'

const state = ({dataState}:any) => { return {dataState}}

const actions = (dispatch: any) => {
  return {
    populateData: (cols: number) => dispatch(createRandomData(cols)),
    updateCols: (cols: number) => dispatch(updateCols(cols)),
    updateData: (data: number[]) => dispatch(updateData(data)),
    stopVisual: (input: boolean) => dispatch(flipStopped(input))
  }
}

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

const colors = ['black', 'lightskyblue', 'antiquewhite', 'brown', 'blue',
    'blueviolet', 'gold', 'darkorange', 'deeppink', 'darkgreen'
  ]

const highlight = (data: Array<any>, columns: Array<any>, color: string): Array<any> => {
  for (let i of columns) {
    data[i][1] = color
  }
  return data
}

const highlightAll = (data: Array<any>, color: string): Array<any> => {
  for (let i in data) {
    data[i][1] = color
  }
  return data
}

const highlightDiff = (data: Array<any>): Array<any> => {
  let i = 0
  for (let color of colors) {
    data[i][1] = color;
    i++
  }
  return data
}

const unhighlight = (data: Array<any>): Array<any> => {
  for (let i in data) {
    data[i][1] = 'aquamarine'
  }
  return data
}

function App(props: any) {
  const [loading, setLoading] = useState(true)
  const [inputCol, setInputCol] = useState(10)

  useEffect(() => {
    props.populateData(10);
    setLoading(false);
  },[])

  const BubbleSort = async (arr: Array<any>) => {
    let swap: boolean = true;
    while (swap) {
      swap = false
      for (let i: number = 0; i < arr.length - 1; i++) {
        props.updateData(highlight(props.dataState.data,[i, i+1], 'red'))
        await sleep(150)
        if (arr[i][0] > arr[i + 1][0]) {
            swap = true;
            await sleep(200)
            let temp: number = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
            props.updateData(arr)
            await sleep(200)
        }
        props.updateData(unhighlight(props.dataState.data))
        props.updateData(arr)
      }
    }
    return arr
  } 

  const InsertionSort = async (arr: Array<any>) => {
    for (let i = 1; i < arr.length; i++) {
      let curr = arr[i];
      let j = i - 1;
      props.updateData(highlight(props.dataState.data,[i], 'black'))
      await sleep(400)
      while (j >= 0 && curr[0] < arr[j][0]) {
        let temp = arr[j]
        props.updateData(highlight(props.dataState.data,[j+1], 'black'))
        props.updateData(highlight(props.dataState.data,[j], 'red'))
        await sleep(200)
        arr[j] = curr
        arr[j + 1] = temp;
        j--;
        props.updateData(arr)
        await sleep(200)
      }
      await sleep(200)
      props.updateData(unhighlight(props.dataState.data))
      await sleep(200)
    };
    props.updateData(arr)
    return arr
  }

  const MergeSortIterative = async( arr: Array<any>) => {
    let subarraySize = 1;
    while (subarraySize < (arr.length - 1)) {
        let left = 0;
        await sleep(400)
        while (left < (arr.length - 1)) {
          let mid = Math.min((left + subarraySize - 1), (arr.length - 1))
          let right = 2 * subarraySize + left - 1 > (arr.length - 1) ? 
            arr.length - 1
            : 
            2 * subarraySize + left -1
          await MergeIterative(arr, left, mid, right)
          await sleep(400)
          left = left + subarraySize * 2
        }
        subarraySize *= 2
    }
    props.updateData(arr)
    return arr
}

  const MergeIterative = async (arr: Array<any>, lft: number, mid: number, rt: number) => {
      let leftLength = mid - lft + 1
      let rightLength = rt - mid

      let leftArray = new Array(leftLength)
      let rightArray = new Array(rightLength)

      for (let i: number = 0; i < leftLength; i++) {
        props.updateData(highlight(props.dataState.data, [lft + i], 'red'))
        leftArray[i] = arr[lft + i]
      }
      for (let i: number = 0; i < rightLength; i++) {
        props.updateData(highlight(props.dataState.data, [mid + i + 1], 'red'))
        rightArray[i] = arr[mid + i + 1]
      }
      await sleep(400)
      let i = 0;
      let j = 0;
      let k = lft;
      while (i < leftLength && j < rightLength) {
        if (leftArray[i][0] > rightArray[j][0]) {
          arr[k] = rightArray[j]
          j++
        } else {
          arr[k] = leftArray[i]
          i++
        }
        props.updateData(arr)
        await sleep(200)
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
      props.updateData(arr)
      await sleep(400)
      props.updateData(unhighlight(props.dataState.data))
  }
  
  const QuickSortIterative = async(arr: Array<any>, start: number, end: number) => {
    return
  }

  const QuickSortPartition = async(arr: Array<any>, start: number, end: number) => {
    let smaller: number = start - 1
    let pivot = arr[end][0]

    for (let curr = start; curr < end; curr++) {
      if (arr[curr][0] <= pivot) {
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

  const handleNumColSubmit = (e: any) => {
    e.preventDefault()
    props.updateCols(inputCol)
    props.populateData(inputCol)
  }

  console.log(props)
  return (
    <main>
      { loading ? 
        <p>loading...</p>
      :
        <div>
          <h1>Sorting Visualizer</h1>
          <button onClick={() => props.populateData(10)}>Reset</button>
          <button onClick={() => BubbleSort(props.dataState.data)}>BubbleSort</button>
          <button onClick={() => InsertionSort(props.dataState.data)}>InsertionSort</button>
          <button 
            onClick={() => {
              MergeSortIterative(props.dataState.data)
              props.updateData(props.dataState.data)
            }}
          >
              MergeSort
          </button>
          <button onClick={() => QuickSortIterative(props.dataState.data, 0, props.dataState.data.length - 1)}>QuickSort</button>

          {/* <form onSubmit={(e) => handleNumColSubmit(e)}>
            <label >Number of Columns:</label> <br></br>
            <input type="number" placeholder="Up to 10" max='10' onChange={(e) => setInputCol(parseInt(e.target.value))}/>
          </form> */}

          <div className='cols-container'>
            {props.dataState.data.map((bar: Array<any>, index: number) => 
              <div 
                className='cols' 
                style={{height: `${bar[0]}%`, width: `${100/props.dataState.columns}%`, backgroundColor:`${bar[1]}`}}
                key={index}
              >
              </div>
            )}
          </div>

        </div>
      }
    </main>
    
  );
}

export default connect(state, actions)(App);
