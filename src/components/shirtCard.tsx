import React from 'react';

type ShirtCardProps = {
  name: string;
  count: number;
  setCount: () => void;
};

export const ShirtCard: React.FC<ShirtCardProps> = ({ name, count, setCount }) => {

  const handleAdd = () => {
    setCount(count + 1);
  };

  const handleRemove = () => {
    if (count > 0) setCount(count - 1);
  };

  return (
    <div className="card">
      <h2>Shirt {name} </h2>
      <p>Items in Cart: {count}</p>

      <button onClick={handleAdd}>Add</button>
      <button onClick={handleRemove} disabled={count === 0}>
        Remove
      </button>
    </div>
  );
};