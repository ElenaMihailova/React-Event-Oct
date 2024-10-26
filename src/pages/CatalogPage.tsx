import React, { useState } from "react";
import { Box, Typography, useTheme, Pagination } from "@mui/material";
import { FilterSidebar } from "../components/FilterSidebar";
import SearchSection from "../components/SearchSection";
import { ResultSection } from "../components/ResultSection";
import { useGetRequestCardsQuery } from "../API/RTKQuery/api";
import { ErrorBlock } from "../components/ErrorBlock";

import { ButtonIcon } from "../components/IconButton";
import GridonRounded from "../assets/icon/GridonRounded.png";
import ListAltRounded from "../assets/icon/ListAltRounded.png";
import LocationOnFilled from "../assets/icon/LocationOnFilled.png";

interface CardData {
  id: string;
  title: string;
  description: string;
}

export const CatalogPage: React.FC = () => {
  const theme = useTheme();
  const [page, setPage] = useState(1);
  const itemsPerPage = 3;

  const { data: cards = [], isLoading, error } = useGetRequestCardsQuery();
  const totalPages = Math.ceil(cards.length / itemsPerPage);

  const handlePageChange = (
    _event: React.ChangeEvent<unknown>,
    value: number,
  ) => {
    setPage(value);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      sx={{
        width: "100%",
        boxSizing: "border-box",
        paddingX: 2,
        paddingY: 4,
      }}
    >
      <Typography
        variant="h4"
        sx={{
          textAlign: "left",
        }}
      >
        Запросы о помощи
      </Typography>

      <Box display="flex" mt={2} flex="1">
        <Box
          sx={{
            width: theme.spacing(32),
            marginRight: theme.spacing(1.5),
          }}
        >
          <FilterSidebar />
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
              <Typography variant="h6">Найдено:</Typography>

              <Box>
                <ButtonIcon src={ListAltRounded} alt="List View" />
                <ButtonIcon src={GridonRounded} alt="Grid View" />
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
                  cards={cards.slice(
                    (page - 1) * itemsPerPage,
                    page * itemsPerPage,
                  )}
                />
                <Pagination
                  count={totalPages}
                  page={page}
                  onChange={handlePageChange}
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
