import { configureStore } from "@reduxjs/toolkit";
import { loadStateFromLocalStorage, saveStateToLocalStorage } from "../util/localStorage";

import productReducer from './productSlice'

const preloadedState  = loadStateFromLocalStorage()

const store = configureStore({
  reducer: {
    product: productReducer
  },
  preloadedState 
})

store.subscribe(() => {
  saveStateToLocalStorage(store.getState())
})

export default store