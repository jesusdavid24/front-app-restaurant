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

  useEffect(() => {
    fetchRestaurants(queryParams).then((res) => {
      setRestaurants(res.data);
      setRestaurantsLength(res.length);
      setAllRestaurants(res.allRestaurants);
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
    console.log(queryParams);
  };

  return (
    <RestaurantsContext.Provider
      value={{
        restaurants,
        restaurantsLength,
        allRestaurants,
        queryParamsHandler,
        limit,
      }}>
      {children}
    </RestaurantsContext.Provider>
  );
};
