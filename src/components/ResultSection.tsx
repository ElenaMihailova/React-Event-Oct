import React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import { ButtonIcon } from './IconButton';


import GridonRounded from '../assets/icon/GridonRounded.png';
import ListAltRounded from '../assets/icon/ListAltRounded.png';
import LocationOnFilled from '../assets/icon/LocationOnFilled.png';



interface ResultSectionProps {
  page: number;
  itemsPerPage: number;
}

export const ResultSection: React.FC<ResultSectionProps> = ({ page, itemsPerPage }) => {
  const totalItems = 9;
  const cards = Array.from({ length: totalItems }, (_, index) => ({
    id: index + 1,
    title: `Запрос ${index + 1}`
  }));

  const displayedCards = cards.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  return (
    <>
      <Box display="flex" flexDirection="row" justifyContent='space-between'>
        <Typography variant="h6">
        Найдено:
      </Typography>

        <Box >
          <ButtonIcon src={ListAltRounded} alt="List View" />
          <ButtonIcon src={GridonRounded} alt="Grid View" />
          <ButtonIcon src={LocationOnFilled} alt="Map View" />
        </Box></Box>


      <Box display="flex" flexDirection="row" gap={2}>
        {displayedCards.map((card) => (
          <Paper key={card.id} elevation={3} sx={{ padding: 2, marginBottom: 2 }}>
            <Typography variant="body1">{card.title}</Typography>
          </Paper>
        ))}
      </Box>

    </>

  );
};
