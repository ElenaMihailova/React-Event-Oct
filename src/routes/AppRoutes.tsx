import { Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import CatalogPage from "../pages/CatalogPage";
import HelpRequestPage from "../pages/helpRequestPage/HelpRequestPage";
import { ProfilePage } from "../pages/profilePage/ProfilePage";
import { Login } from "../pages/login/Login";
import { NotFoundPage } from "../pages/NotFoundPage";
import PrivateRoute from "../auth/PrivateRoute";

const AppRoutes = () => {
  return (
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
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;
