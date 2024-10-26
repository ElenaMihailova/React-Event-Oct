import { Routes, Route } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import store from "../API/RTKQuery/index";
import CatalogPage from "../pages/CatalogPage";
import HelpRequestPage from "../pages/helpRequestPage/HelpRequestPage";
import { Login } from "../pages/Login";


const AppRoutes = () => {
  return (
    <ReduxProvider store={store}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/help-request" element={<HelpRequestPage />} />
      </Routes>
    </ReduxProvider>
  );
};

export default AppRoutes;
