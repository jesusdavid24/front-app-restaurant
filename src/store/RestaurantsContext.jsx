import { useState, createContext, useEffect } from 'react';
import { fetchRestaurants } from '../api/restaurants';

export const RestaurantsContext = createContext();

export const RestaurantsProvider = ({ children }) => {
  const [limit, _] = useState(12);

  const [queryParams, setQueryParams] = useState({
    filter: 'all',
    page: 1,
    limit,
    cuisine: '',
    star: '',
    cost: '',
    delivery: '',
  });
  const [restaurants, setRestaurants] = useState([]);
  const [restaurantsLength, setRestaurantsLength] = useState([0]);
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [copy, setCopy] = useState([]);

  useEffect(() => {
    fetchRestaurants(queryParams).then((res) => {
      setRestaurants(res.data);
      setRestaurantsLength(res.length);
      setAllRestaurants(res.allRestaurants);
      setCopy(res.data);
    });
  }, [queryParams]);

  const queryParamsHandler = (filter, page, cuisine, star, cost, delivery) => {
    setQueryParams({
      ...queryParams,
      filter,
      page,
      cuisine,
      star,
      cost,
      delivery,
    });
  };

  const restaurantsHandler = (search) => {
    if (search) {
      const searchRestaurants = allRestaurants.filter((restaurant) =>
        restaurant.title.toLowerCase().includes(search)
      );

      setRestaurants(searchRestaurants);
      setRestaurantsLength(searchRestaurants.length);
    } else if (search == false) {
      setRestaurants(copy);
      setRestaurantsLength(allRestaurants.length);
    }
  };

  return (
    <RestaurantsContext.Provider
      value={{
        restaurants,
        restaurantsHandler,
        restaurantsLength,
        allRestaurants,
        queryParamsHandler,
        limit,
      }}>
      {children}
    </RestaurantsContext.Provider>
  );
};
