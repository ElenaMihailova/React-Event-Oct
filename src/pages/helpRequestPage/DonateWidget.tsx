import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  LinearProgress,
} from "@mui/material";

interface DonateWidgetProps {
  requestId: string;
  requestGoal: number;
  requestGoalCurrentValue: number;
}

const DonateWidget = ({
  requestId,
  requestGoal,
  requestGoalCurrentValue,
}: DonateWidgetProps) => {
  return (
    <Box width={320}>
      <Card variant="outlined">
        <CardContent>
          <Typography sx={{ marginTop: 1, marginBottom: 1.5 }} variant="h6">
            Вместе для добрых дел
          </Typography>

          <Typography variant="subtitle2">Цель сбора:</Typography>
          <Typography variant="body2">
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
            <LinearProgress
              variant="determinate"
              color="secondary"
              value={33}
            />
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
              {requestGoalCurrentValue}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {requestGoal}
            </Typography>
          </Box>

          <Typography variant="body2" color="textSecondary" mt={2}>
            Нас уже 3 566 987
          </Typography>
          <Button
            onClick={() => console.log(requestId)}
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
          >
            Помочь
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default DonateWidget;
