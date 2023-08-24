import { useState, createContext, useEffect } from 'react';
import { fetchRestaurants } from '../api/restaurants';

export const RestaurantsContext = createContext();

export const RestaurantsProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetchRestaurants().then((res) => setRestaurants(res));
  }, []);

  const restaurantsFilterHandler = async (filter) => {
    const data = await fetchRestaurants();

    if (filter == 'all') {
      setRestaurants(data);
    } else if (filter == 'popular') {
      const popularRestaurants = data.filter(
        (restaurant) => restaurant.rating >= 4
      );

      setRestaurants(popularRestaurants);
    } else if (filter == 'trend') {
      const trendingRestaurants = data.filter(
        (restaurant) => restaurant.trending
      );

      setRestaurants(trendingRestaurants);
    } else if (filter == 'latest') {
      const compareTime = new Date('2023-08-23T14:15:00');

      const recentRestaurants = data.filter((restaurant) => {
        const createdAtTime = new Date(restaurant.createdAt);
        return createdAtTime > compareTime;
      });

      setRestaurants(recentRestaurants);
    }
  };

  return (
    <RestaurantsContext.Provider
      value={{
        restaurants,
        restaurantsFilterHandler,
      }}>
      {children}
    </RestaurantsContext.Provider>
  );
};
