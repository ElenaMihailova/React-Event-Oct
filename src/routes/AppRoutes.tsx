import { Routes, Route } from "react-router-dom";
import CatalogPage from "../pages/CatalogPage";
import HelpRequestPage from "../pages/helpRequestPage/HelpRequestPage";
import { Login } from "../pages/Login";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/catalog" element={<CatalogPage />}/>
      <Route path="/help-request" element={<HelpRequestPage />} />
    </Routes>
  );
};

export default AppRoutes;
