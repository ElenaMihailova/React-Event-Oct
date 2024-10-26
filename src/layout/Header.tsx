import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem, Box } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Logo from "../../public/Logo.png"

const Header: React.FC = () => {
  const [menuButton, setMenuButton] = React.useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setMenuButton(event.currentTarget);
  };

  const handleClose = () => {
    setMenuButton(null);
  };

  return (
    <AppBar position="static" color="primary" sx={{ left: 0, right: 0 }}>
      <Toolbar style={{ padding: '0 210px' }}>
        <Box component="img" src={Logo} alt="Logo" sx={{ height: 20, marginRight: 2, position: 'absolute' }} />
        <Typography
          variant="h6"
          sx={{
            flexGrow: 1,
            fontSize: '16px',
            fontWeight: 400, // Добавлено
            lineHeight: '24px', // Добавлено
            letterSpacing: '0.15px' // Добавлено
          }}
        >
          Запросы о помощи
        </Typography>
        <IconButton
          edge="end"
          onClick={handleMenu}
          color="inherit"
        >
          <AccountCircleIcon />
        </IconButton>
        <Menu
          anchorEl={menuButton}
          open={Boolean(menuButton)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Мой профиль</MenuItem>
          <MenuItem onClick={handleClose}>Выйти</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
