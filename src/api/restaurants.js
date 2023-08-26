import axios from 'axios';

const URL = `${import.meta.env.VITE_RESTAURANTS_BASE_URL}`;

export const fetchRestaurants = async () => {
  try {
    const { data } = await axios.get(URL);
    return data;
  } catch ({ message }) {
    return message;
  }
};

export const fetchRestaurantById = async (id) => {
  try {
    const { data } = await axios.get(`${URL}/${id}`);
    return data;
  } catch ({ message }) {
    return message;
  }
};
