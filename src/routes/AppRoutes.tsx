import { Routes, Route } from "react-router-dom";
import { WelcomePage } from "../pages/WelcomPage";
import CatalogPage from "../pages/CatalogPage";
import HelpRequestPage from "../pages/helpRequestPage/HelpRequestPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/catalog" element={<CatalogPage />}/>
      <Route path="/help-request" element={<HelpRequestPage />} />
    </Routes>
  );
};

export default AppRoutes;
