
import { Box, Typography, FormGroup, FormControlLabel, Checkbox } from '@mui/material';

interface FilterItemProps {
  title: string;
  options: { label: string; value: string }[];
}

export const FilterItem: React.FC<FilterItemProps> = ({ title, options }) => {
  return (
    <Box mb={2}>
      <Typography variant="subtitle1" mb={1}>
        {title}
      </Typography>

      <FormGroup>
        {options.map((option) => (
          <FormControlLabel
            key={option.value}
            control={<Checkbox />}
            label={option.label}
          />
        ))}
      </FormGroup>
    </Box>
  );
};
