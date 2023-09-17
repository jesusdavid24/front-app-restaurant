import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import
{
  fetchUsers,
  createUsers,
  updateUsers,
  deleteUsers,
} from "../../../api/users";

const initialState = {
  users: [],
  data: {},
  updateData: {},
  // deleteUsers: {},
  error: null,
  status: 'idle'
};

export const getUsers = createAsyncThunk(
  'user/getUsers',
  async() => {
    const users = await fetchUsers();
    return users
  }
);

export const postUsers = createAsyncThunk(
  'user/postUsers',
  async(form) => {
    const data = await createUsers(form);
    return data;
  }
);

export const updateUser = createAsyncThunk(
  'user/updateUsers',
  async({id, user}) => {
    const updateData = await updateUsers(id, user);
    return updateData;
  }
);

// export const deleteUsers = createAsyncThunk(
//   'user/deleteUsers',
//   async(id) => {
//     const deleteUsers = await deleteUsers(id);
//     return deleteUsers;
//   }
// );

const usersSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(getUsers.fulfilled, (state, { payload }) => {
        state.status = 'idle',
        state.users = payload
      })
      .addCase(getUsers.rejected, (state, { error }) => {
        state.status = 'failed',
        state.error = error.message
      })
      .addCase(postUsers.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(postUsers.fulfilled, (state, { payload }) => {
        state.status = 'idle',
        state.data = payload
      })
      .addCase(postUsers.rejected, (state, { error }) => {
        state.status = 'failed',
        state.error = error.message
      })
      .addCase(updateUser.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(updateUser.fulfilled, (state, { payload }) => {
        state.status = 'idle',
        state.updateData = payload
      })
      .addCase(updateUser.rejected, (state, { error }) => {
        state.status = 'failed',
        state.error = error.message
      })
  }
});

export const selectUsers = state => state.users;
export const selectPostUsers = state => state.users;
export const selectUpdateUsers = state => state.users;

export default usersSlice.reducer;
