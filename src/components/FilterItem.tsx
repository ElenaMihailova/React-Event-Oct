import React from "react";
import { Box, Typography, FormGroup, FormControlLabel, Checkbox } from "@mui/material";

interface FilterItemProps {
  title: string;
  options: { label: string; value: string }[];
  selectedOption: string | null;
  onCheckboxChange: (value: string) => void;
}

export const FilterItem: React.FC<FilterItemProps> = ({ title, options, selectedOption, onCheckboxChange }) => {
  return (
    <Box mb={2}>
      <Typography variant="subtitle1" mb={1}>
        {title}
      </Typography>

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
