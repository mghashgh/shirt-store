import React, { useState } from 'react';
import './App.css';
import { ShirtCard } from './components/shirtCard.tsx';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <h1>Welcome to Shirt Store</h1>
      <ShirtCard name={1} count={count} setCount={setCount}/>
    </div>
  );
}

export default App;