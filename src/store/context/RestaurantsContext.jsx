import { useState, createContext, useEffect } from 'react';
import { fetchRestaurants } from '../../api/restaurants';

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
  const [responseCopy, setResponseCopy] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    (async function getRestaurants() {
      try {
        const response = await fetchRestaurants(queryParams);
        setRestaurants(response.data);
        setRestaurantsLength(response.length);
        setAllRestaurants(response.allRestaurants);
        setResponseCopy(response);
      } catch (error) {
        setError(error.message);
      }
    })();
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
    } else if (!search) {
      setRestaurants(responseCopy.data);
      setRestaurantsLength(responseCopy.length);
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
        error,
      }}>
      {children}
    </RestaurantsContext.Provider>
  );
};
