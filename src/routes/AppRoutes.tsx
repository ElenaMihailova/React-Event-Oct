import { Routes, Route } from "react-router-dom";
import { WelcomePage } from "../pages/WelcomPage";
import { Login } from "../pages/Login";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default AppRoutes;
