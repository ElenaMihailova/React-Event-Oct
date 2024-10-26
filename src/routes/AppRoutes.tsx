import { Routes, Route } from "react-router-dom";
import { WelcomePage } from "../pages/WelcomPage";
import { ProfilePage } from "../pages/ProfilePage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/profile" element={<ProfilePage />} />
    </Routes>
  );
};

export default AppRoutes;
