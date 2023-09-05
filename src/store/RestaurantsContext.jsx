import { useState, createContext, useEffect } from 'react';
import { fetchRestaurants } from '../api/restaurants';

export const RestaurantsContext = createContext();

export const RestaurantsProvider = ({ children }) => {
  const [limit, setLimit] = useState(12);

  const [queryParams, setQueryParams] = useState({
    filter: '',
    page: 1,
    limit,
    cuisine: '',
    star: '',
    delivery: '',
  });
  const [restaurants, setRestaurants] = useState([]);
  const [restaurantsLength, setRestaurantsLength] = useState([0]);

  useEffect(() => {
    fetchRestaurants(queryParams).then((res) => {
      setRestaurants(res.data);
      setRestaurantsLength(res.length);
    });
  }, [queryParams]);

  const queryParamsHandler = (filter, page, cuisine, star, delivery) => {
    setQueryParams({
      ...queryParams,
      filter,
      page,
      cuisine,
      star,
      delivery,
    });
  };

  return (
    <RestaurantsContext.Provider
      value={{
        restaurants,
        restaurantsLength,
        queryParamsHandler,
        queryParams,
        limit,
      }}>
      {children}
    </RestaurantsContext.Provider>
  );
};
