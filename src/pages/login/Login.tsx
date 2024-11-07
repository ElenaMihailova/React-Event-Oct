import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { LoginForm } from "../../components/login-forms/LoginForm";
import { TestProfiles } from "../../components/login-forms/testProfiles/TestProfiles";
import "./style.css";

export const Login: React.FC = () => {
  return (
    <Grid container spacing={1} className="containerStyle">
      <Grid className="gridStyle">
        <Typography
          variant="h4"
          gutterBottom
          style={{
            marginBottom: "60px",
          }}
        >
          Авторизация
        </Typography>
        <Typography variant="h5" gutterBottom>
          Вход
        </Typography>

        <LoginForm />
      </Grid>

      <Grid className="gridStyle">
        <Typography
          variant="h4"
          gutterBottom
          style={{
            marginBottom: "90px",
          }}
        >
          Тестовые профили
        </Typography>

        <TestProfiles />
      </Grid>
    </Grid>
  );
};
