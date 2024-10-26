import { Routes, Route } from "react-router-dom";
import CatalogPage from "../pages/CatalogPage";
import HelpRequestPage from "../pages/helpRequestPage/HelpRequestPage";
import { ProfilePage } from "../pages/profilePage/ProfilePage";
import { Login } from "../pages/Login";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/catalog" element={<CatalogPage />} />
      <Route path="/help-request" element={<HelpRequestPage />} />
      <Route path="/profile" element={<ProfilePage />} />
    </Routes>
  );
};

export default AppRoutes;
