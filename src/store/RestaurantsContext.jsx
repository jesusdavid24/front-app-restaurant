import { useState, createContext, useEffect } from 'react';
import { fetchRestaurants } from '../api/restaurants';

export const RestaurantsContext = createContext();

export const RestaurantsProvider = ({ children }) => {
  const [queryParams, setQueryParams] = useState({
    filter: 'all',
    page: 1,
    limit: 12,
  });
  const [restaurants, setRestaurants] = useState([]);
  const [restaurantsLength, setRestaurantsLength] = useState([0]);

  useEffect(() => {
    fetchRestaurants(queryParams).then((res) => {
      setRestaurants(res.data);
      setRestaurantsLength(res.length);
    });
  }, [queryParams]);

  const queryParamsHandler = (name, id) => {
    setQueryParams({
      ...queryParams,
      [name]: id,
      limit: 12,
    });

    name == 'filter' &&
      setQueryParams({
        ...queryParams,
        [name]: id,
        limit: 12,
        page: 1,
      });
  };

  return (
    <RestaurantsContext.Provider
      value={{
        restaurants,
        restaurantsLength,
        queryParamsHandler,
      }}>
      {children}
    </RestaurantsContext.Provider>
  );
};
