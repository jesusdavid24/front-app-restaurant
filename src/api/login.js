import axios from "axios";

const URL = `${import.meta.env.VITE_BASE_URL}`;

export const createUsers = async (form) => {
  try {
    const { data } = await axios.post(`${URL}/createUser`, form)
    return data
  } catch (error) {
    console.log(error)
    return [];
  }
}

export const login = async (form) => {
  try {
    const { data } = await axios.post(`${URL}/auth/local/login`, form)
    return data
  } catch (error) {
    console.log(error)
    return [];
  }
}



