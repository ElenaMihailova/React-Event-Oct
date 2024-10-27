import { Box, Typography } from "@mui/material";
import emptyImage from "../assets/empty.png";

export const EmptyBlock: React.FC = () => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" p={2}>
      <img
        src={emptyImage}
        alt="Ошибка"
        style={{ width: "262px", height: "272px", marginBottom: "16px" }}
      />
      <Typography variant="h6" color="error" textAlign="center">
        Запросы не найдены
      </Typography>
    </Box>
  );
};
