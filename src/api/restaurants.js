import axios from 'axios';

const URL = `${import.meta.env.VITE_BASE_URL}`;

export const fetchRestaurants = async (queryParams) => {
  const params = {
    ...queryParams,
  };

  try {
    const { data } = await axios.get(`${URL}/restaurants`, { params });
    return data;
  } catch(error) {
    console.log(error)
    return error.message
  };
};

export const fetchRestaurantById = async (id) => {
  try {
    const { data } = await axios.get(`${URL}/restaurants/${id}`);
    return data;
  } catch(error) {
    console.log(error)
    return error.message
  };
};
