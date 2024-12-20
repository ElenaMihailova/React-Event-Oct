import {
  Menu,
  MenuList,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Box,
  IconButton,
  Button,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import PersonIcon from "@mui/icons-material/Person";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import useAuth from "../auth/AuthProvider";
import { isLoggedInSelector } from "../API/slices/isLoggedInSlice";

export const UserMenu = () => {
  const { logOut } = useAuth();

  const isLoggedIn = useSelector(isLoggedInSelector);

  const [menuButton, setMenuButton] = useState<null | HTMLElement>(null);

  const navigate = useNavigate();

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setMenuButton(event.currentTarget);
  };

  const handleClose = (): void => {
    setMenuButton(null);
  };

  const handleProfile = (): void => {
    setMenuButton(null);
    navigate("/profile");
  };

  const handleLogin = (): void => {
    navigate("/");
  };

  const handleLogOut = (): void => {
    logOut();
    setMenuButton(null);
  };

  if (!isLoggedIn) {
    return (
      <Button
        variant="outlined"
        color="secondary"
        sx={{
          marginLeft: "auto",
          display: "block",
        }}
        onClick={handleLogin}
      >
        Войти
      </Button>
    );
  }

  return (
    <Box>
      <IconButton
        sx={{ display: "block", marginLeft: "auto", height: 56, width: 56 }}
        onClick={handleMenu}
      >
        <AccountCircleIcon sx={{ fontSize: 40 }} />
      </IconButton>
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
          <MenuItem onClick={handleLogOut}>
            <ListItemIcon>
              <ExitToAppIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Выйти</ListItemText>
          </MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
};
