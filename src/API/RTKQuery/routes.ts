const apiPath = "https://natticharity.eveloth.ru";

export default {
  apiPath,
  auth: "/api/auth",
  userFavourites: "/api/user/favourites",
  userFavoritesWithID: (id: string): string => `/api/user/favourites/${id}`,
  userInfo: "api/user",
  requestContribute: (id: string): string => `api/request/${id}/contribution`,
  requestLoadDetails: (id: string): string => `api/request/${id}`,
  requestLoadAll: (id: string): string => `api/request`,
};
