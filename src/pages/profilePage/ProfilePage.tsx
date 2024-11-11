import { useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import PersonalRounded from "../../assets/PersonRounded.png";
import { PersonalData } from "./lib/PersonalData";
import { Contacts } from "./lib/Contacts";
import { useLoadUserInfoQuery } from "../../API/RTKQuery/api";
import { Favorites } from "./lib/Favorites";
import useAuth from "../../auth/AuthProvider";
import { ProfileTabs } from "../../components/ProfilTabs";

export const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("personalInfo");

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
      case "personalInfo":
        return <PersonalData />;
      case "contacts":
        return <Contacts />;
      case "favorites":
        return <Favorites />;
      default:
        return <PersonalData />;
    }
  };

  return (
    <Stack
      sx={{ width: "100%", boxSizing: "border-box", paddingX: 2, paddingY: 4 }}
    >

      <Typography variant="h2" sx={{ textAlign: "left" }}>
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
              {isLoading ? (
                "Загрузка..."
              ) : error ? (
                <>Ошибка</>
              ) : (
                `${firstName} ${lastName}`
              )}
            </Typography>
            <Typography
              variant="body2"
              sx={{ textAlign: "left", ml: 2.5, mt: 1.25, mb: 3.75 }}
            >
              Статус: {status}
            </Typography>
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

          <ProfileTabs activeButton={activeTab} setActiveButton={setActiveTab} />
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
    </Stack>
  );
};
