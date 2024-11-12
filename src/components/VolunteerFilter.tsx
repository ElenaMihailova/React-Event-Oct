import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useTheme,
} from "@mui/material";
import { FilterItem } from "./FilterItem";
import { filterDataVolunteer } from "../data/FilterData";

interface VolunteerFilterProps {
  selectedFilters: { [key: string]: string | null };
  onCheckboxChange: (title: string, value: string) => void;
}

export const VolunteerFilter: React.FC<VolunteerFilterProps> = ({
  selectedFilters,
  onCheckboxChange,
}) => {
  const theme = useTheme();

  return (
    <Accordion>
      <AccordionSummary aria-controls="volunteer-content" id="volunteer-header">
        <Typography variant="h4">Волонтерство</Typography>
      </AccordionSummary>

      <AccordionDetails
        sx={{ backgroundColor: theme.palette.background.default }}
      >
        {filterDataVolunteer.map((filter) => (
          <FilterItem
            key={filter.title}
            title={filter.title}
            options={filter.options}
            selectedOption={selectedFilters[filter.title] || null}
            onCheckboxChange={(value) => onCheckboxChange(filter.title, value)}
          />
        ))}
      </AccordionDetails>
    </Accordion>
  );
};
