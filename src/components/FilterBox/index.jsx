import { Link } from 'react-router-dom';
import './index.scss';

const FilterBox = ({ handleBoxAndMenuOpen, filter, page, search }) => {
  const filterIndex = search.indexOf(filter);
  const ampersandIndex = search.indexOf('&');
  const filterSliced = search.slice(filterIndex, ampersandIndex);
  const pageIndex = search.indexOf(page);
  const pageSliced = search.slice(pageIndex, pageIndex + 1);

  const handleMenuOpen = (e) => {
    handleBoxAndMenuOpen(e);
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
          {['all', 'popular', 'latest', 'trend'].map((button, index) => (
            <Link
              key={index}
              id={button}
              name='filter'
              to={search
                .replace(filterSliced, button)
                .replace(pageSliced, '1')}>
              <button
                id={button}
                name='filter'
                className={
                  filter == button
                    ? 'box-list__item box-list__item--selected'
                    : 'box-list__item box-list__item'
                }>
                {button}
              </button>
            </Link>
          ))}
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
