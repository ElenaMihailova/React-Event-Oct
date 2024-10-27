import React from "react";
import {
  Box,
  Typography,
  TextField,
  InputAdornment,
  useTheme,
} from "@mui/material";
import searchIcon from "../assets/icon/search.png";

interface SearchSectionProps {
  onSearchChange: (searchText: string) => void;
}

const SearchSection: React.FC<SearchSectionProps> = ({ onSearchChange }) => {
  const theme = useTheme();

  return (
    <Box
      mb={3}
      sx={{
        backgroundColor: "white",
        paddingX: theme.spacing(5),
        paddingY: theme.spacing(2.5),
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        borderRadius: theme.shape.borderRadius,
      }}
    >
      <Typography
        variant="h6"
        mb={1}
        sx={{
          textAlign: "left",
        }}
      >
        Найти запрос
      </Typography>

      <TextField
        placeholder="Введите название задачи или организации"
        variant="standard"
        fullWidth
        onChange={(e) => onSearchChange(e.target.value)} // Отслеживаем изменения
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <img src={searchIcon} alt="Search Icon" width="20" height="20" />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};

export default SearchSection;
