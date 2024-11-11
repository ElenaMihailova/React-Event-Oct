import React, { useState } from "react";
import { Box, TextField } from "@mui/material";
import { FilterTitle } from "./FilterTitle";

interface DateFilterProps {
  onDateChange: (date: string | null) => void;
}

export const DateFilter: React.FC<DateFilterProps> = ({ onDateChange }) => {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = event.target.value || null;
    setSelectedDate(newDate);
    onDateChange(newDate);
  };

  return (
    <Box sx={{ paddingY: 3 }}>
      <FilterTitle title='Помощь актуальна до:' />
      <TextField
        type="date"
        fullWidth
        value={selectedDate || ""}
        onChange={handleDateChange}
        InputLabelProps={{
          shrink: true,
        }}
        sx={{ marginTop: 1 }}
      />
    </Box>
  );
};
