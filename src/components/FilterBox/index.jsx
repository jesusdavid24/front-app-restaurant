import { useContext } from 'react';
import { RestaurantsContext } from '../../store/RestaurantsContext';
import './index.scss';

const FilterBox = ({ handleBoxAndMenuOpen }) => {
  const { queryParamsHandler } = useContext(RestaurantsContext);

  const handleClick = (event) => {
    const currentElement = event.target;

    const selectedElement = document.querySelector('.box-list__item--selected');

    if (currentElement !== selectedElement) {
      selectedElement &&
        selectedElement.classList.remove('box-list__item--selected');

      currentElement.classList.toggle('box-list__item--selected');
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

  const handleMenuOpen = (event) => {
    handleBoxAndMenuOpen(event);
  };

  return (
    <div className='filters'>
      <div className='filters__buttons'>
        <h2>Filter</h2>
        <i
          id='filter-box-open-button'
          className='bi bi-caret-down-fill filters__buttons__icon'
          onClick={handleMenuOpen}
        />
      </div>

      <div className='filters__buttons__box'>
        <ul className='filters__buttons__box-list'>
          <button
            id='all'
            name='filter'
            className='box-list__item box-list__item--selected'
            onClick={handleClick}>
            All
          </button>
          <button
            id='popular'
            name='filter'
            className='box-list__item'
            onClick={handleClick}>
            Popular
          </button>
          <button
            id='latest'
            name='filter'
            className='box-list__item'
            onClick={handleClick}>
            Latest
          </button>
          <button
            id='trend'
            name='filter'
            className='box-list__item'
            onClick={handleClick}>
            Trend
          </button>
        </ul>
      </div>

      <div className='filters__menu-box'>
        <h2>Latest Filter</h2>
        <img
          src='/icons/filters-menu.png'
          id='filter-menu-open-button'
          className='filters__menu-box__button'
          onClick={handleMenuOpen}
        />
      </div>
    </div>
  );
};

export default FilterBox;
