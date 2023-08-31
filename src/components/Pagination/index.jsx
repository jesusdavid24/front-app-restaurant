import './index.scss';

const Pagination = ({ restaurantsLength, queryParamsHandler, currentPage }) => {
  const handleClick = (event) => {
    const { name } = event.target;
    const { id } = event.target;

    queryParamsHandler(name, id);
  };

  return (
    <div className='restaurants-pagination'>
      <button
        id='prev'
        name='prev'
        className='restaurants-pagination__arrows'
        onClick={handleClick}
        disabled={currentPage === 1}>
        <img
          id='prev'
          name='prev'
          src='/icons/left-arrow.png'
          className='restaurants-pagination__arrow-icon'
        />
      </button>

      {Array.from({ length: Math.ceil(restaurantsLength / 12) }).map(
        (_, index) => (
          <button
            key={index}
            id={index + 1}
            name='page'
            className={
              index + 1 == currentPage
                ? 'restaurants-pagination__numbers restaurants-pagination__numbers--selected'
                : 'restaurants-pagination__numbers'
            }
            onClick={handleClick}>
            {index + 1}
          </button>
        )
      )}

      <button
        id='next'
        name='next'
        className='restaurants-pagination__arrows'
        onClick={handleClick}
        disabled={currentPage * 12 > restaurantsLength}>
        <img
          id='next'
          name='next'
          src='/icons/right-arrow.png'
          className='restaurants-pagination__arrow-icon'
        />
      </button>
    </div>
  );
};

export default Pagination;
