import axios from "axios";

const URL = `${import.meta.env.VITE_BASE_URL}`;

export const getRoles = async () => {
  try {
    const { data } = await axios.get(`${URL}/roles`)
    return data;
  } catch (error) {
    console.log(error)
    return [];
  }
}
