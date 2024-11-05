import { Routes, Route } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import { ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import store from "../API/RTKQuery/index";
import CatalogPage from "../pages/CatalogPage";
import HelpRequestPage from "../pages/helpRequestPage/HelpRequestPage";
import { ProfilePage } from "../pages/profilePage/ProfilePage";
import { Login } from "../pages/Login";
import PrivateRoute from "../auth/PrivateRoute";

const AppRoutes = () => {
  return (
    <ReduxProvider store={store}>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
      />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/catalog"
          element={
            <PrivateRoute>
              <CatalogPage />
            </PrivateRoute>
          }
        />
        <Route
          path="details"
          element={
            <PrivateRoute>
              <HelpRequestPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <ProfilePage />
            </PrivateRoute>
          }
        />
      </Routes>
    </ReduxProvider>
  );
};

export default AppRoutes;
