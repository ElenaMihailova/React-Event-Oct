import React, { useState, useEffect } from "react";
import { Box, Typography, useTheme, Pagination } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { FilterSidebar } from "../components/FilterSidebar";
import SearchSection from "../components/SearchSection";
import { ResultSection } from "../components/ResultSection";
import { useGetRequestCardsQuery } from "../API/RTKQuery/api";
import { ErrorBlock } from "../components/ErrorBlock";
import { ButtonIcon } from "../components/IconButton";
import GridonRounded from "../assets/icon/GridonRounded.png";
import ListAltRounded from "../assets/icon/ListAltRounded.png";
import LocationOnFilled from "../assets/icon/LocationOnFilled.png";
import { HelpRequestData } from "../types/types";

export const CatalogPage: React.FC = () => {
  const theme = useTheme();
  const [page, setPage] = useState(1);
  const itemsPerPage = 3;

  const navigate = useNavigate();

  const { data: cards = [], isLoading, error } = useGetRequestCardsQuery(undefined);
  const totalPages = Math.ceil(cards.length / itemsPerPage);

  const [displayMode, setDisplayMode] = useState<"grid" | "list">("grid");
  const [filters, setFilters] = useState<{ [key: string]: string | null }>({});
  const [selectedVolunteerFilters, setSelectedVolunteerFilters] = useState<{ [key: string]: string | null }>({});

  const handleDisplayModeChange = (mode: "grid" | "list") => {
    setDisplayMode(mode);
  };

  useEffect(() => {
    console.log("Cards data:", cards);
    console.log("Loading state:", isLoading);
    console.log("Error:", error);
  }, [cards, isLoading, error]);

  const handlePageChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const handleCardClick = (id: string) => {
    navigate(`/details?id=${id}`);
  };

  // Фильтруем карточки на основе выбранных фильтров
  const filteredCards = cards.filter((card) => {
    return (
      Object.entries(filters).every(([filterKey, filterValue]) => {
        if (filterValue === null) return true;

        if (filterKey === "Кому мы помогаем") {
          return card.requesterType === filterValue;
        }
        if (filterKey === "Чем мы помогаем") {
          return card.helpType === filterValue;
        }
        return true;
      }) &&
      Object.entries(selectedVolunteerFilters).every(([filterKey, filterValue]) => {
        if (filterValue === null) return true;

        if (filterKey === "Специализация") {
          return card.helperRequirements?.qualification === filterValue;
        }
        if (filterKey === "Необходимо волонтеров") {
          return card.helperRequirements?.helperType === filterValue;
        }
        if (filterKey === "Формат") {
          // Сравниваем значение `isOnline` с фильтром
          return filterValue === "online" ? card.helperRequirements?.isOnline === true : card.helperRequirements?.isOnline === false;
        }
        return true;
      })
    );
  });

  const paginatedCards = filteredCards.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  return (
    <Box display="flex" flexDirection="column" sx={{ width: "100%", boxSizing: "border-box", paddingX: 2, paddingY: 4 }}>
      <Typography variant="h4" sx={{ textAlign: "left" }}>Запросы о помощи</Typography>

      <Box display="flex" mt={2} flex="1">
        <Box sx={{ width: theme.spacing(32), marginRight: theme.spacing(1.5) }}>
          <FilterSidebar
            setFilters={setFilters}
            filters={filters}
            selectedVolunteerFilters={selectedVolunteerFilters}
            setSelectedVolunteerFilters={setSelectedVolunteerFilters}
          />
        </Box>

        <Box flex="1" display="flex" flexDirection="column" height="100%">
          <SearchSection />

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
            <Box display="flex" flexDirection="row" justifyContent="space-between">
              <Typography variant="h6">Найдено: {filteredCards.length}</Typography>

              <Box>
                <ButtonIcon
                  src={GridonRounded}
                  alt="Grid View"
                  onClickTable={() => handleDisplayModeChange("grid")}
                  sx={{
                    backgroundColor: displayMode === "grid" ? "rgba(0, 0, 0, 0.08)" : "transparent",
                  }}
                />
                <ButtonIcon
                  src={ListAltRounded}
                  alt="List View"
                  onClickTable={() => handleDisplayModeChange("list")}
                  sx={{
                    backgroundColor: displayMode === "list" ? "rgba(0, 0, 0, 0.08)" : "transparent",
                  }}
                />
                <ButtonIcon src={LocationOnFilled} alt="Map View" />
              </Box>
            </Box>

            {isLoading ? (
              <Typography>Загрузка...</Typography>
            ) : error ? (
              <ErrorBlock />
            ) : (
              <>
                <ResultSection
                  cards={paginatedCards.map((card: HelpRequestData) => ({
                    ...card,
                    collectedAmount: card.requestGoalCurrentValue,
                    targetAmount: card.requestGoal,
                    contributorsCount: card.contributorsCount,
                  }))}
                  onCardClick={handleCardClick}
                  displayMode={displayMode}
                />
                <Pagination
                  count={totalPages}
                  page={page}
                  onChange={handlePageChange}
                  sx={{ mt: 2, display: "flex", justifyContent: "center" }}
                />
              </>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CatalogPage;
