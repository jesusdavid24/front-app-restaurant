import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  restaurantId: '',
  userEmail: localStorage.getItem('email'),
  booking_firstName: '',
  booking_lastName: '',
  booking_email: '',
  booking_phone: '',
  booking_date: '',
  booking_persons: '',
  delivery_products: [{}],
  type: 'BOOKING',
};

export const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    postBooking: (state, { payload }) => {
      state = { ...state, ...payload };

      return state;
    },
    postDate: (state, { payload }) => {
      state.booking_date = payload;
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
