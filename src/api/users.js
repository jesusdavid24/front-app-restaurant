import axios from 'axios';
import errorHandler from '../utils/errorHandler'

const URL = `${import.meta.env.VITE_BASE_URL}`;

export const fetchUsers = async () => {
  try {
    const { data } = await axios.get(`${URL}/users`);
    return data;
  } catch(error) {
    return res.status(422).json({
      "error": [errorHandler(error), '[]'].join(' ')
    });
  };
};

export const createUsers = async (form) => {
  try {
    const { data } = await axios.post(`${URL}/users`, form);
    return data;
  } catch(error) {
    return res.status(422).json({
      "error": [errorHandler(error), '[]'].join(' ')
    });
  };
};

export const updateUsers = async (id) => {
  try {
    const { data } = await axios.put(`${URL}/users`, id);
    return data;
  } catch(error) {
    return res.status(422).json({
      "error": [errorHandler(error), '[]'].join(' ')
    });
  };
};

export const deleteUsers = async (id) => {
  try {
    const { data } = await axios.delete(`${URL}/users`, id);
    return data;
  } catch(error) {
    return res.status(422).json({
      "error": [errorHandler(error), '[]'].join(' ')
    });
  };
};
