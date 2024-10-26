import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import theme from "../theme";

const Footer = () => {
  return (
    <Box component="footer" sx={{ borderTop: "1px solid #E0E0E0" }}>
      <Box
        sx={{
          marginY: 0,
          marginX: "auto",
          p: 4,
          display: "flex",
          justifyContent: "space-between",
          maxWidth: theme.breakpoints.values.lg,
        }}
      >
        <Typography variant="body1" sx={{ flex: 1, textAlign: "left" }}>
          Об ивенте
        </Typography>
        <Typography variant="body1" sx={{ flex: 1, textAlign: "center" }}>
          Github проекта
        </Typography>
        <Typography variant="body1" sx={{ flex: 1, textAlign: "right" }}>
          Чат для джунов
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
