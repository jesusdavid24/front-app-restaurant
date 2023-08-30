import './index.scss';

const Pagination = ({ restaurantsLength, queryParamsHandler }) => {
  const handleClick = (event) => {
    const currentElement = event.target;
    const selectedElement = document.querySelector(
      '.restaurants-pagination__numbers--selected'
    );
    if (currentElement !== selectedElement) {
      selectedElement &&
        selectedElement.classList.remove(
          'restaurants-pagination__numbers--selected'
        );
      currentElement.classList.toggle(
        'restaurants-pagination__numbers--selected'
      );
    }
    queryParamsHandler(currentElement.name, currentElement.id);
  };

  return (
    <div className='restaurants-pagination'>
      <button className='restaurants-pagination__arrows'>
        <img
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
              index == 0
                ? 'restaurants-pagination__numbers restaurants-pagination__numbers--selected'
                : 'restaurants-pagination__numbers'
            }
            onClick={handleClick}>
            {index + 1}
          </button>
        )
      )}

      <button className='restaurants-pagination__arrows'>
        <img
          src='/icons/right-arrow.png'
          className='restaurants-pagination__arrow-icon'
        />
      </button>
    </div>
  );
};

export default Pagination;
