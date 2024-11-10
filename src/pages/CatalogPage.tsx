import React, { useState } from "react";
import { Box, Typography, useTheme, Pagination } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { FilterSidebar } from "../components/FilterSidebar";
import SearchSection from "../components/SearchSection";
import { ResultSection } from "../components/ResultSection";
import { useGetRequestCardsQuery } from "../API/RTKQuery/api";
import { ErrorBlock } from "../components/ErrorBlock";

import { EmptyBlock } from "../components/EmpryBlock";
import { HelpRequestData } from "../types/types";
import MapBlock from "../components/Map";
import { ViewToggleGroup } from "../components/ViewToggleGroup";

export const CatalogPage: React.FC = () => {
  const theme = useTheme();
  const [page, setPage] = useState(1);
  const itemsPerPage = 3;

  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");

  const {
    data: cards = [],
    isLoading,
    error,
  } = useGetRequestCardsQuery(undefined);

  const totalPages = Math.ceil(cards.length / itemsPerPage);

  const [displayMode, setDisplayMode] = useState<"grid" | "list" | "map">(
    "grid",
  );
  const [filters, setFilters] = useState<{ [key: string]: string | null }>({});
  const [selectedVolunteerFilters, setSelectedVolunteerFilters] = useState<{
    [key: string]: string | null;
  }>({});

  const handleDisplayModeChange = (mode: "grid" | "list" | "map") => {
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

  const filteredCards = cards.filter((card: HelpRequestData) => {
    const matchesFilters = Object.entries(filters).every(
      ([filterKey, filterValue]) => {
        if (filterValue === null) return true;

        if (filterKey === "Кому мы помогаем") {
          return card.requesterType === filterValue;
        }
        if (filterKey === "Чем мы помогаем") {
          return card.helpType === filterValue;
        }
        return true;
      },
    );

    const matchesVolunteerFilters = Object.entries(
      selectedVolunteerFilters,
    ).every(([filterKey, filterValue]) => {
      if (filterValue === null) return true;

      if (filterKey === "Специализация") {
        return card.helperRequirements?.qualification === filterValue;
      }
      if (filterKey === "Необходимо волонтеров") {
        return card.helperRequirements?.helperType === filterValue;
      }
      if (filterKey === "Формат") {
        return filterValue === "online"
          ? card.helperRequirements?.isOnline === true
          : card.helperRequirements?.isOnline === false;
      }
      return true;
    });

    const matchesSearch =
      searchText === "" ||
      card.title.toLowerCase().includes(searchText.toLowerCase()) ||
      card.organization.title.toLowerCase().includes(searchText.toLowerCase());

    return matchesFilters && matchesVolunteerFilters && matchesSearch;
  });

  const paginatedCards = filteredCards.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage,
  );

  return (
    <Box
      display="flex"
      flexDirection="column"
      sx={{ width: "100%", boxSizing: "border-box", paddingX: 2, paddingY: 4 }}
    >
      <Typography variant="h4" sx={{ textAlign: "left" }}>
        Запросы о помощи
      </Typography>

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
          <SearchSection onSearchChange={setSearchText} />

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
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              marginBottom={3}
            >
              <Typography variant="h6">
                Найдено: {filteredCards.length}
              </Typography>
              <ViewToggleGroup
                handleDisplayModeChange={handleDisplayModeChange}
                displayMode={displayMode}
              />
            </Box>

            {isLoading ? (
              <Typography>Загрузка...</Typography>
            ) : error ? (
              <ErrorBlock />
            ) : filteredCards.length === 0 ? (
              <EmptyBlock />
            ) : displayMode === "map" ? (
              <MapBlock
                requests={filteredCards}
                onMarkerClick={handleCardClick}
              />
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
