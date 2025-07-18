import React, { useState } from 'react';

function App() {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-72">
        <h1 className="text-2xl font-bold mb-4 text-center">Simple Calculator</h1>
        <input
          type="text"
          value={input}
          readOnly
          className="w-full mb-4 p-2 border border-gray-300 rounded text-right"
        />
        <div className="grid grid-cols-4 gap-2">
          <button onClick={() => handleClick('1')} className="btn">1</button>
          <button onClick={() => handleClick('2')} className="btn">2</button>
          <button onClick={() => handleClick('3')} className="btn">3</button>
          <button onClick={() => handleClick('+')} className="btn bg-blue-500 text-white">+</button>

          <button onClick={() => handleClick('4')} className="btn">4</button>
          <button onClick={() => handleClick('5')} className="btn">5</button>
          <button onClick={() => handleClick('6')} className="btn">6</button>
          <button onClick={() => handleClick('-')} className="btn bg-blue-500 text-white">-</button>

          <button onClick={() => handleClick('7')} className="btn">7</button>
          <button onClick={() => handleClick('8')} className="btn">8</button>
          <button onClick={() => handleClick('9')} className="btn">9</button>
          <button onClick={() => handleClick('*')} className="btn bg-blue-500 text-white">*</button>

          <button onClick={handleClear} className="btn bg-red-500 text-white">C</button>
          <button onClick={() => handleClick('0')} className="btn">0</button>
          <button onClick={handleCalculate} className="btn bg-green-500 text-white">=</button>
          <button onClick={() => handleClick('/')} className="btn bg-blue-500 text-white">/</button>
        </div>
      </div>
    </div>
  );
}

export default App;
