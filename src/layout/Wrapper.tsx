import React from "react";
import { Box, Container } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";
import theme from "../theme";

interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Header />
      <Container
        component="main"
        sx={{
          flexGrow: 1,
          width: "100%",
          maxWidth: theme.breakpoints.values.lg,
          background: theme.palette.background.default,
          paddingTop: 8,
        }}
      >
        {children}
      </Container>
      <Footer />
    </Box>
  );
};

export default Wrapper;
