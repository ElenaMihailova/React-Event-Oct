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
    //TODO 
    <Box 
      display="flex" 
      flexDirection="column"
      sx={{
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
        boxSizing: 'border-box',
        paddingLeft: '16px',
        paddingRight: '16px',
        padding: '24px',
        backgroundColor: '#F5F5F5',
        minHeight: '100vh',  // Минимальная высота экрана
      }}
    >
      <Typography variant="h4" mb={2}>
        Запросы о помощи
      </Typography>

      <Box display="flex" mt={2} flex="1">
        <Box
          sx={{
            width: theme.spacing(32),
            height: '100vh',
            marginRight: theme.spacing(1.5),
          }}
        >
          <FilterSidebar />
        </Box>

        <Box flex="1" display="flex" flexDirection="column" height="100%">
          <SearchSection />
          
          <Box 
            sx={{
              backgroundColor: 'white',
              padding: `${theme.spacing(2.5)}`,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              borderRadius: theme.shape.borderRadius,
              flex: 1,
              minHeight: '100%',
            }}
          >
            <ResultSection page={page} itemsPerPage={itemsPerPage} />
            <Pagination count={totalPages} page={page} onChange={handlePageChange} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CatalogPage;
