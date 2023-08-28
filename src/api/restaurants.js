import axios from 'axios';

const URL = `${import.meta.env.VITE_BASE_URL}`;

export const fetchRestaurants = async () => {
  try {
    const { data } = await axios.get(`${URL}/restaurants`);
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const fetchRestaurantById = async (id) => {
  try {
    const { data } = await axios.get(`${URL}/restaurants/${id}`);
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
