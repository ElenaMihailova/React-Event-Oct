import { Box, Typography } from "@mui/material";
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
          maxWidth: theme.breakpoints.values.xl,
        }}
      >
        <Typography
          component="a"
          href="https://t.me/natti_jun_front_chat/838451"
          variant="body1"
          sx={{
            flex: 1,
            textAlign: "left",
            textDecoration: "none",
            color: "inherit",
            "&:hover": { color: theme.palette.text.secondary },
          }}
        >
          Об ивенте
        </Typography>
        <Typography
          component="a"
          href="https://github.com/ElenaMihailova/React-Event-Oct"
          variant="body1"
          sx={{
            flex: 1,
            textAlign: "center",
            textDecoration: "none",
            color: "inherit",
            "&:hover": { color: theme.palette.text.secondary },
          }}
        >
          Github проекта
        </Typography>
        <Typography
          component="a"
          href="https://t.me/natti_jun_front_chat"
          variant="body1"
          sx={{
            flex: 1,
            textAlign: "right",
            textDecoration: "none",
            color: "inherit",
            "&:hover": { color: theme.palette.text.secondary },
          }}
        >
          Чат для джунов
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
