import React from "react";
import { Box, Paper, Typography } from "@mui/material";

interface ResultSectionProps {
  cards: Array<{
    id: string;
    title: string;
    description: string;
  }>;
}

export const ResultSection: React.FC<ResultSectionProps> = ({ cards }) => {
  const displayCards = Array.isArray(cards) ? cards : [];

  return (
    <Box display="flex" flexDirection="row" gap={2}>
      {displayCards.map((card) => (
        <Paper key={card.id} elevation={3} sx={{ padding: 2, marginBottom: 2 }}>
          <Typography variant="body1">{card.title}</Typography>
          <Typography variant="body2">{card.description}</Typography>
        </Paper>
      ))}
    </Box>
  );
};
