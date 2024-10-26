import React from 'react';
import { Box, Pagination } from '@mui/material';

interface PaginationProps {
  count: number;
  page: number;
  onChange: (event: React.ChangeEvent<unknown>, value: number) => void;
}

export const PaginationComponent: React.FC<PaginationProps> = ({ count, page, onChange }) => {
  return (
    <Box mt={2} display="flex" justifyContent="center">
      <Pagination
        count={count}
        page={page}
        onChange={onChange}
        color="primary"
      />
    </Box>
  );
};
