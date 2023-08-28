import React, { useState } from "react";
import AddressList from "../../components/AddressList";
import Paymentitems from "../../components/PaymentItems";
import CardView from "../../components/CardView";
import AlwaysFirst from "../../components/AlwaysFirst";
import "./index.scss";
import Cart from "../../components/Cart";

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
      <div className="summary__container-immg">
        <img className="summary__object" src="/img/1.jpg" />
      </div>
      <div className="summary__checkout-container">
        <div className="summary__contentca">
          <div className="summary__cartfirst">
            <div className="summary__cart-container">
              <Cart />
            </div>
            <div className="summary__card-always">
              <AlwaysFirst />
            </div>
          </div>
        </div>
        <div className="summary__delypay">
          <div className="summary__card-address">
            <AddressList />
            <div className="summary__card-view">
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
    </div>
  );
};

export default Checkout;
