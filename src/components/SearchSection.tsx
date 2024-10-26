import React from 'react';
import { Box, Typography, TextField, InputAdornment } from '@mui/material';
import searchIcon from '../assets/icon/search.png';

const SearchSection: React.FC = () => {
  return (
    <Box mb={3}>
      <Typography variant="h6" mb={1}>
        Найти запрос
      </Typography>

      <TextField
        placeholder="Введите запрос"
        variant="standard"
        fullWidth
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
