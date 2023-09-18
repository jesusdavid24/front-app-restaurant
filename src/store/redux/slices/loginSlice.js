import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { login } from "../../../api/login";

const token = localStorage.getItem('token')
  ? localStorage.getItem('token')
  : null

const initialState = {
  data: {},
  error: null,
  token,
  status: 'idle'
}

export const setLogin = createAsyncThunk(
  'auth/setLogin',
  async(form) => {
    const  data  = await login(form);
    return data;
  }
);

const loginSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(setLogin.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(setLogin.fulfilled, (state, { payload: { newUser, token } }) => {
        state.status = 'idle',
        state.data = newUser,
        state.token = token
      })
      .addCase(setLogin.rejected, (state, { error }) => {
        state.status = 'failed',
        state.error = error.message
      })
  }
})

export const authLogin = state => state.login;

export default loginSlice.reducer;
