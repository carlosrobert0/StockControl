import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
  name: 'product',
  initialState: {
    name: '',
    price: '',
    category: '',
    description: ''
  },
  reducers: {
    updateProduct(state, { payload }) {
      return {
        ...state,
        name: payload.name,
        price: payload.price,
        category: payload.category,
        description: payload.description
      }
    },
  }
})

export const { updateProduct } = slice.actions

export const selectProduct = (state: any) => state.product

export default slice.reducer