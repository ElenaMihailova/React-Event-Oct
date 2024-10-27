import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  LinearProgress,
} from "@mui/material";
import Star from "../../../assets/star-filled.svg";

interface propsData {
  img: string,
  for: string,
  organizer: string,
  loc: {
    reg: string,
    city: string
  },
  target: string,
  status: string,
  sum1: number,
  sum2: number,
  final: string,
  philantropists: number
}

export const HelpReqCard = (props: propsData) => {
  return (
    <Box sx={{ width: 320, height: 843, pt: 2, pr: 3 }}>
      <Card variant="outlined">
        <CardContent>
          <Box
            component="img"
            sx={{ display: "block", height: 220, mx: "auto" }}
            src={props.img}
            alt="Фото Запроса"
          />

          <Box sx={{ height: 128, display: "flex", borderBottom: 1  }}>
            <Typography
              sx={{ width: 256, height: 96, marginTop: 1, mt: 2, mb: 2}}
              variant="h5"
            >
              {props.for}
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
              {props.organizer}
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
              <Typography variant="body2">{props.loc.reg}</Typography>
            </Box>
            <Box sx={{ display: "flex", mb: 1 }}>
              <Typography variant="body2" sx={{ fontWeight: 500, mr: 0.5 }}>
                Населённый пункт:
              </Typography>
              <Typography variant="body2">{props.loc.city} Владимир</Typography>
            </Box>
          </Box>

          <Box sx={{ mt: 1.125, mb: 2.25 }}>
            <Typography variant="subtitle2" sx={{ textWeight: 500 }}>
              Цель сбора
            </Typography>
            <Typography variant="body2">
              {props.target}
            </Typography>
          </Box>

          <Box sx={{ mt: 1.125, mb: 2.25 }}>
            <Typography variant="subtitle2" sx={{ textWeight: 500, mt: 2 }}>
              {props.status}
            </Typography>
            <Typography variant="body2">{props.final}</Typography>
          </Box>

          <Typography variant="subtitle2" sx={{ textWeight: 500, mt: 2 }}>
            Мы собрали
          </Typography>
          <Box>
            <LinearProgress
              variant="determinate"
              value={(props.sum1/props.sum2)*100}
              color="secondary"
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
              {props.sum1.toLocaleString('ru-RU')} руб
            </Typography>
            <Typography variant="body2" color="textSecondary">
              из {props.sum2.toLocaleString('ru-RU')} руб
            </Typography>
          </Box>

          <Typography variant="body2" color="textSecondary" mt={2}>
            Нас уже {props.philantropists.toLocaleString('ru-RU')}
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
