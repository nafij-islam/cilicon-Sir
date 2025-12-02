import { sucessToast } from "@/helpers/Toast";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: localStorage.getItem("cartitem")
    ? JSON.parse(localStorage.getItem("cartitem"))
    : [],
  totalQuantity :0,
  totalPrice:0
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
        state.value.push({ ...action.payload, quantity: 1 });
        localStorage.setItem("cartitem", JSON.stringify(state.value));
   
      }
    },
    increment: (state, action) => {
      const idx = state.value.findIndex(
        (cartitem) => cartitem.id === action.payload
      );
      if (idx > -1) {
        state.value[idx].quantity += 1;
        localStorage.setItem("cartitem", JSON.stringify(state.value));
        sucessToast(`${state.value[idx].title} increase quantity`);
   
      }
    },
    decrement: (state, action) => {
  
      const idx = state.value.findIndex(
        (cartitem) => cartitem.id === action.payload
      );
      if (idx > -1 && state.value[idx].quantity > 1) {
        state.value[idx].quantity -= 1;
        localStorage.setItem("cartitem", JSON.stringify(state.value));
        sucessToast(`${state.value[idx].title} decrease quantity`);
     
      }
    },
    remove: (state, action) => {
      const dueitem = state.value.filter((item) => item.id != action.payload);

      state.value = dueitem;

      localStorage.setItem("cartitem", JSON.stringify(state.value));
      sucessToast(`remove  sucesfully`);
    },
    getTotal: (state) => {
     const finalOutput =  state.value.reduce(
        (init, item) => {
          const { price, quantity } = item;
          let itemTotalPrice = Math.round(price * quantity);
          init.totalQuantity += quantity;
          init.totalPrice += itemTotalPrice;
          return init;
        },
        {
          totalQuantity: 0,
          totalPrice: 0,
        }
      );
      state.totalQuantity =finalOutput.totalQuantity
      state.totalPrice = finalOutput.totalPrice

    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, increment, decrement, remove, getTotal } =
  cartSlice.actions;

export default cartSlice.reducer;
