import axios from 'axios';

const URL = `${import.meta.env.VITE_BASE_URL}`;

export const fetchUsers = async () => {
  try {
    const { data } = await axios.get(`${URL}/api/createUser`);
    return data;
  } catch ({ message }) {
    return message;
  }
};
