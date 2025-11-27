import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: localStorage.getItem("cartitem")
    ? JSON.parse(localStorage.getItem("cartitem"))
    : [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const cartItemid = action.payload.id;
      const findItem = state.value.findIndex(
        (product) => product.id == cartItemid
      );

      if (findItem >= 0) {
        state.value[findItem].quantity += 1;
        localStorage.setItem("cartitem", JSON.stringify(state.value));
      } else {
        state.value.push({...action.payload, quantity: 1});
        localStorage.setItem("cartitem", JSON.stringify(state.value));
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
