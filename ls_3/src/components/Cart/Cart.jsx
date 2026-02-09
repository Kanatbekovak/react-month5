import React from 'react';
import "./style.css"; 

const Cart = ({ cartItems = [] }) => {
  return (
    <div className="cart-container">
      <h2>Ваша корзина</h2>
        <p>В корзине пока ничего нет...</p>
        <ul className="cart-list">
          {cartItems.map((item, index) => (
            <li key={index} className="cart-item">
              <span>{item.name}</span>
              <span className="cart-price">{item.price} сом</span>
            </li>
          ))}
        </ul>
      
        <div className="cart-total">
          <strong>Итого товаров: {cartItems.length}</strong>
        </div>
    
    </div>
  );
};

export default Cart;