import React, { useState } from "react";
import { Box, Typography, TextField } from "@mui/material";

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
    <Box mt={2}>
      <Typography variant="subtitle1" mb={1}>
        Помощь актуальна до:
      </Typography>
      <TextField
        label="Выберите дату"
        type="date"
        fullWidth
        value={selectedDate || ""}
        onChange={handleDateChange}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </Box>
  );
};
