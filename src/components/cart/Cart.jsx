import React from "react";
import "./cart.scss";

const Cart = () => {
  return (
    <div className="order-cart">
      <div className="order-cart__empty">
        <h4 className="order-cart__empty__title">Cart Items:</h4>
        <h5 className="order-cart__empty__complement">Cart Is Empty!!</h5>
        <img
          src="../src/assets/img/cart.png"
          className="order-cart__empty__image"
        />
        <p className="order-cart__empty__paragraph">
          Looks like you have not order something. Go ahead, order some yummy
          food from menu..
        </p>
      </div>
    </div>
  );
};

export default Cart;
