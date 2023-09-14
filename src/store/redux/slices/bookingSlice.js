import { createSlice } from '@reduxjs/toolkit';
import toast from '../../../utils/toast/Toast';

const initialState = {
  restaurantId: '',
  userEmail: localStorage.getItem('email'),
  firstName: '',
  lastName: '',
  bookingEmail: '',
  phone: '',
  date: '',
  persons: '',
  type: 'BOOKING',
};

export const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    postBooking: (state, { payload }) => {
      state = { ...state, ...payload };
      //   toast.fire({
      //     icon: 'success',
      //     title: 'Booking has been generated successfully',
      //   });
      return state;
    },
    postDate: (state, { payload }) => {
      state.date = payload;
    },
    postRestaurantId: (state, { payload }) => {
      state.restaurantId = payload;
    },
    clearBooking: (state) => {
      state = initialState;
      return state;
    },
  },
});

export const selectBooking = (state) => state.booking;

export const { postBooking, postDate, postRestaurantId, clearBooking } =
  bookingSlice.actions;
export default bookingSlice.reducer;
