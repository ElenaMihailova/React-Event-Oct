import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { LoginForm } from "../components/login-forms/LoginForm";
import { TestProfiles } from "../components/login-forms/TestProfiles";

export const Login: React.FC = () => {
  const gridStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    flexWrap: "wrap",
    gap: "30px",
    paddingTop: "30px",
  };

  const boxStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  };

  return (
    <Grid container spacing={1} style={boxStyle}>
      <Grid style={gridStyle}>
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

      <Grid style={gridStyle}>
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
