import { Link } from 'react-router-dom';
import './index.scss';

const ButtonsFilters = ({ filter, limit }) => {
  return (
    <div className='buttons-filters'>
      <h1 className='buttons-filters__title'>Popular Restaurant</h1>
      <div className='buttons-filters__box'>
        <Link id='all' name='filter' to={`/?filter=all&page=1&limit=${limit}`}>
          <button
            id='all'
            name='filter'
            className={
              filter == 'all'
                ? 'buttons-filters__box__button--selected'
                : 'buttons-filters__box__button'
            }>
            All
          </button>
        </Link>

        <Link
          id='popular'
          name='filter'
          to={`/?filter=popular&page=1&limit=${limit}`}>
          <button
            id='popular'
            name='filter'
            className={
              filter == 'popular'
                ? 'buttons-filters__box__button--selected'
                : 'buttons-filters__box__button'
            }>
            Popular
          </button>
        </Link>

        <Link
          id='latest'
          name='filter'
          to={`/?filter=latest&page=1&limit=${limit}`}>
          <button
            id='latest'
            name='filter'
            className={
              filter == 'latest'
                ? 'buttons-filters__box__button--selected'
                : 'buttons-filters__box__button'
            }>
            Latest
          </button>
        </Link>

        <Link
          id='trend'
          name='filter'
          to={`/?filter=trend&page=1&limit=${limit}`}>
          <button
            id='trend'
            name='filter'
            className={
              filter == 'trend'
                ? 'buttons-filters__box__button--selected'
                : 'buttons-filters__box__button'
            }>
            Trend
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ButtonsFilters;
