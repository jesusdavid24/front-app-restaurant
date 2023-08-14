import React, { useState } from "react";
import AddressList from "../../components/list-address/AddressList";
import Paymentitems from "../../components/items-payment/PaymentItems"
import CardView from "../../components/view-card/CardView"
import "./index.scss";

const Checkout = () => {
  const [addresses, setAddresses] = useState([]);
  const [paymentitems, setPaymentitems] = useState([]);

  const addAddress = (address) => {
    setAddresses([...addresses, address]);
  };

  const removeAddress = (index) => {
    const updateAddress = [...addresses];
    updateAddress.splice(index, 1);
    setAddresses(updateAddress);
  };

  const addPaymentitem = (item) => {
    setPaymentitems([...paymentitems, item]);
  };

  const removePaymentitem = (index) => {
    const updatePaymentitems = [...paymentitems];
    updatePaymentitems.splice(index, 1);
    setPaymentitems(updatePaymentitems);
  };

  return (
    <div className="checkout_container">
      <div className="container_immg">
        <img className="object" src="/src/assets/img/1.jpg" />
      </div>
      <div>

      </div>
      <div className="container_card_address">
        <h1>Vista de pagos</h1>
        <h2>Direcciones</h2>
        <AddressList
          addresses={addresses}
          addAddress={addAddress}
          removeAddress={removeAddress}
        />
        <div className="card_view">
          <CardView />
        </div>
      </div>
      <br />
      <div>
        <h2>Payment:</h2>
        <Paymentitems
          paymentitems={paymentitems}
          addPaymentitem={addPaymentitem}
          removePaymentitem={removePaymentitem}
        />
      </div>
    </div>
  );
};

export default Checkout;
