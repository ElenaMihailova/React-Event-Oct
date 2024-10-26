import React, { useState } from "react";
import { Box, Typography, FormControl, Button, useTheme } from "@mui/material";
import { FilterItem } from "./FilterItem";
import { VolunteerFilter } from "./VolunteerFilter";
import { filterData } from "../data/FilterData";
import { DateFilter } from "./DateFilter";

export const FilterSidebar: React.FC = () => {
  const theme = useTheme();

  const [selectedFilters, setSelectedFilters] = useState<{
    [key: string]: string | null;
  }>({});
  const [selectedVolunteerFilters, setSelectedVolunteerFilters] = useState<{
    [key: string]: string | null;
  }>({});

  const handleCheckboxChange = (title: string, value: string) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [title]: prev[title] === value ? null : value,
    }));
  };

  const handleVolunteerCheckboxChange = (title: string, value: string) => {
    setSelectedVolunteerFilters((prev) => ({
      ...prev,
      [title]: prev[title] === value ? null : value,
    }));
  };

  const handleResetFilters = () => {
    setSelectedFilters({});
    setSelectedVolunteerFilters({});
  };

  return (
    <Box
      p={2}
      sx={{
        backgroundColor: "white",
        padding: `${theme.spacing(2.5)}`,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        borderRadius: theme.shape.borderRadius,
        textAlign: "left",
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
            selectedOption={selectedFilters[filter.title] || null}
            onCheckboxChange={(value) =>
              handleCheckboxChange(filter.title, value)
            }
          />
        ))}
        <VolunteerFilter
          selectedFilters={selectedVolunteerFilters}
          onCheckboxChange={handleVolunteerCheckboxChange}
        />
        <DateFilter />
      </FormControl>

      <Button
        variant="outlined"
        color="secondary"
        onClick={handleResetFilters}
        sx={{
          color: "black",
          borderColor: "black",
          "&:hover": {
            borderColor: "black",
            backgroundColor: "rgba(0, 0, 0, 0.04)",
          },
        }}
      >
        Сбросить
      </Button>
    </Box>
  );
};
