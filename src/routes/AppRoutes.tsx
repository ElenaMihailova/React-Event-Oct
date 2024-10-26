import { Routes, Route } from "react-router-dom";
import { WelcomePage } from "../pages/WelcomPage";
import { CatalogPage } from "../pages/CatalogPage";


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/catalog" element={<CatalogPage />}/>
    </Routes>
  );
};

export default AppRoutes;
