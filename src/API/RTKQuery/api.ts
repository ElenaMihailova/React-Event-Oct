import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import routes from "./routes";
import {
  AddToFavouritesResponse,
  ErrorRequest403,
  FavoritesList,
  RequestDetails,
  UserInfo,
} from "../models/ResponseTypes";
import { toast } from "react-toastify";

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
      async onQueryStarted(args, { queryFulfilled }): Promise<void> {
        try { 
          await queryFulfilled;
        } catch (err: unknown) {
          const error = (err as ErrorRequest403).error;
          if (error.data.status === 403) {
            localStorage.removeItem("userId");
            toast.error("Ошибка авторизации! Перейдите на страницу авторизации");
          }
        }
      }
    }),

    getRequestCard: builder.query<RequestDetails, string>({
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
