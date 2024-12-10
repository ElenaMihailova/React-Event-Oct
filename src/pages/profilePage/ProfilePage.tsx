import { useState } from "react";
import {
  Box,
  Container,
  Tabs,
  Tab,
  Typography,
  CircularProgress,
} from "@mui/material";
import PersonalRounded from "../../assets/PersonRounded.png";
import { PersonalData } from "./lib/PersonalData";
import { Contacts } from "./lib/Contacts";
import { useLoadUserInfoQuery } from "../../API/RTKQuery/api";
import { ErrorBlock } from "../../components/ErrorBlock";
import { Favorites } from "./lib/Favorites";
import useAuth from "../../auth/AuthProvider";

interface TabsMapping {
  [key: string]: number;
  personalData: number;
  contacts: number;
  favorites: number;
}

export const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("personalData");

  const { data, error, isLoading } = useLoadUserInfoQuery(undefined);

  const firstName = data?.name || "";
  const lastName = data?.lastName || "";
  const status = data?.status || "Начинающий";

  const { logOut } = useAuth();

  const handleLogOut = (): void => {
    logOut();
  };

  const renderContent = () => {
    switch (activeTab) {
      case "personalData":
        return <PersonalData />;
      case "contacts":
        return <Contacts />;
      case "favorites":
        return <Favorites />;
      default:
        return <PersonalData />;
    }
  };

  const tabsMapping: TabsMapping = {
    personalData: 0,
    contacts: 1,
    favorites: 2,
  };

  return (
    <Container
      maxWidth="xl"
      component="section"
      sx={{
        // maxWidth: 1500,
        flex: "grow",
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
          <Box sx={{ width: 320, height: "auto" }}>
            {isLoading && <CircularProgress />}
            {error && (
              <ErrorBlock errorText="Ошибка! Не удалось загрузить запросы" />
            )}
            {data && (
              <Box sx={{ m: 2.5 }}>
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
                  {`${firstName} ${lastName}`}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ textAlign: "left", ml: 2.5, mt: 1.25, mb: 3.75 }}
                >
                  Статус: {status}
                </Typography>
              </Box>
            )}
            <Box
              component="button"
              sx={{ width: 280, height: 42, m: 2.5, fontSize: 24 }}
              onClick={handleLogOut}
            >
              Выйти из аккаунта
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            maxWidth: 1080,
            minHeight: 980, // Минимальная высота
            minWidth: 750, // Минимальная ширина
            height: "auto",
            ml: 2.5,
            pl: 4,
            pt: 1.25,
            mb: 6,
            textAlign: "left",
            backgroundColor: "#FFFFFF",
          }}
        >
          <Tabs
            value={tabsMapping[activeTab]}
            indicatorColor="primary"
            textColor="primary"
            sx={{ width: 388, borderBottom: 1, borderColor: "divider" }}
          >
            <Tab
              label="Личные данные"
              onClick={() => setActiveTab("personalData")}
            />
            <Tab label="Контакты" onClick={() => setActiveTab("contacts")} />
            <Tab label="Избранное" onClick={() => setActiveTab("favorites")} />
          </Tabs>

          <Box
            sx={{
              minHeight: "980px", // Установите минимальную высоту для контента
              minWidth: "600px", // Установите минимальную ширину для контента
            }}
          >
            {renderContent()}
          </Box>
        </Box>
      </Box>
    </Container>
  );
};
