import { AppBar, Toolbar, Typography, Box } from "@mui/material";

import Logo from "./Logo";

import theme from "../theme";
import { UserMenu } from "./UserMenu";

export const Header: React.FC = () => {
  return (
    <AppBar
      position="fixed"
      sx={{ background: theme.palette.background.paper }}
    >
      <Toolbar
        sx={{
          maxWidth: theme.breakpoints.values.lg,
          width: "100%",
          marginY: 0,
          marginX: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ flex: 1 }}>
          <Logo />
        </Box>

        <Typography
          component="a"
          href="/catalog"
          variant="body1"
          sx={{
            textDecoration: "none",
            color: theme.palette.text.primary,
            flex: 1,
            textAlign: "center",
            cursor: "pointer",
            "&:hover": { color: theme.palette.text.secondary },
          }}
        >
          Запросы о помощи
        </Typography>
        <Box sx={{ flex: 1 }}>
          <UserMenu />
        </Box>
      </Toolbar>
    </AppBar>
  );
};
