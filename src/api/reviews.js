import axios from 'axios';
import errorHandler from '../utils/errorHandler'

const URL = `${import.meta.env.VITE_BASE_URL}`;

export const fetchReviews = async (_, res) => {
  try {
    const { data } = await axios.get(`${URL}/reviews`);
    return data;
  } catch(error) {
    return res.status(422).json({
      "error": [errorHandler(error), '[]'].join(' ')
    });
  }
};
