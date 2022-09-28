import { useState } from 'react';
import './index.scss';

function App() {
  const [count, setCount] = useState(0);

  const buttonPlus = () => {
    setCount(count + 1);
  };
  const buttonMinus = () => {
    setCount(count - 1);
  };

  return (
    <div className='App'>
      <div>
        <h2>Счетчик:</h2>
        <h1>{count}</h1>
        <button onClick={buttonMinus} className='minus'>
          - Минус
        </button>
        <button onClick={buttonPlus} className='plus'>
          Плюс +
        </button>
      </div>
    </div>
  );
}

export default App;
