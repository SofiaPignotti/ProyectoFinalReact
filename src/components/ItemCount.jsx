import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ItemCount = ({ initial, stock, onAdd }) => {
  const [count, setCount] = useState(initial);

  const handleIncrease = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handleDecrease = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleAdd = () => {
    onAdd(count);
  };

  return (
    <div className="item-count">
      <div className="item-count__controls">
        <button onClick={handleDecrease}>-</button>
        <span>{count}</span>
        <button onClick={handleIncrease}>+</button>
      </div>
      <Link to={"/cart"}> <button className="btn btn-primary" onClick={handleAdd}>Agregar al carrito</button></Link>
    </div>
  );
};

export default ItemCount;