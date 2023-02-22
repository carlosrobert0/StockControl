import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'product',
  initialState: {
    products: [
      {
        id: '',
        name: '',
        price: 0,
        quantity: 0,
        category: '',
        description: ''
      }
    ],
    product: null
  },
  reducers: {
    addProduct: (state, { payload }) => {
      const id = String(new Date().getTime())

      const newProduct: any = {
        id,
        name: payload.name,
        price: payload.price,
        quantity: payload.quantity,
        category: payload.category,
        description: payload.description
      }

      state.products.push(newProduct);
    },
    deleteProduct: (state, { payload }) => {
      state.products = state.products.filter(product => product.id !== payload);
      state.product = null;
    },
    updateProduct: (state, { payload }) => {
      const index = state.products.findIndex(product => product.id === payload.id);
      console.log(payload.id)
      console.log(index)
      if (index !== -1) {
        state.products[index] = payload;
        state.product = payload;

        console.log(state.products)
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