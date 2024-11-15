import { Stack, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ErrorBlock } from "../components/ErrorBlock";

export const NotFoundPage = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate(`/catalog`);

  return (
    <Stack
      sx={{
        width: "100%",
        boxSizing: "border-box",
        px: 2,
        py: 4,
        height: "80vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          p: 2,
        }}
      >
        <ErrorBlock errorText="Страница не найдена" />
        <Button variant="contained" color="error" onClick={handleClick}>
          Вернуться на главную
        </Button>
      </Box>
    </Stack>
  );
};
