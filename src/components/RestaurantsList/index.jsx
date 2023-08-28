import { useContext, useState, useEffect } from 'react';
import Restaurantcard from '../RestaurantCard';
import { RestaurantsContext } from '../../store/RestaurantsContext';
import './index.scss';

const RestaurantsList = () => {
  const [loading, setLoading] = useState(true);

  const { restaurants } = useContext(RestaurantsContext);

  useEffect(() => {
    restaurants.length & setLoading(false);
  }, []);

  const handleFilterClick = (event) => {
    const currentElement = event.target;
    const selectedElement = document.querySelector(
      '.restaurants-list__navigate__numbers--selected'
    );
    if (currentElement !== selectedElement) {
      selectedElement &&
        selectedElement.classList.remove(
          'restaurants-list__navigate__numbers--selected'
        );
      currentElement.classList.toggle(
        'restaurants-list__navigate__numbers--selected'
      );
    }
  };
  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className='restaurants-list'>
          <div className='restaurants-list__cards'>
            {restaurants && restaurants.map((restaurant) => (
              <Restaurantcard
                key={restaurant.id}
                id={restaurant.id}
                image={restaurant.image}
                title={restaurant.title}
                rating={restaurant.rating}
                cuisines={restaurant.cuisines}
                open={restaurant.opening_hour}
                close={restaurant.closing_hour}
                cost={restaurant.cost_two}
                openDay={restaurant.opening_first_day}
                closeDay={restaurant.opening_last_day}
              />
            ))}
          </div>
          <div className='restaurants-list__navigate'>
            <button className='restaurants-list__navigate__arrows'>
              <img
                src='/icons/left-arrow.png'
                className='restaurants-list__navigate__arrow-icon'
              />
            </button>
            <button
              id='5'
              className='restaurants-list__navigate__numbers restaurants-list__navigate__numbers--selected'
              onClick={handleFilterClick}>
              1
            </button>
            <button
              id='6'
              className='restaurants-list__navigate__numbers'
              onClick={handleFilterClick}>
              2
            </button>
            <button
              id='7'
              className='restaurants-list__navigate__numbers'
              onClick={handleFilterClick}>
              3
            </button>
            <button className='restaurants-list__navigate__arrows'>
              <img
                src='/icons/right-arrow.png'
                className='restaurants-list__navigate__arrow-icon'
              />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default RestaurantsList;
