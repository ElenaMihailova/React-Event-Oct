import React from 'react';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { FilterItem } from './FilterItem';
import { filterDataVolunteer } from '../data/FilterData';

export const VolunteerFilter: React.FC = () => {
  return (
    <Box >
      <Accordion>
        <AccordionSummary
          aria-controls="volunteer-content"
          id="volunteer-header"
        >
          <Typography variant="h6">Волонтерство</Typography>
        </AccordionSummary>

        <AccordionDetails sx={{
          backgroundColor: '#F5F5F5'
        }}>
          {filterDataVolunteer.map((filter, index) => (
            <FilterItem
              key={index}
              title={filter.title}
              options={filter.options}
            />
          ))}
        </AccordionDetails>
      </Accordion>
    </Box >
  );
};
