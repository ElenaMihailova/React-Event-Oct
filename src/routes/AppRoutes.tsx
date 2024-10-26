import { Routes, Route } from "react-router-dom";
import HelpRequestPage from "../pages/helpRequestPage/HelpRequestPage";
import { Login } from "../pages/Login";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/help-request" element={<HelpRequestPage />} />
    </Routes>
  );
};

export default AppRoutes;
