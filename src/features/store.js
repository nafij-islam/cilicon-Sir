import { configureStore } from '@reduxjs/toolkit'
import cartReducers from '../features/addtocart'

export const store = configureStore({
  reducer: {
    cartStore:cartReducers
  },
})