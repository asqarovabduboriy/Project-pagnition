import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api";
import  authReducer  from "./slice/authSlice";

export const store = configureStore({
  reducer: {
    aouth: authReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(api.middleware),
});