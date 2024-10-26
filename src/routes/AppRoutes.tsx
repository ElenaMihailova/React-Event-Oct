import { Routes, Route } from "react-router-dom";
import { WelcomePage } from "../pages/WelcomPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
    </Routes>
  );
};

export default AppRoutes;
