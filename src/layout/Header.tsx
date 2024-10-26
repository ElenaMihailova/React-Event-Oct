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

import useAuth from "../auth/hook";
import Logo from "../../public/Logo.png";
import theme from "../theme";

const Header: React.FC = () => {
  const [menuButton, setMenuButton] = React.useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setMenuButton(event.currentTarget);
  };

  const handleClose = () => {
    setMenuButton(null);
  };

  const { logOut } = useAuth();

  return (
    <AppBar position="fixed">
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
          <img src={Logo} alt="Logo" />
        </Box>

        <Typography variant="body1" sx={{ flex: 1, textAlign: "center" }}>
          Запросы о помощи
        </Typography>
        <Box sx={{ flex: 1 }}>
          <IconButton
            sx={{ display: "block", marginLeft: "auto" }}
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
          <MenuItem onClick={handleClose}>
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
