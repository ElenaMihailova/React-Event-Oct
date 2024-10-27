import { Routes, Route } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import AuthProvider from "../auth/AuthProvider";
import store from "../API/RTKQuery/index";
import CatalogPage from "../pages/CatalogPage";
import HelpRequestPage from "../pages/helpRequestPage/HelpRequestPage";
import { ProfilePage } from "../pages/profilePage/ProfilePage";
import { Login } from "../pages/Login";

const AppRoutes = () => {
  return (
    <AuthProvider>
      <ReduxProvider store={store}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/details" element={<HelpRequestPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </ReduxProvider>
    </AuthProvider>
  );
};

export default AppRoutes;
