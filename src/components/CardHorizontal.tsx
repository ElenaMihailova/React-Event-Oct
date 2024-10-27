import {
  Box,
  CardContent,
  Typography,
  LinearProgress,
  Button,
  Card,
} from "@mui/material";
import { HelpRequestData } from "./Card";

export const CardHorizontal: React.FC<HelpRequestData> = ({
  title,
  organization,
  location,
  goalDescription,
  endingDate,
  collectedAmount,
  targetAmount,
  contributorsCount,
  onClick,
}) => {
  const progress = (collectedAmount / targetAmount) * 100;
  const cleanedTitle = title.replace(/^\[\d+\]\s*/, "");

  return (
    <Card variant="outlined">
      <CardContent
        sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h5" sx={{ mt: 2, mb: 2 }}>
            {cleanedTitle}
          </Typography>
          <Typography variant="subtitle2">Организатор</Typography>
          <Typography variant="body2">{organization.title}</Typography>

          <Typography variant="subtitle2" sx={{ mt: 2 }}>
            Локация
          </Typography>
          <Typography variant="body2">
            {location.district}, {location.city}
          </Typography>

          <Typography variant="subtitle2" sx={{ mt: 2 }}>
            Цель сбора
          </Typography>
          <Typography variant="body2">{goalDescription}</Typography>

          <Typography variant="subtitle2" sx={{ mt: 2 }}>
            Завершение
          </Typography>
          <Typography variant="body2">
            {new Date(endingDate).toLocaleDateString()}
          </Typography>
        </Box>

        <Box>
          <Typography variant="subtitle2" sx={{ mt: 2 }}>
            Мы собрали
          </Typography>
          <LinearProgress
            variant="determinate"
            value={progress}
            color="secondary"
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mt: 1,
              mb: 2,
            }}
          >
            <Typography variant="body2">
              {collectedAmount.toLocaleString()} руб
            </Typography>
            <Typography variant="body2">
              из {targetAmount.toLocaleString()} руб
            </Typography>
          </Box>

          <Typography variant="body2" color="textSecondary" mt={2}>
            Нас уже {contributorsCount.toLocaleString()}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{ mt: 2, width: "100%" }}
            onClick={onClick}
          >
            Помочь
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};
