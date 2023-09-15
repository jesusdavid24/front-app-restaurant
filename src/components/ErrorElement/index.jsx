import { useContext } from 'react';
import { RestaurantsContext } from '../../store/context/RestaurantsContext';

const ErrorElement = () => {
  const { error, handleError } = useContext(RestaurantsContext);

  const handleClick = () => {
    handleError(false);
  };

  return (
    <>
      <div className='not-found'>
        <div className='not-found__container'>
          <div className='not-found__container__img-box'>
            <img
              src='img/not-found.png'
              className='not-found__container__image'
            />
          </div>
          <div className='not-found__container__content'>
            <h1 className='not-found__container__content__title'>
              An error has ocurred
            </h1>
            <p className='not-found__container__content__paragraph--error'>
              {error}
            </p>
            <button
              type='button'
              className='not-found__container__content__button'
              onClick={handleClick}>
              TRY AGAIN
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ErrorElement;
