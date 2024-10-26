import React, { useState } from 'react';
import { Box, Typography, useTheme, Pagination } from '@mui/material';
import { FilterSidebar } from '../components/FilterSidebar';
import SearchSection from '../components/SearchSection';
import { ResultSection } from '../components/ResultSection';

export const CatalogPage: React.FC = () => {
  const theme = useTheme();
  const [page, setPage] = useState(1);

  const itemsPerPage = 3;
  const totalItems = 9;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <Box display="flex" flex='1' width="100%" flexDirection="column">
      <Typography variant="h4" mb={2}>
        Запросы о помощи
      </Typography>

      <Box display="flex" mt={2}>
        <Box
          sx={{
            width: theme.spacing(32),
            height: '100vh',
          }}
        >
          <FilterSidebar />
        </Box>


        <Box flex="1" display="flex" flexDirection="column" gap={2}>
          <SearchSection />
          <Box>
            <ResultSection page={page} itemsPerPage={itemsPerPage} />
            <Pagination count={totalPages} page={page} onChange={handlePageChange} />
          </Box>


        </Box>
      </Box>
    </Box>
  );
};

export default CatalogPage;
