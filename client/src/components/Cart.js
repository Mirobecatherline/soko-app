import "./cart.css";

import React, { useEffect, useState } from "react";

const Cart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);

  const handleRemove = (id) => {
    const arr = cart.filter((products) => products.id !== id);
    setCart(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;
    cart.map((products) => (ans += products.quantity * products.price));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });

  return (
    <article>
      {cart.map((products) => (
        <div className="cart_box" key={products.id}>
          <div className="cart_img">
            <img src={products.product_image_url} alt="" />
            <p>{products.product_name}</p>
          </div>
          <div>
            <button onClick={() => handleChange(products, 1)}>+</button>
            <button>{products.quantity}</button>
            <button onClick={() => handleChange(products, -1)}>-</button>
          </div>
          <div>
            <span>{products.price}</span>
            <button onClick={() => handleRemove(products.id)}>Remove</button>
          </div>
        </div>
      ))}
      <div className="total">
        <span>Total Price of your Cart</span>
        <span>Ksh - {price}</span>
      </div>
    </article>
  );
};

export default Cart;
