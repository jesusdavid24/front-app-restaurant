import axios from 'axios';

const URL = `${import.meta.env.VITE_BASE_URL}`;

export const fetchReviews = async () => {
  try {
    const { data } = await axios.get(`${URL}/reviews`);
    return data;
  } catch(error) {
    console.log(error)
    return error.message
  };
};
export const fetchReviewsByRestaurantId = async (id) => {
  try {
    const { data } = await axios.get(`${URL}/reviews/restaurant/${id}`);
    return data;
  } catch(error) {
    console.log(error)
    return error.message
  };
};
