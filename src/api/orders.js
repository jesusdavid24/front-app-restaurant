import axios from 'axios';

const URL = `${import.meta.env.VITE_BASE_URL}`;

export const createOrder = async (order, token) => {
  try {
    if (!token) {
      throw new Error('Unauthorized! You have to log in first.');
    }

    const { data } = await axios.post(`${URL}/orders`, order, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return data;
  } catch (error) {
    return error.message;
  }
};
