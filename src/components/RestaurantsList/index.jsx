import { useContext } from 'react';
import { RestaurantsContext } from '../../store/RestaurantsContext';
import Restaurantcard from '../RestaurantCard';
import Pagination from '../Pagination';
import './index.scss';

const RestaurantsList = ({ restaurants }) => {
  const { restaurantsLength } = useContext(RestaurantsContext);

  return (
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
        <Pagination restaurantsLength={restaurantsLength} />
      </div>
    </div>
  );
};
export default RestaurantsList;
