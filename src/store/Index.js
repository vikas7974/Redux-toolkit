import { configureStore } from "@reduxjs/toolkit";
import users from "./slices/UserSlice"

const store = configureStore({
  reducer: {
    poo: users,
  },
});
export default store;