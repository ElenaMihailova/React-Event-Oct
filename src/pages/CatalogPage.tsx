import React, { useState, useEffect } from "react";
import { Box, Typography, useTheme, Pagination } from "@mui/material";
import axios from "axios";
import { FilterSidebar } from "../components/FilterSidebar";
import SearchSection from "../components/SearchSection";
import { ResultSection } from "../components/ResultSection";

// Тип для данных карточек
interface CardData {
  id: string;
  title: string;
  description: string;
}

export const CatalogPage: React.FC = () => {
  const theme = useTheme();
  const [page, setPage] = useState(1);
  const [cards, setCards] = useState<CardData[]>([]);  // Инициализация как пустой массив
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const itemsPerPage = 3;
  const totalPages = Math.ceil(cards.length / itemsPerPage);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        setLoading(true);
        
        // Лог перед отправкой запроса
        console.log("Запрос данных карточек...");

        const response = await axios.get<CardData[]>("/api/request");

        // Лог после получения ответа
        console.log("Ответ сервера:", response.data);

        setCards(response.data || []);
      } catch (err) {
        setError("Ошибка при загрузке данных.");
        console.error("Ошибка при запросе:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCards();
  }, []);

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
        paddingTop: theme.spacing(4),
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
            {loading ? (
              <Typography>Загрузка...</Typography>
            ) : error ? (
              <Typography color="error">{error}</Typography>
            ) : (
              <>
                <ResultSection
                  cards={cards.slice(
                    (page - 1) * itemsPerPage,
                    page * itemsPerPage
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
