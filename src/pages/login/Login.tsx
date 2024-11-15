import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { LoginForm } from "../../components/login-forms/LoginForm";
import { TestProfiles } from "../../components/login-forms/testProfiles/TestProfiles";
import "./style.css";

export const Login: React.FC = () => {
  return (
    <Grid container spacing={3} className="container-style">
      <Grid size="grow" className="grid-style">
        <Typography
          variant="h2"
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

      <Grid className="grid-style">
        <Typography
          variant="h2"
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
