import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectProducts,
  selectPayment,
  updateProduct,
  postUserEmail,
} from '../../store/redux/slices/cartSlice';
import { authLogin } from '../../store/redux/slices/loginSlice';
import './index.scss';

const Cart = ({ children }) => {
  const dispatch = useDispatch();

  const products = useSelector(selectProducts);
  const payment = useSelector(selectPayment);
  const { email } = useSelector(authLogin);

  useEffect(() => {
    dispatch(postUserEmail(email));
  }, []);

  const handleIncrement = (e) => {
    const id = e.target.id;
    dispatch(updateProduct({ id, quantity: 1 }));
  };

  const handleDecrement = (e) => {
    const { id } = e.target;
    dispatch(updateProduct({ id, quantity: -1 }));
  };

  return (
    <div className='order-cart'>
      <h4 className='order-cart__empty__title'>Cart Items:</h4>
      {!products.length ? (
        <div className='order-cart__empty'>
          <h5 className='order-cart__empty__complement'>Cart Is Empty!!</h5>
          <img src='/img/cart.png' className='order-cart__empty__image' />
          <p className='order-cart__empty__paragraph'>
            Looks like you have not order something. Go ahead, order some yummy
            food from menu..
          </p>
        </div>
      ) : (
        <div className='order-cart__fill'>
          {products.map((product, index) => (
            <div key={index} className='order-cart__fill__box'>
              <div className='order-cart__fill__product'>
                {index % 2 == 0 ? (
                  <img
                    src='/icons/list-red.png'
                    className='order-cart__fill__product__image'
                  />
                ) : (
                  <img
                    src='/icons/list-green.png'
                    className='order-cart__fill__product__image'
                  />
                )}{' '}
                <h5 className='order-cart__fill__product__name'>
                  {product.productName}
                </h5>
              </div>
              <h6 className='order-cart__fill__box__unit-price'>
                ${product.price}.00
              </h6>

              <div className='order-cart__fill__box__price'>
                <div className='order-cart__fill__box__inc-dec'>
                  <button
                    id={product.id}
                    className='order-cart__fill__box__button'
                    disabled={product.quantity <= 0}
                    onClick={handleDecrement}>
                    <i
                      id={product.id}
                      className='bi bi-dash order-cart__fill__box__button__image'
                    />
                  </button>
                  <h6 className='order-cart__fill__box__quantity'>
                    {product.quantity}
                  </h6>
                  <button
                    id={product.id}
                    className='order-cart__fill__box__button'
                    onClick={handleIncrement}>
                    <i
                      id={product.id}
                      className='bi bi-plus order-cart__fill__box__button__image'
                    />
                  </button>
                </div>

                <h6 className='order-cart__fill__box__acum'>
                  ${product.quantity * product.price}.00
                </h6>
              </div>
            </div>
          ))}

          <div className='order-cart__fill__bottom'>
            <div className='order-cart__fill__bottom__box'>
              <h5 className='order-cart__fill__bottom__subtotal'>subtotal</h5>
              <h5 className='order-cart__fill__bottom__total'>${payment}.00</h5>
            </div>
            <p className='order-cart__fill__bottom__charges'>
              delivery charges may apply to your order
            </p>
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
