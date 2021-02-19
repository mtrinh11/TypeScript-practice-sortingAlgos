import '../styles/App.css';
import {useEffect, useState} from 'react';
import {connect} from 'react-redux'
import {createRandomData, updateCols} from '../store/actions/DataActions'

const state = ({dataState}:any) => { return {dataState}}

const actions = (dispatch: any) => {
  return {
    populateData: (cols: number) => dispatch(createRandomData(cols)),
    updateCols: (cols: number) => dispatch(updateCols(cols))
  }
}

function App(props: any) {

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
          {/* <button onClick={() => setRandArr(BubbleSort([...randArr]))}>BubbleSort</button> */}


          <form onSubmit={(e) => handleNumColSubmit(e)}>
            <label >Number of Columns:</label> <br></br>
            <input type="number" placeholder="Up to 100" max='100' onChange={(e) => setInputCol(parseInt(e.target.value))}/>
          </form>

          <div className='cols-container'>
            {props.dataState.data.map((height: number, index: number) => 
              <div 
                className='cols' 
                style={{height: `${height}%`, width: `${100/props.dataState.columns}%`}}
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
