import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
  name: 'product',
  initialState: {
    products: [
      {
        id: '',
        name: '',
        price: '',
        category: '',
        description: ''
      }
    ],
    product: null
  },
  reducers: {
    addProduct: (state, { payload }) => {
      state.products.push(payload);
    },
    deleteProduct: (state, { payload }) => {
      state.products = state.products.filter(product => product.id !== payload);
      state.product = null;
    },
    updateProduct: (state, { payload }) => {
      const index = state.products.findIndex(product => product.id === payload.id);
      if (index !== -1) {
        state.products[index] = payload;
        state.product = payload;
      }
    },
    selectedProduct: (state, { payload }) => {
      state.product = payload;
    },
  }
})

export const { addProduct, deleteProduct, updateProduct, selectedProduct } = slice.actions

export const selectProduct = (state: any) => state.product

export const selectProducts = (state: any) => state.product.products

export default slice.reducer