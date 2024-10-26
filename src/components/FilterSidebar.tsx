import { Box, Typography, FormControl, FormGroup, FormControlLabel, Checkbox, Button } from '@mui/material';

export const FilterSidebar: React.FC = () => {

  return (
    <Box
      p={2}
      sx={{
        width: '250px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100vh',
      }}
    >
      <Typography variant="h6" mb={2}>
        Фильтрация
      </Typography>

      <FormControl component="fieldset" sx={{ flexGrow: 1 }}>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox />}
            label="Категория 1"
          />
          <FormControlLabel
            control={<Checkbox />}
            label="Категория 2"
          />
          <FormControlLabel
            control={<Checkbox />}
            label="Категория 3"
          />
        </FormGroup>
      </FormControl>

      <Button variant="outlined" color="secondary">
        Сбросить
      </Button>
    </Box>
  );
};
