import { Box, FormGroup, FormControlLabel, Checkbox } from "@mui/material";
import { FilterTitle } from "./FilterTitle";

interface FilterItemProps {
  title: string;
  options: { label: string; value: string }[];
  selectedOption: string | null;
  onCheckboxChange: (value: string) => void;
}

export const FilterItem: React.FC<FilterItemProps> = ({
  title,
  options,
  selectedOption,
  onCheckboxChange,
}) => {
  return (
    <Box sx={{ marginTop: 2 }}>
      <FilterTitle title={title} />
      <FormGroup>
        {options.map((option) => (
          <FormControlLabel
            key={option.value}
            control={
              <Checkbox
                checked={selectedOption === option.value}
                onChange={() => onCheckboxChange(option.value)}
              />
            }
            label={option.label}
          />
        ))}
      </FormGroup>
    </Box>
  );
};
