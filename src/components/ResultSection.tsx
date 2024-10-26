import React from "react";
import { Box } from "@mui/material";
import { CardInformation } from "../components/Card";
import { HelpRequestData } from "../types/types";

interface ResultSectionProps {
  cards: HelpRequestData[];
  onCardClick: (id: string) => void;
}

export const ResultSection: React.FC<ResultSectionProps> = ({ cards, onCardClick }) => {
  return (
    <Box
      display="flex"
      gap={1}
      justifyContent="center"
    >
      {cards.map((card) => (
        <CardInformation key={card.id} {...card}
          onClick={() => onCardClick(card.id)} />
      ))}
    </Box>
  );
};
