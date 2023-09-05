import axios from 'axios';
import errorHandler from '../utils/errorHandler';

const URL = `${import.meta.env.VITE_BASE_URL}`;

export const fetchRestaurants = async () => {
  try {
    const { data } = await axios.get(`${URL}/restaurants`);
    return data;
  } catch(error) {
    return res.status(422).json({
      "error": [errorHandler(error), '[]'].join(' ')
    });
  }
};

export const fetchRestaurantById = async (id) => {
  try {
    const { data } = await axios.get(`${URL}/restaurants/${id}`);
    return data;
  } catch(error) {
    return res.status(422).json({
      "error": [errorHandler(error), '[]'].join(' ')
    });
  }
};
