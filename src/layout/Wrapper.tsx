import React from 'react';
import { Box } from '@mui/material';
import Header from './Header';
import Footer from './Footer';

interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      minHeight="100vh"
      margin="auto"    
      padding="0"     
      textAlign="center" 
    >
      <Header />
      <Box
        component="main"
        flex="1"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default Wrapper;