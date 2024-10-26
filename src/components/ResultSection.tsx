import React from "react";
import { Box, Paper, Typography } from "@mui/material";
import { ButtonIcon } from "./IconButton";
import GridonRounded from "../assets/icon/GridonRounded.png";
import ListAltRounded from "../assets/icon/ListAltRounded.png";
import LocationOnFilled from "../assets/icon/LocationOnFilled.png";

interface ResultSectionProps {
  cards: Array<{
    id: string;
    title: string;
    description: string;
  }>;
}

export const ResultSection: React.FC<ResultSectionProps> = ({ cards }) => {
  // Убедитесь, что `cards` является массивом, чтобы избежать ошибок
  const displayCards = Array.isArray(cards) ? cards : [];

  return (
    <>
      <Box display="flex" flexDirection="row" justifyContent="space-between">
        <Typography variant="h6">Найдено:</Typography>

        <Box>
          <ButtonIcon src={ListAltRounded} alt="List View" />
          <ButtonIcon src={GridonRounded} alt="Grid View" />
          <ButtonIcon src={LocationOnFilled} alt="Map View" />
        </Box>
      </Box>

      <Box display="flex" flexDirection="row" gap={2}>
        {displayCards.map((card) => (
          <Paper
            key={card.id}
            elevation={3}
            sx={{ padding: 2, marginBottom: 2 }}
          >
            <Typography variant="body1">{card.title}</Typography>
            <Typography variant="body2">{card.description}</Typography>
          </Paper>
        ))}
      </Box>
    </>
  );
};
