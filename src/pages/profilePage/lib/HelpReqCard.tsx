import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  LinearProgress,
} from "@mui/material";
import Volunteering from "../../../assets/Volunteering1.png";
import Star from "../../../assets/star-filled.svg";

export const HelpReqCard = () => {
  return (
    <Box sx={{ width: 320, height: 843, p: 3 }}>
      <Card variant="outlined">
        <CardContent>
          <Box
            component="img"
            sx={{ display: "block", height: 220, mx: "auto" }}
            src={Volunteering}
            alt="Фото Запроса"
          />

          <Box sx={{ height: 128, display: "flex" }}>
            <Typography
              sx={{ width: 256, height: 96, marginTop: 1, mt: 2, mb: 2 }}
              variant="h5"
            >
              Сбор средств для пенсионерки Ангелины Ивановны
            </Typography>
            <Box
              sx={{
                width: 32,
                height: 32,
                border: 1,
                borderRadius: 0.5,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mt: 2,
                color: "rgba(0, 0, 0, 0.12)",
              }}
            >
              <Box
                component="img"
                sx={{ display: "block", height: 24, width: 24 }}
                src={Star}
                alt="Фото Запроса"
              />
            </Box>
          </Box>

          <Box sx={{ mt: 1.125, mb: 2.25 }}>
            <Typography variant="subtitle2" sx={{ textWeight: 500 }}>
              Организатор
            </Typography>
            <Typography variant="body2">
              Фонд помощи для ветеранов и инвалидов "Вера"
            </Typography>
          </Box>

          <Box sx={{ mt: 1.125, mb: 2.25 }}>
            <Typography variant="subtitle2" sx={{ textWeight: 500 }}>
              Локация
            </Typography>
            <Box sx={{ display: "flex", mb: 1 }}>
              <Typography variant="body2" sx={{ fontWeight: 500, mr: 0.5 }}>
                Область:
              </Typography>
              <Typography variant="body2">Владимирская</Typography>
            </Box>
            <Box sx={{ display: "flex", mb: 1 }}>
              <Typography variant="body2" sx={{ fontWeight: 500, mr: 0.5 }}>
                Населённый пункт:
              </Typography>
              <Typography variant="body2">Владимир</Typography>
            </Box>
          </Box>

          <Box sx={{ mt: 1.125, mb: 2.25 }}>
            <Typography variant="subtitle2" sx={{ textWeight: 500 }}>
              Цель сбора
            </Typography>
            <Typography variant="body2">
              Оплатить лечение МКБ в клинике "Здоровье". Купить одежду на зимний
              сезон...
            </Typography>
          </Box>

          <Box sx={{ mt: 1.125, mb: 2.25 }}>
            <Typography variant="subtitle2" sx={{ textWeight: 500, mt: 2 }}>
              Завершение
            </Typography>
            <Typography variant="body2">20.03.2025</Typography>
          </Box>

          <Typography variant="subtitle2" sx={{ textWeight: 500, mt: 2 }}>
            Мы собрали
          </Typography>
          <Box>
            <LinearProgress variant="determinate" value={40} color="primary" />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mt: 1,
              mb: 2,
            }}
          >
            <Typography variant="body2" color="textSecondary">
              1 102 563 руб
            </Typography>
            <Typography variant="body2" color="textSecondary">
              из 2 056 489 руб
            </Typography>
          </Box>

          <Typography variant="body2" color="textSecondary" mt={2}>
            Нас уже 3 566 987
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{ mt: 2, width: 288 }}
          >
            Помочь
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};
