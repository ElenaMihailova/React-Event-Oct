import React, { useState, useEffect } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ResultSection } from "../../../components/ResultSection";
import { useGetRequestCardsQuery } from "../../../API/RTKQuery/api";
import { ErrorBlock } from "../../../components/ErrorBlock";
import { ButtonIcon } from "../../../components/IconButton";
import GridonRounded from "../../../assets/icon/GridonRounded.png";
import ListAltRounded from "../../../assets/icon/ListAltRounded.png";
import LocationOnFilled from "../../../assets/icon/LocationOnFilled.png";
import { HelpRequestData } from "../../../types/types";

export const Favorites: React.FC = () => {
  const theme = useTheme();
  const [page, setPage] = useState(1);
  const itemsPerPage = 3;

  const navigate = useNavigate();

  const {
    data: cards = [],
    isLoading,
    error,
  } = useGetRequestCardsQuery(undefined);
  const totalPages = Math.ceil(cards.length / itemsPerPage);

  const [displayMode, setDisplayMode] = useState<"grid" | "list">("grid");
  const handleDisplayModeChange = (mode: "grid" | "list") => {
    setDisplayMode(mode);
  };

  const handlePageChange = (
    _event: React.ChangeEvent<unknown>,
    value: number,
  ) => {
    setPage(value);
  };

  const handleCardClick = (id: string) => {
    navigate(`/details?id=${id}`);
  };

  // Индексы для пагинации
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedCards = cards.slice(startIndex, endIndex);

  return (
    <Box
      sx={{
        display: "flex",
        flex: "1",
        marginTop: 2,
        flexWrap: "wrap",
      }}
    >
      <Box flex="1" display="flex" flexDirection="column" height="100%">
        <Box
          sx={{
            backgroundColor: "white",
            padding: `${theme.spacing(2.5)}`,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            borderRadius: theme.shape.borderRadius,
            flex: 1,
            minHeight: "100%",
          }}
        >
          <Box display="flex" flexDirection="row" justifyContent="right">
            <Box>
              <ButtonIcon
                src={GridonRounded}
                alt="Grid View"
                onClickTable={() => handleDisplayModeChange("grid")}
                sx={{
                  backgroundColor:
                    displayMode === "grid"
                      ? "rgba(0, 0, 0, 0.08)"
                      : "transparent",
                }}
              />
              <ButtonIcon
                src={ListAltRounded}
                alt="List View"
                onClickTable={() => handleDisplayModeChange("list")}
                sx={{
                  backgroundColor:
                    displayMode === "list"
                      ? "rgba(0, 0, 0, 0.08)"
                      : "transparent",
                }}
              />
              <ButtonIcon src={LocationOnFilled} alt="Map View" />
            </Box>
          </Box>

          {isLoading ? (
            <Typography>Загрузка...</Typography>
          ) : error ? (
            <ErrorBlock errorText=" Ошибка! Не удалось загрузить информацию" />
          ) : (
            <ResultSection
              cards={paginatedCards.map((card: HelpRequestData) => ({
                ...card,
                collectedAmount: card.requestGoalCurrentValue,
                targetAmount: card.requestGoal,
                contributorsCount: card.contributorsCount,
              }))}
              onCardClick={handleCardClick}
              displayMode={displayMode}
              currentPage={page}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Favorites;
