import failedPayment from '../../assets/img/failed-payment.webp';
import "./index.scss";

const PaymentFailed = () => {
  return (
    <div className="failed">
      <div className="failed__container">
        <div className='failed__container__img'>
          <img src={failedPayment} alt="payment-failed" />
        </div>
        <div className="failed__container__description">
          <div className="failed__container__description__title">
            <h2>Oops! we are unable to process your payment</h2>
          </div>
          <div className="failed__container__description__body">
            <p>Looks like we encountered an error. Pleass try again.
              If you continue to have issue, <br/>
              try another payment method.
            </p>
          </div>
          <div className="failed__container__description__dowload">
            <button>
              Try Again
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaymentFailed;
