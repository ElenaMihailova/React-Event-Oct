import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { api } from "./api";
import isLoggedIn from "../slices/isLoggedInSlice";
import requestId from "../slices/requestIdSlice";

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    isLoggedIn,
    requestId,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Отключаем проверку сериализуемости
    }).concat(api.middleware),
});

setupListeners(store.dispatch);

export default store;
