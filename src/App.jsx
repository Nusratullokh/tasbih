import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(prevCount => {
      const newCount = prevCount + 1;
      if (newCount === 1) {
        playSound('/subhanallah.mp3');
      } else if (newCount === 34) {
        playSound('/alhamdulillah.mp3');
      } else if (newCount === 67) {
        playSound('/allahuakbar.mp3');
      }

      if (newCount === 33) {
        alert('33 ga yetdi!');
      } else if (newCount === 66) {
        alert('66 ga yetdi!');
      } else if (newCount === 99) {
        alert('99 ga yetdi!');
      }
      
      return newCount;
    });

   

  };

  const handleReset = () => {
    setCount(0);
  };
  

  const playSound = (filePath) => {
    const audio = new Audio(filePath);
    audio.play();
  };

  return (
    <div className="App">
      <h1>Tasbih </h1>
      <p>Count: {count}</p>
      <button className='click__btn' onClick={handleClick}>Click</button>
      <button className='reset__btn' onClick={handleReset}>Reset</button>

    </div>
  );
}

export default App;
