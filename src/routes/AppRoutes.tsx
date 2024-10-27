import { Routes, Route } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import AuthProvider from "../auth/AuthProvider";
import store from "../API/RTKQuery/index";
import CatalogPage from "../pages/CatalogPage";
import HelpRequestPage from "../pages/helpRequestPage/HelpRequestPage";
import { ProfilePage } from "../pages/profilePage/ProfilePage";
import { Login } from "../pages/Login";
import PrivateRoute from "../auth/PrivateRoute";

const AppRoutes = () => {
  return (
    <AuthProvider>
      <ReduxProvider store={store}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/catalog"
            element={
              <PrivateRoute>
                <CatalogPage />
              </PrivateRoute>
            }
          />
          <Route
            path="details"
            element={
              <PrivateRoute>
                <HelpRequestPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <ProfilePage />
              </PrivateRoute>
            }
          />
        </Routes>
      </ReduxProvider>
    </AuthProvider>
  );
};

export default AppRoutes;
