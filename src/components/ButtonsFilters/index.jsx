import { useContext } from 'react';
import { RestaurantsContext } from '../../store/RestaurantsContext';
import './index.scss';

const ButtonsFilters = () => {
  const { queryParamsHandler } = useContext(RestaurantsContext);

  const handleClick = (event) => {
    const currentElement = event.target;

    const selectedElement = document.querySelector(
      '.buttons-filters__box__button--selected'
    );

    if (currentElement !== selectedElement) {
      selectedElement &&
        selectedElement.classList.remove(
          'buttons-filters__box__button--selected'
        );

      currentElement.classList.toggle('buttons-filters__box__button--selected');
    }

    const actualPaginationElement = document.querySelector(
      '.restaurants-pagination__numbers--selected'
    );

    actualPaginationElement.classList.remove(
      'restaurants-pagination__numbers--selected'
    );

    const firstPaginationElement = document.querySelector(
      '.restaurants-pagination__numbers'
    );

    firstPaginationElement.classList.add(
      'restaurants-pagination__numbers--selected'
    );

    queryParamsHandler(currentElement.name, currentElement.id);
  };

  return (
    <div className='buttons-filters'>
      <h1 className='buttons-filters__title'>Popular Restaurant</h1>
      <div className='buttons-filters__box'>
        <button
          id='all'
          name='filter'
          className='buttons-filters__box__button buttons-filters__box__button--selected'
          onClick={handleClick}>
          All
        </button>
        <button
          id='popular'
          name='filter'
          className='buttons-filters__box__button'
          onClick={handleClick}>
          Popular
        </button>
        <button
          id='latest'
          name='filter'
          className='buttons-filters__box__button'
          onClick={handleClick}>
          Latest
        </button>
        <button
          id='trend'
          name='filter'
          className='buttons-filters__box__button'
          onClick={handleClick}>
          Trend
        </button>
      </div>
    </div>
  );
};

export default ButtonsFilters;
