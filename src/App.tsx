import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import { ToastContainer, Bounce } from "react-toastify";
import { ThemeProvider } from "@mui/material/styles";
import AppRoutes from "./routes/AppRoutes";
import store from "./API/RTKQuery/index";
import theme from "./theme";
import { AppWrapper } from "./layout/AppWrapper";
import { AuthProvider } from "./auth/AuthProvider";

function App() {
  return (
    <ThemeProvider theme={theme}>
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
      <Router>
        <ReduxProvider store={store}>
          <AuthProvider>
            <AppWrapper>
              <AppRoutes />
            </AppWrapper>
          </AuthProvider>
        </ReduxProvider>
      </Router>
    </ThemeProvider>
  );
}

export default App;
