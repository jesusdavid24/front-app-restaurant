import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateAddress } from '../../store/redux/slices/cartSlice';
import ButtonsComponent from '../ButtonsComponents';
import { cardView } from '../../assets/data/cardview';
import './index.scss';

const CardView = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateAddress(cardView[0]));
  });

  const handleClick = (e, address) => {
    const currentElement = e.target;
    const selectedElement = document.querySelector(
      '.checkout__container-card--selected'
    );
    if (currentElement !== selectedElement) {
      selectedElement &&
        selectedElement.classList.remove('checkout__container-card--selected');
      currentElement.classList.toggle('checkout__container-card--selected');
    }

    dispatch(updateAddress(address));
  };

  return (
    <div className='checkout'>
      {cardView.map((card, index) => (
        <div
          key={index}
          className={
            index == 0
              ? 'checkout__container-card checkout__container-card--selected'
              : 'checkout__container-card'
          }
          onClick={(e) => handleClick(e, card)}>
          <div className='checkout__info'>
            <div className='checkout__info__title'>
              <h6 className='checkout__info__name'>
                {localStorage.getItem('firstName')}{' '}
                {localStorage.getItem('lasttName')}
              </h6>
              <span className='checkout__info__span'>{card.place}</span>
            </div>
            <div className='checkout__info__content'>
              <p className='checkout__info__content__p'>{card.address}</p>
              <p className='checkout__info__content__p'>{card.city}</p>
              <p className='checkout__info__content__p'>{card.zip}</p>
              <p className='checkout__info__content__p'>Mobile: {card.phone}</p>
            </div>
          </div>
          <div className='checkout__button-container'>
            <ButtonsComponent title={'Edit'} />
            <ButtonsComponent title={'Remove'} />
          </div>
        </div>
      ))}
    </div>
  );
};
export default CardView;
