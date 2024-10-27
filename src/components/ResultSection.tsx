import React from "react";
import { Box } from "@mui/material";
import { CardInformation } from "./Card";
import { CardHorizontal } from "./CardHorizontal";
import { HelpRequestData } from "../types/types";

interface ResultSectionProps {
  cards: HelpRequestData[];
  onCardClick: (id: string) => void;
  displayMode: "grid" | "list";
}

export const ResultSection: React.FC<ResultSectionProps> = ({
  cards,
  onCardClick,
  displayMode,
}) => {
  return (
    <Box
      display="flex"
      gap={1}
      justifyContent="center"
      flexDirection={displayMode === "grid" ? "row" : "column"}
      flexWrap={displayMode === "grid" ? "wrap" : "nowrap"}
    >
      {cards.map((card) =>
        displayMode === "grid" ? (
          <CardInformation
            key={card.id}
            {...card}
            onClick={() => onCardClick(card.id)}
          />
        ) : (
          <CardHorizontal
            key={card.id}
            {...card}
            onClick={() => onCardClick(card.id)}
          />
        ),
      )}
    </Box>
  );
};
