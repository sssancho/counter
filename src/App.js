import './index.scss';
import React,{useState} from 'react';

function App() {
  const [count,setCount] = useState(0)

  const minusCount = () =>{
    setCount(count - 1)
  }

  const plusCount = () =>{
    setCount(count + 1)
  }
  
  return (
    <div className="App">
      <div>
        <h2>Счетчик:</h2>
        <h1>{count}</h1>
        <button onClick={() => minusCount()} className="minus">- Минус</button>
        <button onClick={() => plusCount()} className="plus">Плюс +</button>
      </div>
    </div>
  );
}

export default App;
