import { Box, Typography, LinearProgress, Button } from "@mui/material";

interface CardContentSectionProps {
  title: string;
  organization: { title: string; isVerified?: boolean };
  location: { district: string; city: string };
  goalDescription: string;
  endingDate: string | Date;
  collectedAmount: number;
  targetAmount: number;
  contributorsCount: number;
  onClick?: () => void;
}

export const CardContentSection: React.FC<CardContentSectionProps> = ({
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
  const progressValue = (collectedAmount / targetAmount) * 100;
  const cleanedTitle = title.replace(/^\[\d+\]\s*/, "");

  return (
    <Box sx={{ alignItems: "stretch", display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
      <Typography variant="h5" sx={{ mt: 2, mb: 2, textAlign: "center" }}>
        {cleanedTitle}
      </Typography>

      <Box sx={{ textAlign: "left", width: "100%", mb: 1 }}>
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

      <Box sx={{ width: "100%" }}>
        <Typography variant="subtitle2" sx={{ mt: 2 }}>
          Мы собрали
        </Typography>
        <LinearProgress
          variant="determinate"
          value={progressValue}
          color="primary"
          sx={{ height: 8, borderRadius: 1, mt: 1 }}
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

        <Typography variant="body2" color="textSecondary" sx={{ mb: 2, textAlign: "center" }}>
          Нас уже {contributorsCount.toLocaleString()}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{ width: "100%", mt: 1 }}
          onClick={onClick}
        >
          Помочь
        </Button>
      </Box>
    </Box>
  );
};
