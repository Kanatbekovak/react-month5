import React from 'react';
import "./style.css"; 

const ProductCard = (props) => {
  return (
    <div className="card">
      <img src={props.image} alt={props.name} />
      <h3>{props.name}</h3>
      <p>{props.price} сом</p>
      <button onClick={() => props.onAddToCart(props.product)}>
        Добавить в корзину
      </button>
    </div>
  );
};

export default ProductCard;