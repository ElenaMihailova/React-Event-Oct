import { Box, Typography, FormControl, Button, useTheme } from '@mui/material';
import { FilterItem } from './FilterItem';
import { VolunteerFilter } from './VolunteerFilter';

import { filterData } from '../data/FilterData';
import { DateFilter } from './DateFilter';
export const FilterSidebar: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      p={2}
      sx={{
        backgroundColor: 'white',
        padding: `${theme.spacing(2.5)}`,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderRadius: theme.shape.borderRadius,
      }}
    >
      <Typography variant="h6" mb={2}>
        Фильтрация
      </Typography>

      <FormControl component="fieldset" sx={{ flexGrow: 1 }}>
        {filterData.map((filter, index) => (
          <FilterItem
            key={index}
            title={filter.title}
            options={filter.options}
          />
        ))}
        <VolunteerFilter />
        <DateFilter/>
      </FormControl>

      <Button
        variant="outlined"
        color="secondary"
        sx={{
          color: 'black',
          borderColor: 'black',
          '&:hover': {
            borderColor: 'black',
            backgroundColor: 'rgba(0, 0, 0, 0.04)',
          },
        }}
      >
        Сбросить
      </Button>

    </Box>
  );
};
