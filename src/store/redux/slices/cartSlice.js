import { createSlice } from '@reduxjs/toolkit';
import toast from '../../../utils/toast/Toast';

const initialState = {
  products: [],
  payment: 0,
  userEmail: localStorage.getItem('email'),
  restaurantId: '',
  delivery_address: {},
  type: 'DELIVERY',
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    postProduct: (state, { payload }) => {
      const { product, restaurantId } = payload;

      state.restaurantId = state.restaurantId
        ? state.restaurantId
        : restaurantId;

      if (state.restaurantId == restaurantId) {
        state.products.push({
          ...product,
          quantity: 1,
        });

        let total = 0;

        state.products.forEach(
          (product) => (total += product.price * product.quantity)
        );

        state.payment = total;

        return state;
      } else {
        toast.fire({
          icon: 'error',
          title: 'You have selected products from another restaurant',
        });
      }
    },

    updateProduct: (state, { payload }) => {
      state.products.map((product) => {
        product.id == payload.id
          ? {
              ...product,
              quantity: (product.quantity += payload.quantity),
            }
          : product;
      });

      state.products = state.products.filter(
        (product) => product.quantity != 0
      );

      let total = 0;

      state.products.forEach(
        (product) => (total += product.price * product.quantity)
      );

      state.payment = total;

      if (state.products.length == 0) {
        state.restaurantId = initialState.restaurantId;
      }
    },

    clearCart: (state) => {
      state = initialState;
      return state;
    },

    updateAddress: (state, { payload }) => {
      state.delivery_address = payload;
    },
  },
});

export const selectCart = (state) => state.cart;
export const selectProducts = (state) => state.cart.products;
export const selectPayment = (state) => state.cart.payment;

export const {
  postProduct,
  updateProduct,
  deleteProduct,
  clearCart,
  updateAddress,
} = cartSlice.actions;

export default cartSlice.reducer;
