import axios from 'axios';

const URL = `${import.meta.env.VITE_USERS_BASE_URL}`;

export const fetchUsers = async () => {
  try {
    const { data } = await axios.get(URL);
    return data;
  } catch ({ message }) {
    return message;
  }
};
