import React from 'react';

type OrderSummaryProps = {
  total: number;
};

export const OrderSummary: React.FC<OrderSummaryProps> = ({ total }) => {

  return (
    <div className="order-summary">
      <h2>Order Summary</h2>
      <p>Total: {total}</p>
    </div>
  );
};
