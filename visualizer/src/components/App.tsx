import '../styles/App.css';
import {BubbleSort} from './algorithms';


function App() {

  BubbleSort([1,2,3.1,5.2,19,542,4,234,1])
  return (
    <main>
      <h1>Sorting Visualizer</h1>
    </main>
  );
}

export default App;
