import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearCart } from "../../store/redux/slices/cartSlice";
import AddressList from "../../components/AddressList";
import Paymentitems from "../../components/PaymentItems";
import CardView from "../../components/CardView";
import AlwaysFirst from "../../components/AlwaysFirst";
import Cart from "../../components/Cart";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import "./index.scss";

const stripePromise = loadStripe(
  "pk_test_51NiN00Isblv2sRW8edxjWByXYrbDZG86nyVa4KDjJCMLZi5QaOjiqlOb02jafd0jRDWI3OtrQmr3XCS94ILcFDLJ00y4dMEfMb"
);

const Checkout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [paymentitems, setPaymentitems] = useState([]);

  const addPaymentitem = (item) => {
    setPaymentitems([...paymentitems, item]);
  };

  const removePaymentitem = (index) => {
    const updatePaymentitems = [...paymentitems];
    updatePaymentitems.splice(index, 1);
    setPaymentitems(updatePaymentitems);
  };

  const handleClear = () => {
    dispatch(clearCart());
    navigate(-1);
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
              <Cart>
                <div className="order-cart__fill__bottom__buttons-box">
                  <button
                    className="order-cart__fill__bottom__buttons-box__button"
                    onClick={handleClear}
                  >
                    Clear
                  </button>
                </div>
              </Cart>
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
            <Elements stripe={stripePromise}>
              <Paymentitems
                paymentitems={paymentitems}
                addPaymentitem={addPaymentitem}
                removePaymentitem={removePaymentitem}
              />
            </Elements>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
