import axios from "axios";

const URL = `${import.meta.env.VITE_BASE_URL}`;

export const postCheckout = async (form) => {
  try {
    const { data } = await axios.post(`${URL}/checkout`, form);
    return data;
  } catch (error) {
    return error.message;
  }
};
