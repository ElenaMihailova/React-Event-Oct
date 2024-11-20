import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import routes from "./routes";
import {
  AddToFavouritesResponse,
  FavoritesList,
  RequestDetails,
  UserInfo,
} from "../models/ResponseTypes";
import { onQueryErrorAuth403 } from "../queryErrorsInterceptors/onQueryErrorsAuth";

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

    loadUserFavorites: builder.query<FavoritesList, undefined>({
      query: () => ({
        url: routes.userFavourites,
        method: "GET",
      }),
    }),

    addToFavourites: builder.query<AddToFavouritesResponse, string>({
      query: (requestId) => ({
        url: routes.userFavourites,
        method: "POST",
        body: {
          requestId: requestId,
        },
      }),
    }),

    removeFromFavourites: builder.query<string, string>({
      query: (requestId: string) => ({
        url: routes.userFavoritesWithID(requestId),
        method: "DELETE",
      }),
    }),

    loadUserInfo: builder.query<UserInfo, undefined>({
      query: () => ({
        url: routes.userInfo,
        method: "GET",
      }),
      onQueryStarted: onQueryErrorAuth403,
    }),

    contributeToRequest: builder.query<string, string>({
      query: (requestId: string) => ({
        url: routes.requestContribute(requestId),
        method: "POST",
      }),
    }),

    getRequestCards: builder.query<RequestDetails[], undefined>({
      query: () => ({
        url: routes.requestLoadAll,
        method: "GET",
      }),
      onQueryStarted: onQueryErrorAuth403,
    }),

    getRequestCard: builder.query<RequestDetails, string>({
      query: (requestId: string) => ({
        url: routes.requestLoadDetails(requestId),
        method: "GET",
      }),
      onQueryStarted: onQueryErrorAuth403,
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
