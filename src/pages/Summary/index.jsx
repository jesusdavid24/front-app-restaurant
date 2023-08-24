import React, { useState } from "react";
import AddressList from "../../components/AddressList";
import Paymentitems from "../../components/PaymentItems"
import CardView from "../../components/CardView"
import AlwaysFirst from "../../components/AlwaysFirst"
import "./index.scss";
import Cart from "../../components/Cart"

const Checkout = () => {
  const [paymentitems, setPaymentitems] = useState([]);

  const addPaymentitem = (item) => {
    setPaymentitems([...paymentitems, item]);
  };

  const removePaymentitem = (index) => {
    const updatePaymentitems = [...paymentitems];
    updatePaymentitems.splice(index, 1);
    setPaymentitems(updatePaymentitems);
  };

  return (
    <div className="summary">
      <div className="container_immg">
        <img className="object" src="/img/1.jpg" />
      </div>
      <div className="checkout_container">
        <div className="cart_container">
          <Cart />
        </div>
        <div>
          <AlwaysFirst />
        </div>
        <div className="container_card_address">
          <AddressList />
          <div className="card_view">
            <CardView />
          </div>
        </div>
        <div className="summary__payment">
          <h2 className="summary__payment__title">Payment:</h2>
          <Paymentitems
            paymentitems={paymentitems}
            addPaymentitem={addPaymentitem}
            removePaymentitem={removePaymentitem}
            />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
