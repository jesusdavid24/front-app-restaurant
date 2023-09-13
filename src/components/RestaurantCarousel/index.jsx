import { useContext, useState, useEffect } from 'react';
import Restaurantcard from '../RestaurantCard';
import { Carousel } from '@mantine/carousel';
import { RestaurantsContext } from '../../store/context/RestaurantsContext';
import './index.scss';

const RestaurantsCarousel = () => {
  const [loading, setLoading] = useState(true);

  const { allRestaurants } = useContext(RestaurantsContext);

  useEffect(() => {
    allRestaurants.length & setLoading(false);
  }, []);

  return (
    <div className='order-restaurants'>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <Carousel
          align='end'
          withControls={false}
          loop
          className='order-restaurants__carousel'>
          {allRestaurants.map((restaurant) => {
            return (
              <Carousel.Slide
                key={restaurant.id}
                className='order-restaurants__carousel__slide'>
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
              </Carousel.Slide>
            );
          })}
        </Carousel>
      )}
    </div>
  );
};
export default RestaurantsCarousel;
