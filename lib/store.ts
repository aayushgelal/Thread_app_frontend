import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../app/redux/UserSlice";

export default configureStore({
  reducer: {
    user: userReducer,
  },
});
