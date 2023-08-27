import axios from 'axios';

const URL = `${import.meta.env.VITE_REVIEWS_BASE_URL}`;

export const fetchReviews = async () => {
  try {
    const { data } = await axios.get(URL);
    return data;
  } catch ({ message }) {
    return message;
  }
};
