import axios from "axios";

const URL = `${import.meta.env.VITE_BASE_URL}`;

export const postCheckout = async (form) => {
  try {
    console.log(form);
    const { data } = await axios.post(`${URL}/checkout`, form);
    return data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};
