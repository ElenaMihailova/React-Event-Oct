import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import AppRoutes from "./routes/AppRoutes";
import theme from "./theme"; // Импорт темы

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AppRoutes />
      </Router>
    </ThemeProvider>
  );
}

export default App;
