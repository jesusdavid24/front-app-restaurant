import axios from 'axios';
import errorHandler from '../utils/errorHandler';

const URL = `${import.meta.env.VITE_BASE_URL}`;

export const createOrder = async (order) => {
  try {
    const { data } = await axios.post(`${URL}/orders`, order);
    return data;
  } catch (error) {
    return res.status(422).json({
      error: [errorHandler(error), '[]'].join(' '),
    });
  }
};
