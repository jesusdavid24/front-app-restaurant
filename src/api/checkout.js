import axios from 'axios';
import { errorHandler } from '../utils/errorHandler';

const URL = `${import.meta.env.VITE_BASE_URL}`;

export const postCheckout = async (form) => {
  try {
    const { data } = await axios.post(`${URL}/checkout`, form);
    return data;
  } catch (error) {
    const message = errorHandler(error);
    return message;
  }
};
