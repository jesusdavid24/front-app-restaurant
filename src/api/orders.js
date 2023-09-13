import axios from 'axios';

const URL = `${import.meta.env.VITE_BASE_URL}`;

export const createOrder = async (order) => {
  try {
    const { data } = await axios.post(`${URL}/orders`, order);
    return data;
  } catch(error) {
    console.log(error)
    return error.message
  };
};
