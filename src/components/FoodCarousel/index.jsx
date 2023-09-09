import { Carousel } from '@mantine/carousel';
import { Link } from 'react-router-dom';
import { cuisines } from '../../assets/data/cuisines';
import './index.scss';

const FoodCarousel = ({ restaurants, limit }) => {
  return (
    <Carousel
      align='start'
      withControls={false}
      dragFree
      loop
      className='carousel'>
      {cuisines.map((item) => (
        <Carousel.Slide key={item.id}>
          <Link
            to={`restaurants?filter=all&page=1&limit=${limit}&cuisine=${item.cuisine}`}
            className='carousel__link'>
            <div className='carousel__restaurant'>
              <img src={item.image} className='carousel__restaurant__image' />
              <h2 className='carousel__restaurant__cuisine'>{item.cuisine}</h2>
              <h2 className='carousel__restaurant__number'>
                {
                  restaurants.filter((restaurant) =>
                    restaurant.cuisines.includes(item.cuisine)
                      ? restaurant
                      : null
                  ).length
                }{' '}
                Restaurants
              </h2>
            </div>
          </Link>
        </Carousel.Slide>
      ))}
    </Carousel>
  );
};

export default FoodCarousel;
