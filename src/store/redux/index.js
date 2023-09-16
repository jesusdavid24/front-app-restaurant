import { configureStore } from '@reduxjs/toolkit';

import cartReducer from './slices/cartSlice';
import loginReducer from './slices/loginSlice';
import bookingReducer from './slices/bookingSlice';


const store = configureStore({
  reducer: {
    cart: cartReducer,
    login: loginReducer,
    booking: bookingReducer,
  },
});

export default store;
