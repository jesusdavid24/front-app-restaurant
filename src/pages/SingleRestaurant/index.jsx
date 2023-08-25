import RestaurantSlider from '../../components/RestaurantSlider';
import RestaurantOptions from '../../components/RestaurantOptions';
import OrderOnline from '../../components/OrderOnline';
import Overview from '../../components/Overview';
import Gallery from '../../components/Gallery';
import MapBox from '../../components/MapBox';
import Booking from '../../components/Booking';
import Reviews from '../../components/Reviews';
import RestaurantsCarousel from '../../components/RestaurantCarousel';
import Cart from '../../components/Cart';
import AlwaysFirst from '../../components/AlwaysFirst';
import { RestaurantsProvider } from '../../store/RestaurantsContext';
import { useLoaderData } from 'react-router-dom';
import { fetchRestaurantById } from '../../api/restaurants';
import './index.scss';

const SingleRestaurant = () => {
  const { restaurant } = useLoaderData();
  const { latitude, longitude } = restaurant;
  const coordinates = [latitude, longitude];

  return (
    <RestaurantsProvider>
      <div className='single-restaurant'>
        <RestaurantSlider restaurant={restaurant} />
        <div className='single-restaurant__principal'>
          <div className='single-restaurant__principal__option-selection'>
            <RestaurantOptions />
            <div className='single-restaurant__principal__options-box'>
              <div
                id='order'
                className='single-restaurant__principal__options-box__election'>
                <OrderOnline />
              </div>
              <div
                id='overview'
                className='single-restaurant__principal__options-box__election single-restaurant__principal__options-box__election--inactive'>
                <Overview />
              </div>

              <div
                id='gallery'
                className='single-restaurant__principal__options-box__election single-restaurant__principal__options-box__election--inactive'>
                <Gallery />
              </div>
              <div
                id='location'
                className='single-restaurant__principal__options-box__election single-restaurant__principal__options-box__election--inactive'>
                <div className='single-restaurant__principal__options-box__map'>
                  <MapBox coordinates={coordinates} />
                </div>
              </div>
              <div
                id='booking'
                className='single-restaurant__principal__options-box__election single-restaurant__principal__options-box__election--inactive'>
                <Booking />
              </div>
              <div
                id='reviews'
                className='single-restaurant__principal__options-box__election single-restaurant__principal__options-box__election--inactive'>
                <Reviews />
              </div>
            </div>
            <div className='single-restaurant__principal__carousel'>
              <RestaurantsCarousel />
            </div>
          </div>
          <div className='single-restaurant__principal__cart'>
            <div className='single-restaurant__principal__cart__sticky'>
              <div className='single-restaurant__principal__cart__items'>
                <Cart />
              </div>
              <div className='single-restaurant__principal__offers'>
                <AlwaysFirst />
              </div>
            </div>
          </div>
        </div>
      </div>
    </RestaurantsProvider>
  );
};

export default SingleRestaurant;

export const loaderSingleRestaurant = async ({ params }) => {
  const { id } = params;
  const data = await fetchRestaurantById(id);
  return { restaurant: data };
};
