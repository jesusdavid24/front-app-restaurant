import axios from 'axios';

const URL = `${import.meta.env.VITE_BASE_URL}`;

export const fetchUsers = async () => {
  try {
    const { data } = await axios.get(`${URL}/createUser`);
    return data;
  } catch(error) {
    return res.status(422).json({
      "error": [errorHandler(error), '[]'].join(' ')
    });
  }
};
