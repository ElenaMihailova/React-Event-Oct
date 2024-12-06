import { Box, Typography } from "@mui/material";

interface UsersInfo {
  usersInfo: string | undefined;
}

export const AboutUser: React.FC<UsersInfo> = ({ usersInfo }) => {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h6" sx={{ fontSize: 20, mb: 1 }}>
        Обо мне
      </Typography>
      <Typography variant="body1">{usersInfo}</Typography>
    </Box>
  );
};
