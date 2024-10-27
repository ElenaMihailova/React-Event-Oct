import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  LinearProgress,
} from "@mui/material";
import { toast } from "react-toastify";

interface DonateWidgetProps {
  requestId: string;
  requestGoal: number;
  requestGoalCurrentValue: number;
  endingDate: string;
}

const DonateWidget = ({
  requestId,
  requestGoal: requestGoalCurrentValue,
  requestGoalCurrentValue: requestGoal,
  endingDate,
}: DonateWidgetProps) => {
  const date = new Date(endingDate);
  const formattedDate = `${String(date.getDate()).padStart(2, "0")}.${String(date.getMonth() + 1).padStart(2, "0")}.${date.getFullYear()}`;
  const handleClickHelp = (): void => {
    toast.success("Успех! Спасибо за помощь");
    console.log(requestId);
  };
  const progress = (requestGoalCurrentValue / requestGoal) * 100;
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

          <Typography variant="body2">{formattedDate}</Typography>

          <Typography variant="subtitle2" mt={2}>
            Мы собрали
          </Typography>
          <Box sx={{ width: "100%" }}>
            <LinearProgress
              variant="determinate"
              color="primary"
              value={progress}
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
            onClick={handleClickHelp}
            variant="contained"
            fullWidth
            sx={{
              mt: 2,
              backgroundColor: "#1E88E5",
              color: "#ffffff",
              "&:hover": {
                backgroundColor: "#1565C0",
              },
            }}
          >
            Помочь
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default DonateWidget;
