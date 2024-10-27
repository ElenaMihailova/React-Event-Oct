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
        url: routes.auth,
        method: "POST",
        body: user,
      }),
    }),

    loadUserFavorites: builder.query({
      query: () => ({
        url: routes.userFavourites,
        method: "GET",
      }),
    }),

    addToFavourites: builder.query({
      query: () => ({
        url: routes.userFavourites,
        method: "POST",
      }),
    }),

    removeFromFavourites: builder.query({
      query: (requestId: string) => ({
        url: routes.userFavoritesWithID(requestId),
        method: "DELETE",
      }),
    }),

    loadUserInfo: builder.query({
      query: () => ({
        url: routes.userInfo,
        method: "GET",
      }),
    }),

    contributeToRequest: builder.query({
      query: (requestId: string) => ({
        url: routes.requestContribute(requestId),
        method: "POST",
      }),
    }),

    getRequestCards: builder.query({
      query: () => ({
        url: routes.requestLoadAll,
        method: "GET",
      }),
    }),

    getRequestCard: builder.query({
      query: (requestId: string) => ({
        url: routes.requestLoadDetails(requestId),
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetAuthTokenMutation,
  useGetRequestCardsQuery,
  useGetRequestCardQuery,
  useContributeToRequestQuery,
  useAddToFavouritesQuery,
  useLoadUserInfoQuery,
  useLoadUserFavoritesQuery,
  useRemoveFromFavouritesQuery,
} = api;
