import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { api } from "./api";
import isLoggedIn from "../slices/isLoggedInSlice";

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    isLoggedIn: isLoggedIn,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Отключаем проверку сериализуемости
    }).concat(api.middleware),
});

setupListeners(store.dispatch);

export default store;
