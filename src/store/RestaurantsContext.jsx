import { useState, createContext, useEffect } from 'react';
import { fetchRestaurants } from '../api/restaurants';

export const RestaurantsContext = createContext();

export const RestaurantsProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(12);

  const [queryParams, setQueryParams] = useState({
    filter: 'all',
    page: currentPage,
    limit,
  });
  const [restaurants, setRestaurants] = useState([]);
  const [restaurantsLength, setRestaurantsLength] = useState([0]);

  useEffect(() => {
    fetchRestaurants(queryParams).then((res) => {
      setRestaurants(res.data);
      setRestaurantsLength(res.length);
    });
  }, [queryParams, currentPage]);

  const queryParamsHandler = (name, id) => {
    const actions = {
      next: () => {
        setCurrentPage(currentPage + 1);
        setQueryParams({
          ...queryParams,
          page: currentPage + 1,
          limit,
        });
        console.log('next', currentPage, queryParams);
      },

      prev: () => {
        setCurrentPage(currentPage - 1);
        setQueryParams({
          ...queryParams,
          page: currentPage - 1,
          limit,
        });
        console.log('prev', currentPage, queryParams);
      },

      page: () => {
        setCurrentPage(parseInt(id));
        setQueryParams({
          ...queryParams,
          page: parseInt(id),
          limit,
        });
        console.log('page', currentPage, queryParams);
      },

      filter: () => {
        setCurrentPage(1);
        setQueryParams({
          ...queryParams,
          [name]: id,
          limit,
          page: 1,
        });
      },
    };

    actions[name]();
  };

  return (
    <RestaurantsContext.Provider
      value={{
        restaurants,
        restaurantsLength,
        queryParamsHandler,
        currentPage,
      }}>
      {children}
    </RestaurantsContext.Provider>
  );
};
