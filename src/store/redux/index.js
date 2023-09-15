import { configureStore } from '@reduxjs/toolkit';

import cartReducer from './slices/cartSlice';
import bookingReducer from './slices/bookingSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    booking: bookingReducer,
  },
});

export default store;
