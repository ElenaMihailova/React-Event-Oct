import { Box, Typography } from "@mui/material";
import errorImage from "../assets/error.png";

interface ErrorBlockProps {
  errorText: string;
}

export const ErrorBlock: React.FC<ErrorBlockProps> = ({ errorText }) => {
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
        src={errorImage}
        alt="Ошибка"
        sx={{
          width: "100%",
          maxWidth: 419,
          height: "auto",
          mb: 2,
          objectFit: "contain",
        }}
      />
      <Typography variant="h6" color="error" sx={{ mt: 2 }}>
        {errorText}
      </Typography>
    </Box>
  );
};
