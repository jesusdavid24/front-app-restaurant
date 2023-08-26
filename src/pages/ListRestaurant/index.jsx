import React from 'react';
import LocationForm from '../../components/LocationForm';
import FilterBox from '../../components/FilterBox';
import FilterMenu from '../../components/FilterMenu';
import RestaurantsList from '../../components/RestaurantsList';
import { RestaurantsProvider } from '../../store/RestaurantsContext';
import './index.scss';

const ListRestaurants = () => {
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
    <RestaurantsProvider>
      <div className='restaurants-page'>
        <LocationForm />
        <div className='restaurants-page__menu-container'>
          <div className='restaurants-page__filter-box'>
            <FilterBox handleBoxAndMenuOpen={handleBoxAndMenuOpen} />
          </div>
          <div className='restaurants-page__menu-list'>
            <div className='restaurants-page__menu-list__filter-menu'>
              <FilterMenu handleBoxAndMenuOpen={handleBoxAndMenuOpen} />
            </div>
            <div className='restaurants-page__menu-list__list'>
              <RestaurantsList />
            </div>
          </div>
        </div>
      </div>
    </RestaurantsProvider>
  );
};

export default ListRestaurants;
