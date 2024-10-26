import React from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { FilterItem } from "./FilterItem";
import { filterDataVolunteer } from "../data/FilterData";

interface VolunteerFilterProps {
  selectedFilters: { [key: string]: string | null };
  onCheckboxChange: (title: string, value: string) => void;
}

export const VolunteerFilter: React.FC<VolunteerFilterProps> = ({ selectedFilters, onCheckboxChange }) => {
  return (
    <Box>
      <Accordion>
        <AccordionSummary
          aria-controls="volunteer-content"
          id="volunteer-header"
        >
          <Typography variant="h6">Волонтерство</Typography>
        </AccordionSummary>

        <AccordionDetails
          sx={{
            backgroundColor: "#F5F5F5",
          }}
        >
          {filterDataVolunteer.map((filter, index) => (
            <FilterItem
              key={index}
              title={filter.title}
              options={filter.options}
              selectedOption={selectedFilters[filter.title] || null}
              onCheckboxChange={(value) => onCheckboxChange(filter.title, value)}
            />
          ))}
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};
