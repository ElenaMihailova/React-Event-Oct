
import { Box, Typography } from "@mui/material";
import errorImage from "../assets/error.png";

export const ErrorBlock: React.FC = () => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" p={2}>
      <img src={errorImage} alt="Ошибка" style={{ width: "419px", height: "240px", marginBottom: "16px" }} />
      <Typography variant="h6" color="error" textAlign="center">
        Ошибка! Не удалось загрузить информацию
      </Typography>
    </Box>
  );
};

