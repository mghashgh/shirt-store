import React, { useState, useEffect } from "react";
import "./App.css";
import { ShirtCard } from "./components/ShirtCard.tsx";
import { OrderSummary } from "./components/OrderSummary.tsx";

function App() {
  const [shirt1, setShirt1] = useState(0);
  const [shirt2, setShirt2] = useState(0);
  const [shirt3, setShirt3] = useState(0);
  const [shirt4, setShirt4] = useState(0);
  const [shirt5, setShirt5] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    fetch("http://localhost:3333/total", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ shirt1, shirt2, shirt3, shirt4, shirt5 }),
    }).then((response) => response.json())
      .then((data) => setTotal(data.total))
      .catch((error) => console.log(error));
  }, [shirt1, shirt2, shirt3, shirt4, shirt5]);

  return (
    <div className="App">
      <h1>Welcome to Shirt Store</h1>
      <div className="cards-container">
        <ShirtCard name={1} count={shirt1} setCount={setShirt1} />
        <ShirtCard name={2} count={shirt2} setCount={setShirt2} />
        <ShirtCard name={3} count={shirt3} setCount={setShirt3} />
        <ShirtCard name={4} count={shirt4} setCount={setShirt4} />
        <ShirtCard name={5} count={shirt5} setCount={setShirt5} />
      </div>
      <OrderSummary total={total} />
    </div>
  );
}

export default App;
