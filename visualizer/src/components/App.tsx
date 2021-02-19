import '../styles/App.css';
import {useEffect, useState} from 'react';
import {connect} from 'react-redux'
import {createRandomData, updateCols, updateData} from '../store/actions/DataActions'
// import { BubbleSort } from './algorithms';

const state = ({dataState}:any) => { return {dataState}}

const actions = (dispatch: any) => {
  return {
    populateData: (cols: number) => dispatch(createRandomData(cols)),
    updateCols: (cols: number) => dispatch(updateCols(cols)),
    updateData: (data: number[]) => dispatch(updateData(data))
  }
}

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

function App(props: any) {

  const BubbleSort = async (arr: number[]) =>{
    let swap: boolean = true;

    while (swap) {
        swap = false;
        for (let i: number = 0; i < arr.length - 1; i++) {
                await sleep(100)
                if (arr[i] > arr[i + 1]) {

                    swap = true;
                    let temp: number = arr[i];
                    arr[i] = arr[i + 1];
                    arr[i + 1] = temp;
                }
                props.updateData(arr)

        }
    }
    
    return arr
} 

  const [loading, setLoading] = useState(true)
  const [inputCol, setInputCol] = useState(100)

  useEffect(() => {
    props.populateData(100);
    setLoading(false);
  },[])
  
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
          <button onClick={() => BubbleSort(props.dataState.data)}>BubbleSort</button>


          <form onSubmit={(e) => handleNumColSubmit(e)}>
            <label >Number of Columns:</label> <br></br>
            <input type="number" placeholder="Up to 100" max='100' onChange={(e) => setInputCol(parseInt(e.target.value))}/>
          </form>

          <div className='cols-container'>
            {props.dataState.data.map((height: number, index: number) => 
              <div 
                className='cols' 
                style={{height: `${height}%`, width: `${100/props.dataState.columns}%`, backgroundColor: 'black'}}
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
