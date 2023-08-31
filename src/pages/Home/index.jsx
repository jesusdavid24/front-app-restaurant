import { useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { RestaurantsContext } from '../../store/RestaurantsContext';
import LocationForm from '../../components/LocationForm';
import FoodCarousel from '../../components/FoodCarousel';
import Promos from '../../components/Promos';
import BookingPath from '../../components/BookingPath';
import ButtonsFilters from '../../components/ButtonsFilters';
import RestaurantsList from '../../components/RestaurantsList';
import Store from '../../components/Store';

const Home = () => {
  const location = useLocation();
  const queryParamsLocation = new URLSearchParams(location.search);

  const filter = queryParamsLocation.get('filter');
  const page = queryParamsLocation.get('page');

  const { queryParamsHandler, limit } = useContext(RestaurantsContext);

  useEffect(() => {
    queryParamsHandler(filter, page);
  }, [location]);
  return (
    <>
      <LocationForm />
      <FoodCarousel />
      <Promos />
      <BookingPath />
      <ButtonsFilters filter={filter} limit={limit} />
      <RestaurantsList actualPage='/' />
      <Store />
    </>
  );
};

export default Home;
