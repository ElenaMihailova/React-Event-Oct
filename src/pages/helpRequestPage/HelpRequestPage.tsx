import { Box, Typography, Container } from "@mui/material";

import DonateWidget from "./DonateWidget";
import HelpMainInformation from "./HelpMainInformation";

const HelpRequestPage = () => {
  return (
    <Container
      component="section"
      sx={{ p: 3, background: "#F5F5F5", marginY: 0, marginX: "auto" }}
    >
      <Typography variant="h3" fontSize={34} align="left" py={3}>
        Запрос о помощи
      </Typography>
      <Box sx={{ display: "flex", gap: 2 }}>
        <HelpMainInformation />
        <DonateWidget />
      </Box>
    </Container>
  );
};

export default HelpRequestPage;
