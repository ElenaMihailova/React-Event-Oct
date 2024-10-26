import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import routes from "./routes";

export const api = createApi({
  reducerPath: "queryApi",
  baseQuery: fetchBaseQuery({
    baseUrl: routes.apiPath,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("userId");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getAuthToken: builder.mutation({
      query: (user) => ({
        url: routes.loginPath,
        method: "POST",
        body: user,
      }),
    }),
  }),
});

export const { useGetAuthTokenMutation } = api;
