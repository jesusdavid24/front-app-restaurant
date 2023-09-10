import axios from "axios";
import errorHandler from '../utils/errorHandler';


const URL = `${import.meta.env.VITE_BASE_URL}`;

export const login = async (form) => {
  try {
    const { data } = await axios.post(`${URL}/auth/local/login`, form)
    return data
  } catch(error) {
    return res.status(422).json({
      "error": [errorHandler(error), '[]'].join(' ')
    });
  }
}



