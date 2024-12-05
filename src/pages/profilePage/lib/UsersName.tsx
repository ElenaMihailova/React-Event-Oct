import { Box, Typography } from "@mui/material";

interface PropsFieldUsersName {
  usersName: string | undefined;
  usersLastName: string | undefined;
}

export const UsersName: React.FC<PropsFieldUsersName> = ({
  usersName,
  usersLastName,
}) => {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography
        variant="body1"
        sx={{ fontSize: 20, fontWeight: "old", mb: 1 }}
      >
        Профиль
      </Typography>
      <Box sx={{ display: "flex", mb: 1 }}>
        <Typography variant="body2" sx={{ fontWeight: 500, mr: 0.5 }}>
          Фамилия:
        </Typography>
        <Typography variant="body2">{usersLastName}</Typography>
      </Box>
      <Box sx={{ display: "flex", mb: 1 }}>
        <Typography variant="body2" sx={{ fontWeight: 500, mr: 0.5 }}>
          Имя:
        </Typography>
        <Typography variant="body2">{usersName}</Typography>
      </Box>
    </Box>
  );
};
