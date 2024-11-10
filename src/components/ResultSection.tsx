import React from "react";
import { Box, Pagination } from "@mui/material";
import { CardInformation } from "./Card";
import { CardHorizontal } from "./CardHorizontal";
import { HelpRequestData } from "../types/types";

interface ResultSectionProps {
  cards: HelpRequestData[];
  onCardClick: (id: string) => void;
  displayMode: "grid" | "list";
  currentPage: number;
  totalPages: number;
  onPageChange: (event: React.ChangeEvent<unknown>, value: number) => void;
}

export const ResultSection: React.FC<ResultSectionProps> = ({
  cards,
  onCardClick,
  displayMode,
  currentPage,
  totalPages,
  onPageChange,
}) => {
  return (
    <Box
      sx={{ display: "flex", gap: 1, justifyContent: "center" }}
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
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={onPageChange}
        sx={{ mt: 2, display: "flex", justifyContent: "center" }}
      />
    </Box>
  );
};
