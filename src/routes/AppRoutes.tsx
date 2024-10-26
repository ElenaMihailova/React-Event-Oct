import { Routes, Route } from "react-router-dom";
import { WelcomePage } from "../pages/WelcomPage";
import HelpRequestPage from "../pages/helpRequestPage/HelpRequestPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HelpRequestPage />} />
    </Routes>
  );
};

export default AppRoutes;
