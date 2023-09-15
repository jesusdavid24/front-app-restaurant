import { createSlice } from '@reduxjs/toolkit';
import toast from '../../../utils/toast/index';

const initialState = {
  restaurantId: '',
  userEmail: localStorage.getItem('email'),
  delivery_address: {},
  delivery_products: [],
  delivery_payment: 0,
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
        state.delivery_products.push({
          ...product,
          quantity: 1,
        });

        let total = 0;

        state.delivery_products.forEach(
          (product) => (total += product.price * product.quantity)
        );

        state.payment = total;

        toast.fire({
          icon: 'success',
          title: 'Product added',
        });

        return state;
      } else {
        toast.fire({
          icon: 'error',
          title: 'You have selected products from another restaurant',
        });
      }
    },

    updateProduct: (state, { payload }) => {
      state.delivery_products.map((product) => {
        product.id == payload.id
          ? {
              ...product,
              quantity: (product.quantity += payload.quantity),
            }
          : product;
      });

      state.delivery_products = state.delivery_products.filter(
        (product) => product.quantity !== 0
      );

      let total = 0;

      state.delivery_products.forEach(
        (product) => (total += product.price * product.quantity)
      );

      state.delivery_payment = total;

      if (!state.delivery_products.length) {
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
export const selectProducts = (state) => state.cart.delivery_products;
export const selectPayment = (state) => state.cart.delivery_payment;

export const {
  postProduct,
  updateProduct,
  deleteProduct,
  clearCart,
  updateAddress,
} = cartSlice.actions;

export default cartSlice.reducer;
