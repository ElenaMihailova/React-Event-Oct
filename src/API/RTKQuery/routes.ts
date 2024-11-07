const apiPath = "https://yatsenko.site/react-event-server/";

export default {
  apiPath,
  auth: "/api/auth",
  userFavourites: "/api/user/favourites",
  userFavoritesWithID: (id: string): string => `/api/user/favourites/${id}`,
  userInfo: "api/user",
  requestContribute: (id: string): string => `api/request/${id}/contribution`,
  requestLoadDetails: (id: string): string => `api/request/${id}`,
  requestLoadAll: "api/request",
};
