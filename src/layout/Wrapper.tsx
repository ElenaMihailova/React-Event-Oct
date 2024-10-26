import React from "react";
import { Box, Container } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";

interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Header />
      <Container component="main" maxWidth="md" sx={{ flexGrow: 1 }}>
        {children}
      </Container>
      <Footer />
    </Box>
  );
};

export default Wrapper;
