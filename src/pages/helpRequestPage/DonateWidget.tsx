import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  LinearProgress,
} from "@mui/material";

const DonateWidget = () => {
  return (
    <Box width={320}>
      <Card variant="outlined">
        <CardContent>
          <Typography
            sx={{ fontWeight: "bold", marginTop: 1, marginBottom: 1.5 }}
            variant="h5"
            fontSize={20}
          >
            Вместе для добрых дел
          </Typography>

          <Typography variant="subtitle2">Цель сбора:</Typography>
          <Typography>
            Оплатить лечение МКБ в клинике "Здоровье". Купить одежду на зимний
            сезон...
          </Typography>

          <Typography variant="subtitle2" mt={2}>
            Завершение
          </Typography>

          <Typography variant="body2">20.03.2025</Typography>

          <Typography variant="subtitle2" mt={2}>
            Мы собрали
          </Typography>
          <Box sx={{ width: "100%" }}>
            <LinearProgress variant="determinate" value={40} />
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
          <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
            Помочь
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default DonateWidget;
