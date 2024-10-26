import {
  Box,
  Card,
  CardContent,
  Typography,
  Divider,
  Button,
} from "@mui/material";

const DonateWidget = () => {
  return (
    <Box>
      <Card variant="outlined">
        <CardContent>
          <Typography
            sx={{ fontWeight: "bold", marginTop: 1, marginBottom: 1.5 }}
            variant="h5"
            fontSize={20}
          >
            Вместе для добрых дел
          </Typography>

          <Typography>
            Цель сбора: Оплатить лечение МКБ в клинике "Здоровье". Купить одежду
            на зимний сезон...
          </Typography>

          <Typography variant="body1" mt={2}>
            Завершение
          </Typography>
          <Typography>20.03.2025</Typography>

          <Typography variant="body1" mt={2}>
            Мы собрали
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mt: 1,
              mb: 2,
            }}
          >
            <Typography variant="h6">1 102 563 руб</Typography>
            <Typography color="textSecondary">из 2 056 489 руб</Typography>
          </Box>

          <Divider />

          <Typography variant="h6" mt={2}>
            Нас уже 3 566 987
          </Typography>
          <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
            ПОМОЧЬ
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default DonateWidget;
