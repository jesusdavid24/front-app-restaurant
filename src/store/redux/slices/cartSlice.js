import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    postProduct: (state, { payload }) => {
      state.products.push({
        ...payload,
        quantity: 1,
      });
      return state;
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
    },

    deleteProduct: (state, { payload }) => {
      const productExists = state.products.find(
        (product) => product.id === payload.id
      );
      if (productExists) {
        state.products = state.products.filter(
          (product) => product.id != payload.id
        );

        return state;
      }
    },

    clearCar: (state) => {
      state = initialState;
      return state;
    },
  },
});

export const selectProducts = (state) => state.cart.products;

export const { postProduct, updateProduct, deleteProduct, clearCar } =
  cartSlice.actions;

export default cartSlice.reducer;
