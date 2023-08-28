import axios from 'axios';

const URL = `${import.meta.env.VITE_BASE_URL}`;

export const fetchReviews = async () => {
  try {
    const { data } = await axios.get(`${URL}/api/reviews`);
    return data;
  } catch ({ message }) {
    return message;
  }
};
