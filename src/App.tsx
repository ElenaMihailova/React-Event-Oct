import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import AppRoutes from "./routes/AppRoutes";
import theme from "./theme"; // Импорт темы
import Wrapper from "../src/layout/Wrapper";
import AuthProvider from "./auth/AuthProvider";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AuthProvider>
          <Wrapper>
            <AppRoutes />
          </Wrapper>
        </AuthProvider>
      </Router>
    </ThemeProvider>
  );
}

export default App;
