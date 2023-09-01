import { useLocation, Link } from 'react-router-dom';
import './index.scss';

const Pagination = ({ actualPage, restaurantsLength, limit }) => {
  const location = useLocation();
  const queryParamsLocation = new URLSearchParams(location.search);
  const filter = queryParamsLocation.get('filter');
  const page = parseInt(queryParamsLocation.get('page'));

  return (
    <div className='restaurants-pagination'>
      <Link
        to={`${actualPage}?filter=${filter}&page=${page - 1}&limit=${limit}`}>
        <button
          id='prev'
          name='prev'
          className='restaurants-pagination__arrows'
          disabled={page == 1}>
          <img
            id='prev'
            name='prev'
            src='/icons/left-arrow.png'
            className='restaurants-pagination__arrow-icon'
          />
        </button>
      </Link>

      {Array.from({ length: Math.ceil(restaurantsLength / 12) }).map(
        (_, index) => (
          <Link
            key={index}
            id={index + 1}
            to={`${actualPage}?filter=${filter}&page=${
              index + 1
            }&limit=${limit}`}
            name='page'
            className='restaurants-pagination__link'>
            <button
              id={index + 1}
              name='page'
              className={
                index + 1 == page
                  ? 'restaurants-pagination__numbers restaurants-pagination__numbers--selected'
                  : 'restaurants-pagination__numbers'
              }>
              {index + 1}
            </button>
          </Link>
        )
      )}

      <Link
        to={`${actualPage}?filter=${filter}&page=${page + 1}&limit=${limit}`}>
        <button
          id='next'
          name='next'
          className='restaurants-pagination__arrows'
          disabled={page * 12 >= restaurantsLength}>
          <img
            id='next'
            name='next'
            src='/icons/right-arrow.png'
            className='restaurants-pagination__arrow-icon'
          />
        </button>
      </Link>
    </div>
  );
};

export default Pagination;
