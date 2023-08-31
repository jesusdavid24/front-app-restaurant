import { Link } from 'react-router-dom';
import './index.scss';

const FilterBox = ({ handleBoxAndMenuOpen, filter, limit }) => {
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
          <Link
            id='all'
            name='filter'
            to={`/restaurants?filter=all&page=1&limit=${limit}`}>
            <button
              id='all'
              name='filter'
              className={
                filter == 'all'
                  ? 'box-list__item box-list__item--selected'
                  : 'box-list__item box-list__item'
              }>
              All
            </button>
          </Link>

          <Link
            id='popular'
            name='filter'
            to={`/restaurants?filter=popular&page=1&limit=${limit}`}>
            <button
              id='popular'
              name='filter'
              className={
                filter == 'popular'
                  ? 'box-list__item box-list__item--selected'
                  : 'box-list__item box-list__item'
              }>
              Popular
            </button>
          </Link>

          <Link
            id='latest'
            name='filter'
            to={`/restaurants?filter=latest&page=1&limit=${limit}`}>
            <button
              id='latest'
              name='filter'
              className={
                filter == 'latest'
                  ? 'box-list__item box-list__item--selected'
                  : 'box-list__item box-list__item'
              }>
              Latest
            </button>
          </Link>

          <Link
            id='trend'
            name='filter'
            to={`/restaurants?filter=trend&page=1&limit=${limit}`}>
            <button
              id='trend'
              name='filter'
              className={
                filter == 'trend'
                  ? 'box-list__item box-list__item--selected'
                  : 'box-list__item box-list__item'
              }>
              Trend
            </button>
          </Link>
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
