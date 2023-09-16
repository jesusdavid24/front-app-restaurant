import axios from 'axios';

const URL = `${import.meta.env.VITE_BASE_URL}`;

const config = {
  headers: {
    'Content-Type': 'application/json',
  },
}

export const login = async ({email, password}) => {
  try {
    const { data } = await axios.post(`${URL}/auth/local/login`,
    { email, password}, config)


    localStorage.setItem('token', data.token)
    localStorage.setItem('fullName', data.newUser.fullName)
    localStorage.setItem('email', data.newUser.email)

    return data;

  } catch(error) {
    console.log(error)
    throw new Error('Ocurrio un error')
  };
};
