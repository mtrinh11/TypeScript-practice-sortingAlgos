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

const highlight = (data: Array<any>, columns: Array<any>, color: string) => {
  for (let i of columns) {
    data[i][1] = color
  }
  return data
}

const highlightAll = (data: Array<any>, color: string) => {
  for (let i in data) {
    data[i][1] = color
  }
  return data
}

const highlightDiff = (data: Array<any>) => {
  let i = 0
  for (let color of colors) {
    data[i][1] = color;
    i++
  }
  return data
}

const unhighlight = (data: Array<any>) => {
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

  const MergeSort = async (arr: Array<any>) => {
    if (arr.length > 1) {
      let mid = Math.floor(arr.length / 2)
      let L = arr.slice(0, mid)
      let R = arr.slice(mid, arr.length + 1)
      MergeSort(L)
      MergeSort(R)

      let i = 0;
      let j = 0;
      let k = 0;
      while (i < L.length && j < R.length) {
        await sleep(200)
        highlight(L, [i], 'red')
        highlight(R, [j], 'red')
        await sleep(200)
        if (L[i][0] < R[j][0]) {
          
          arr[k] = L[i]
          highlight(arr, [k], 'blue')
          i++
        } else {
          arr[k] = R[j]
          j++
        }
        k++
        unhighlight(arr)
      }
      while (i < L.length) {
        highlight(arr, [k], 'blue')
        await sleep(200)
        arr[k] = L[i]
        i++
        k++
      }
      while (j < R.length) {
        await sleep(200)
        arr[k] = R[j]
        j++
        k++
      }
    }
    await sleep(200)
    props.updateData(arr)
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
              MergeSort(props.dataState.data)
            }}
          >
              MergeSort
          </button>

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
