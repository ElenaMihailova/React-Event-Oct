import React from "react";
import { Typography, FormControl, useTheme } from "@mui/material";
import { FilterItem } from "../FilterItem";
import { VolunteerFilter } from "../VolunteerFilter";
import { filterData } from "../../data/FilterData";
import { DateFilter } from "../DateFilter";
import { SidebarContainer, ResetButton } from "./styles";

interface FilterSidebarProps {
  filters: { [key: string]: string | null };
  setFilters: React.Dispatch<
    React.SetStateAction<{ [key: string]: string | null }>
  >;
  selectedVolunteerFilters: { [key: string]: string | null };
  setSelectedVolunteerFilters: React.Dispatch<
    React.SetStateAction<{ [key: string]: string | null }>
  >;
  onDateChange: (date: string | null) => void;
}

export const FilterSidebar: React.FC<FilterSidebarProps> = ({
  filters,
  setFilters,
  selectedVolunteerFilters,
  setSelectedVolunteerFilters,
  onDateChange,
}) => {
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
    <SidebarContainer sx={{ borderRadius: theme.shape.borderRadius }}>
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
            onCheckboxChange={(value) =>
              handleCheckboxChange(filter.title, value)
            }
          />
        ))}
        <VolunteerFilter
          selectedFilters={selectedVolunteerFilters}
          onCheckboxChange={handleVolunteerCheckboxChange}
        />
        <DateFilter onDateChange={onDateChange} />
      </FormControl>

      <ResetButton
        variant="outlined"
        color="secondary"
        onClick={handleResetFilters}
      >
        Сбросить
      </ResetButton>
    </SidebarContainer>
  );
};
