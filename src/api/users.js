import axios from 'axios';

const URL = `${import.meta.env.VITE_BASE_URL}`;

export const fetchUsers = async () => {
  const config = {
    headers:{
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  };

  try {
    const { data } = await axios.get(`${URL}/users`, config);
    return data;
  } catch(error) {
    console.log(error)
    return []
  };

};

export const createUsers = async (form) => {
  try {
    const { data } = await axios.post(`${URL}/users`, form);
    return data;
  } catch (error) {
    return error.message;
  }
};

export const updateUsers = async (id) => {
  try {
    const { data } = await axios.put(`${URL}/users`, id);
    return data;
  } catch (error) {
    return error.message;
  }
};

export const deleteUsers = async (id) => {
  try {
    const { data } = await axios.delete(`${URL}/users`, id);
    return data;
  } catch (error) {
    return error.message;
  }
};
