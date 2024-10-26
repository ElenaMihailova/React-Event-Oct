import { useState } from "react";
import { Box, Container, Tabs, Tab, Typography } from "@mui/material";
import PersonalRounded from "../../assets/PersonRounded.png";
import { PersonalData } from "./lib/PersonalData";
import { Contacts } from "./lib/Contacts";
import { HelpReqCard } from "./lib/HelpReqCard";

export const ProfilePage = () => {
  const [activeButton, setActiveButton] = useState("button1");
  const renderContent = () => {
    switch (activeButton) {
      case "button1":
        return <PersonalData />;
      case "button2":
        return <Contacts />;
      case "button3":
        return (
          <Box sx={{ display: "flex" }}>
            <HelpReqCard />
            <HelpReqCard />
            <HelpReqCard />
          </Box>
        );
      default:
        return <PersonalData />;
    }
  };

  return (
    <Container
      maxWidth="xl"
      component="section"
      sx={{
        width: 1500,
        height: 1138,
        backgroundColor: "#F5F5F5",
        marginY: 0,
        marginX: "auto",
      }}
    >
      <Typography
        variant="h6"
        sx={{ fontWeight: "bold", textAlign: "left", mt: 3.75, mb: 2.5 }}
      >
        Мой профиль:
      </Typography>
      <Box sx={{ display: "flex" }}>
        <Box sx={{ width: 320, height: 436, backgroundColor: "#FFFFFF" }}>
          <Box
            component="img"
            sx={{ width: 320, height: 240 }}
            src={PersonalRounded}
            alt="Фото профиля"
          />
          <Box sx={{ width: 320, height: 196 }}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: "bold",
                textAlign: "left",
                ml: 2.5,
                mt: 2.5,
                mb: 0,
              }}
            >
              Ангелина Фомина
            </Typography>
            <Typography
              variant="body2"
              sx={{ textAlign: "left", ml: 2.5, mt: 1.25, mb: 3.75 }}
            >
              Статус: начинающий
            </Typography>
            <Box
              component="button"
              sx={{ width: 280, height: 42, m: 2.5, fontSize: 24 }}
            >
              Выйти из аккаунта
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            width: 1080,
            height: 982,
            ml: 2.5,
            pl: 4,
            pt: 1.25,
            textAlign: "left",
            backgroundColor: "#FFFFFF",
          }}
        >
          <Tabs
            value={0}
            indicatorColor="primary"
            textColor="primary"
            sx={{ width: 388, borderBottom: 1, borderColor: "divider" }}
          >
            <Tab
              label="Личные данные"
              onClick={() => setActiveButton("button1")}
            />
            <Tab label="Контакты" onClick={() => setActiveButton("button2")} />
            <Tab label="Избранное" onClick={() => setActiveButton("button3")} />
          </Tabs>

          {renderContent()}
        </Box>
      </Box>
    </Container>
  );
};
