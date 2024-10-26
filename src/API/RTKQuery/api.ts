import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import routes from "./routes";

export const api = createApi({
  reducerPath: "queryApi",
  baseQuery: fetchBaseQuery({
    baseUrl: routes.apiPath,
    prepareHeaders: (headers) => {
      const tempToken =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImU5OGU1OTJlLTQyNDMtNGMwNC05MDUwLTU5YTUwZWQwMTgzZCIsImlhdCI6MTcyOTk2Njc1NCwiZXhwIjoxNzI5OTcwMzU0fQ.IxjFRY_DNiV-B1ITuXyVOlkZHqWRFSHbbwIkoH3D_Vg";
      if (tempToken) {
        headers.set("Authorization", `Bearer ${tempToken}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getAuthToken: builder.mutation({
      query: (user) => ({
        url: routes.auth,
        method: "POST",
        body: user,
      }),
    }),
    getRequestCards: builder.query<CardData[], void>({
      query: () => ({
        url: routes.requestLoadAll,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAuthTokenMutation, useGetRequestCardsQuery } = api;
