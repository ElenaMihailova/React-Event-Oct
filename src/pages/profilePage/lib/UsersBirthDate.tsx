import { Box, Typography } from "@mui/material";

interface PropsFieldUsersBirthDate {
  usersBirthDate: string | undefined;
}

export const UsersBirthDate: React.FC<PropsFieldUsersBirthDate> = ({
  usersBirthDate,
}) => {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h4" sx={{ fontSize: 20, fontWeight: 500, mr: 0.5 }}>
        Дата рождения
      </Typography>
      <Typography
        variant="body2"
        sx={{ width: "150px", color: "text.secondary" }}
      >
        {usersBirthDate}
      </Typography>
    </Box>
  );
};
