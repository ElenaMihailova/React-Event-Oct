import React, { useState, useMemo } from "react";
import { Box, Typography, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { FilterSidebar } from "../components/filter-slidebar/FilterSidebar";
import SearchSection from "../components/SearchSection";
import { useGetRequestCardsQuery } from "../API/RTKQuery/api";
import ContentDisplayPanel from "../components/ContentDisplayPanel";

import {
  matchesFilters,
  matchesVolunteerFilters,
  matchesSearch,
} from "../utils/FilterHelper";

export const CatalogPage: React.FC = () => {
  // Навигация
  const navigate = useNavigate();

  // Пагинация и количество элементов на странице
  const [page, setPage] = useState(1);
  const itemsPerPage = 3;

  // Фильтрация и поиск
  const [searchText, setSearchText] = useState("");
  const [displayMode, setDisplayMode] = useState<"grid" | "list" | "map">(
    "grid",
  );
  const [filters, setFilters] = useState<{ [key: string]: string | null }>({});
  const [selectedVolunteerFilters, setSelectedVolunteerFilters] = useState<{
    [key: string]: string | null;
  }>({});
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  // Данные из API
  const {
    data: cards = [],
    isLoading,
    error,
  } = useGetRequestCardsQuery(undefined);

  // Обработчики событий
  const handleDisplayModeChange = (mode: "grid" | "list" | "map") =>
    setDisplayMode(mode);
  const handlePaginationChange = (
    _event: React.ChangeEvent<unknown>,
    value: number,
  ) => setPage(value);
  const handleCardClick = (id: string) => navigate(`/details?id=${id}`);
  const handleDateChange = (date: string | null) => {
    setSelectedDate(date);
    setFilters((prev) => ({ ...prev, date: date }));
  };

  // Мемоизированные значения
  const filteredCards = useMemo(() => {
    return cards.filter(
      (card) =>
        matchesFilters(card, filters, selectedDate) &&
        matchesVolunteerFilters(card, selectedVolunteerFilters) &&
        matchesSearch(card, searchText),
    );
  }, [cards, filters, selectedVolunteerFilters, searchText, selectedDate]);

  const paginatedCards = useMemo(
    () => filteredCards.slice((page - 1) * itemsPerPage, page * itemsPerPage),
    [filteredCards, page, itemsPerPage],
  );

  const totalPages = useMemo(
    () => Math.ceil(filteredCards.length / itemsPerPage),
    [filteredCards.length, itemsPerPage],
  );

  return (
    <Stack
      sx={{ width: "100%", boxSizing: "border-box", paddingX: 2, paddingY: 4 }}
    >
      <Typography variant="h2" sx={{ textAlign: "left" }}>
        Запросы о помощи
      </Typography>

      <Box sx={{ display: "flex", marginTop: 2, flex: "1", flexWrap: "wrap" }}>
        <FilterSidebar
          setFilters={setFilters}
          filters={filters}
          selectedVolunteerFilters={selectedVolunteerFilters}
          setSelectedVolunteerFilters={setSelectedVolunteerFilters}
          onDateChange={handleDateChange}
        />
        <Stack sx={{ flex: "1", height: "100%" }}>
          <SearchSection onSearchChange={setSearchText} />

          <ContentDisplayPanel
            filteredCards={filteredCards}
            displayMode={displayMode}
            onDisplayModeChange={handleDisplayModeChange}
            paginatedCards={paginatedCards}
            onCardClick={handleCardClick}
            isLoading={isLoading}
            error={!!error}
            page={page}
            totalPages={totalPages}
            onPageChange={handlePaginationChange}
          />
        </Stack>
      </Box>
    </Stack>
  );
};

export default CatalogPage;
