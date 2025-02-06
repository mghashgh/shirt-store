import React, { useState } from 'react';
import './App.css';
import { ShirtCard } from './components/ShirtCard.tsx';
import { OrderSummary } from './components/OrderSummary.tsx';

function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);
  const [count5, setCount5] = useState(0);
  return (
    <div className="App">
      <h1>Welcome to Shirt Store</h1>
      <div className="cards-container">
        <ShirtCard name={1} count={count1} setCount={setCount1}/>
        <ShirtCard name={2} count={count2} setCount={setCount2}/>
        <ShirtCard name={3} count={count3} setCount={setCount3}/>
        <ShirtCard name={4} count={count4} setCount={setCount4}/>
        <ShirtCard name={5} count={count5} setCount={setCount5}/>
      </div>
      <OrderSummary total={53.40}/>
    </div>
  );
}

export default App;