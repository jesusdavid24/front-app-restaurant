import axios from 'axios';

const URL = `${import.meta.env.VITE_BASE_URL}`;

export const fetchReviews = async () => {
  try {
    const { data } = await axios.get(`${URL}/reviews`);

    return data;
  } catch (error) {
    return error.message;
  }
};

export const fetchReviewsByRestaurantId = async (id) => {
  try {
    const { data } = await axios.get(`${URL}/reviews/restaurant/${id}`);

    return data;
  } catch (error) {
    return error.message;
  }
};

export const createReview = async (review, token) => {
  try {
    if (!token) {
      throw new Error('Unauthorized! You have to log in first.');
    }

    const { data } = await axios.post(`${URL}/reviews`, review, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return data;
  } catch (error) {
    return error.message;
  }
};
