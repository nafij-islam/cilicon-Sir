import { configureStore } from '@reduxjs/toolkit';
import cartReducers from '../features/addtocart';

export const store = configureStore({
  reducer: {
    cartStore:cartReducers
  },
})

store.subscribe(()=> {
   const state = store.getState();
  console.log(state.cartStore); 
})