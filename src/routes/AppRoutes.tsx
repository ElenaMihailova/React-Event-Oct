import { Routes, Route } from "react-router-dom";
import { WelcomePage } from "../pages/WelcomPage";
import HelpRequestPage from "../pages/helpRequestPage/HelpRequestPage";
import { Login } from "../pages/Login";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/help-request" element={<HelpRequestPage />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default AppRoutes;
