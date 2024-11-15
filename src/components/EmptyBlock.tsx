import { Box, Typography } from "@mui/material";
import emptyImage from "../assets/empty.png";

export const EmptyBlock: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        p: 2,
      }}
    >
      <Box
        component="img"
        src={emptyImage}
        alt="Ошибка"
        sx={{
          width: "100%",
          maxWidth: 262,
          height: "auto",
          mb: 2,
          objectFit: "contain",
        }}
      />
      <Typography variant="h5" color="secondary">
        Запросы не найдены
      </Typography>
    </Box>
  );
};
