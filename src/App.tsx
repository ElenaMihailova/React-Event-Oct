import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import AppRoutes from "./routes/AppRoutes";
import theme from "./theme";
import { AppWrapper } from "./layout/AppWrapper";
import { AuthProvider } from "./auth/AuthProvider";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AuthProvider>
          <AppWrapper>
            <AppRoutes />
          </AppWrapper>
        </AuthProvider>
      </Router>
    </ThemeProvider>
  );
}

export default App;
