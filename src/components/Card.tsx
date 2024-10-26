import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  LinearProgress,
} from "@mui/material";
import Volunteering from "../assets/Volunteering1.png";
import Person from "../assets/Person.png";
import Organization from "../assets/Organisation.png";

interface HelpRequestData {
  id: string;
  title: string;
  organization: {
    title: string;
    isVerified?: boolean;
  };
  location: {
    district: string;
    city: string;
  };
  goalDescription: string;
  endingDate: string | Date;
  collectedAmount: number;
  targetAmount: number;
  contributorsCount: number;
  requesterType: "person" | "organization";
  helpType: "finance" | "material";
  onClick: () => void;
}

export const CardInformation: React.FC<HelpRequestData> = ({
  title,
  organization,
  location,
  goalDescription,
  endingDate,
  collectedAmount,
  targetAmount,
  contributorsCount,
  requesterType,
  helpType,
  onClick,
}) => {
  const progress = (collectedAmount / targetAmount) * 100;
  const cleanedTitle = title.replace(/^\[\d+\]\s*/, "");

  const selectImage = () => {
    if (requesterType === "person" && helpType === "finance") {
      return Person;
    } else if (requesterType === "organization") {
      return Organization;
    } else if (requesterType === "person" && helpType === "material") {
      return Volunteering;
    }
    return Volunteering;
  };

  return (
    <Box sx={{ width: "30%", display: "flex", alignItems: "stretch" }}>
      <Card
        variant="outlined"
        sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}
      >
        <CardContent
          sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}
        >
          <Box
            component="img"
            sx={{
              display: "block",
              width: "220px",
              height: "220px",
              mx: "auto",
            }}
            src={selectImage()}
            alt="Фото Запроса"
          />

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
    </Box>
  );
};
