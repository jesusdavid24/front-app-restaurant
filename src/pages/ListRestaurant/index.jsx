import { useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { RestaurantsContext } from '../../store/RestaurantsContext';
import LocationForm from '../../components/LocationForm';
import FilterBox from '../../components/FilterBox';
import FilterMenu from '../../components/FilterMenu';
import RestaurantsList from '../../components/RestaurantsList';

import './index.scss';

const ListRestaurants = () => {
  const location = useLocation();
  const queryParamsLocation = new URLSearchParams(location.search);

  const filter = queryParamsLocation.get('filter');
  const page = queryParamsLocation.get('page');

  const { queryParamsHandler, limit } = useContext(RestaurantsContext);

  useEffect(() => {
    queryParamsHandler(filter, page);
  }, [location]);

  const handleBoxAndMenuOpen = (event) => {
    const id = event.target.id;
    const buttonsBox = document.querySelector('.filters__buttons__box');
    const menuBox = document.querySelector(
      '.restaurants-page__menu-list__filter-menu'
    );

    id == 'filter-box-open-button' &&
      buttonsBox.classList.toggle('filters__buttons__box--active');

    id == 'filter-menu-open-button' &&
      (menuBox.classList.toggle(
        'restaurants-page__menu-list__filter-menu--active'
      ),
      document.body.classList.toggle('menu-open'));
  };

  return (
    <div className='restaurants-page'>
      <LocationForm />
      <div className='restaurants-page__menu-container'>
        <div className='restaurants-page__filter-box'>
          <FilterBox
            handleBoxAndMenuOpen={handleBoxAndMenuOpen}
            filter={filter}
            limit={limit}
          />
        </div>
        <div className='restaurants-page__menu-list'>
          <div className='restaurants-page__menu-list__filter-menu'>
            <FilterMenu handleBoxAndMenuOpen={handleBoxAndMenuOpen} />
          </div>
          <div className='restaurants-page__menu-list__list'>
            <RestaurantsList actualPage='/restaurants' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListRestaurants;
