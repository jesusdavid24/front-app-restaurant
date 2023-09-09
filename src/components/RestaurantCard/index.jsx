import { Link } from 'react-router-dom';
import './index.scss';

const Restaurantcard = ({
  id,
  image,
  title,
  rating,
  cuisines,
  open,
  close,
  cost,
  openDay,
  closeDay,
}) => {
  return (
    <Link to={`/restaurants/${id}`} className='card__link'>
      <div id={id} className='card'>
        {rating >= 4.0 && (
          <div className='card__ribbon card__ribbon--red'>
            <span>Recommended</span>
          </div>
        )}
        <div className='card__image-container'>
          <div
            className='card__image-container__image'
            style={{ backgroundImage: `url(${image})` }}
          />
        </div>
        <div className='card__content'>
          <div className='card__content__rating-box'>
            <h1 className='card__content__title'>{title}</h1>
            <h2
              className={
                rating >= 3.5
                  ? 'card__content__rating--recommended'
                  : 'card__content__rating--inadmisable'
              }>
              {rating.toFixed(1)} &#9733;
            </h2>
          </div>
          <div className='card__info'>
            <h2 className='card__info__rules'>
              - &nbsp; {cuisines.join(', ')}
            </h2>
            <h2 className='card__info__rules'>
              - &nbsp; {open}:00pm - {close}:00pm ({openDay} - {closeDay})
            </h2>
            <h2 className='card__info__rules'>- &nbsp; Cost ${cost} For 2</h2>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Restaurantcard;
