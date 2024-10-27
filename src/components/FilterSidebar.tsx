import React from "react";
import { Box, Typography, FormControl, Button, useTheme } from "@mui/material";
import { FilterItem } from "./FilterItem";
import { VolunteerFilter } from "./VolunteerFilter";
import { filterData } from "../data/FilterData";
import { DateFilter } from "./DateFilter";

interface FilterSidebarProps {
  filters: { [key: string]: string | null };
  setFilters: React.Dispatch<React.SetStateAction<{ [key: string]: string | null }>>;
  selectedVolunteerFilters: { [key: string]: string | null };
  setSelectedVolunteerFilters: React.Dispatch<React.SetStateAction<{ [key: string]: string | null }>>;
}

export const FilterSidebar: React.FC<FilterSidebarProps> = ({ filters,
  setFilters,
  selectedVolunteerFilters,
  setSelectedVolunteerFilters }) => {
  const theme = useTheme();

  const handleCheckboxChange = (title: string, value: string) => {
    setFilters((prev) => ({
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
    setFilters({});
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
        {filterData.map((filter) => (
          <FilterItem
            key={filter.title}
            title={filter.title}
            options={filter.options}
            selectedOption={filters[filter.title] || null}
            onCheckboxChange={(value) => handleCheckboxChange(filter.title, value)}
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
