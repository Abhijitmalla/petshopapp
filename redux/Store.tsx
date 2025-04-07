import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";

export const store = configureStore({
  reducer: {
    cart: CartSlice,  // this sets the state as state.cart
  },
});
