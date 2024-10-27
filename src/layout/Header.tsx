import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  MenuList,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import { useNavigate } from "react-router-dom";
import useAuth from "../auth/hook";
import Logo from "./Logo";
import theme from "../theme";

const Header: React.FC = () => {
  const [menuButton, setMenuButton] = React.useState<null | HTMLElement>(null);
  const navigate = useNavigate();
  const { logOut } = useAuth();

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setMenuButton(event.currentTarget);
  };

  const handleClose = () => {
    setMenuButton(null);
    logOut();
  };

  const handleProfile = () => {
    setMenuButton(null);
    navigate("./profile");
  };

  const handleHelpRequestsClick = () => {
    setMenuButton(null);
    navigate("/catalog");
  };

  return (
    <AppBar position="fixed" color="default">
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
          onClick={handleHelpRequestsClick}
          variant="body1"
          sx={{
            flex: 1,
            textAlign: "center",
            cursor: "pointer",
            color: "inherit",
            "&:hover": { color: theme.palette.text.secondary },
          }}
        >
          Запросы о помощи
        </Typography>

        <Box sx={{ flex: 1 }}>
          <IconButton
            sx={{ display: "block", marginLeft: "auto", height: 56, width: 56 }}
            onClick={handleMenu}
          >
            <AccountCircleIcon sx={{ fontSize: 40 }} />
          </IconButton>
        </Box>
      </Toolbar>
      <Menu
        anchorEl={menuButton}
        open={Boolean(menuButton)}
        onClose={handleClose}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuList>
          <MenuItem onClick={handleProfile}>
            <ListItemIcon>
              <PersonIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Мой профиль</ListItemText>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon onClick={logOut}>
              <ExitToAppIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Выйти</ListItemText>
          </MenuItem>
        </MenuList>
      </Menu>
    </AppBar>
  );
};

export default Header;
