import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import AppRoutes from "./routes/AppRoutes";
import theme from "./theme"; // Импорт темы
import Wrapper from "../src/layout/Wrapper";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Wrapper>
          <AppRoutes />
        </Wrapper>
      </Router>
    </ThemeProvider>
  );
}

export default App;
