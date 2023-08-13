import delivery from '../../assets/img/success-delivery.jpg';
import "./paymentStatus.scss";

const PaymentStatus = () => {
  return (
    <div className="payment">
      <div className="payment__container">
        <div className='payment__container__img'>
          <img src={delivery} alt="payment-success" />
        </div>
        <div className="payment__container__description">
          <div className="payment__container__description__title">
            <h2>Payment successful! get ready for delicious food.</h2>
          </div>
          <div className="payment__container__description__body">
            <p>Thank you for payment. We have received your payment
              successfully. Your <br /> transaction ID is "SHJG12155215",
              you will get an email invoice soon!
            </p>
          </div>
          <div className="payment__container__description__dowload">
            <button>
              Dowload Invoice
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaymentStatus;
