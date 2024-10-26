import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  List,
  ListItem,
  ListItemText,
  Divider,
  Container,
  ListItemIcon,
} from "@mui/material";

import ButtonInFavorites from "./lib/ButtonInFavorites";
import CheckListIcon from "./lib/CheckListIcon";
import DonateWidget from "./DonateWidget";

const HelpRequestPage = () => {
  return (
    <Container
      component="section"
      sx={{ p: 3, background: "#F5F5F5", marginY: 0, marginX: "auto" }}
    >
      <Typography variant="h3" fontSize={34} align="left" py={3}>
        Запрос о помощи
      </Typography>
      <Box sx={{ display: "flex", gap: 2 }}>
        <Box>
          <Card variant="outlined" sx={{ py: 3, px: 2, display: "flex" }}>
            <CardContent>
              <Typography variant="h4" fontSize={24}>
                Сбор средств для пенсионерки Ангелины Ивановны
              </Typography>
              <Typography
                sx={{ fontWeight: "bold", marginTop: 4, marginBottom: 1.5 }}
                variant="h5"
                fontSize={20}
              >
                Организация
              </Typography>
              <Typography>
                Фонд помощи для ветеранов и инвалидов "Вера"
              </Typography>

              <Typography
                sx={{ fontWeight: "bold", marginTop: 4, marginBottom: 1.5 }}
                variant="h5"
                fontSize={20}
              >
                Кому мы помогаем
              </Typography>
              <Typography>
                Мы помогаем пенсионерке Ангелине Ивановне. Ей 82 года, и, к
                сожалению, её здоровье в последние годы значительно
                ухудшилось...
              </Typography>

              <Typography
                sx={{ fontWeight: "bold", marginTop: 4, marginBottom: 1.5 }}
                variant="h5"
                fontSize={20}
              >
                Цель сбора
              </Typography>
              <Typography>
                Оплатить лечение МКБ в клинике "Здоровье". Купить одежду на
                зимний сезон...
              </Typography>

              <Typography
                sx={{ fontWeight: "bold", marginTop: 4, marginBottom: 1.5 }}
                variant="h5"
                fontSize={20}
              >
                План действий
              </Typography>
              <List>
                {[
                  {
                    name: 'Оплатить лечение МКБ в клинике "Здоровье"',
                    checked: false,
                  },
                  {
                    name: "Провести диагностику онкологических заболеваний",
                    checked: false,
                  },
                  { name: "Купить одежду на зимний сезон", checked: false },
                  {
                    name: "Обеспечить уход на дому в течение полугода",
                    checked: true,
                  },
                  { name: "Восполнить необходимые лекарства", checked: true },
                ].map((item, index) => (
                  <ListItem key={index}>
                    <ListItemIcon sx={{ minWidth: 0, paddingRight: 1 }}>
                      <CheckListIcon green={item.checked} />
                    </ListItemIcon>
                    <ListItemText primary={item.name} />
                  </ListItem>
                ))}
              </List>

              <Typography
                sx={{ fontWeight: "bold", marginTop: 4, marginBottom: 1.5 }}
                variant="h5"
                fontSize={20}
              >
                Завершение
              </Typography>
              <Typography>20.03.2025</Typography>

              <Typography
                sx={{ fontWeight: "bold", marginTop: 4, marginBottom: 1.5 }}
                variant="h5"
                fontSize={20}
              >
                Локация
              </Typography>
              <Typography>
                <strong>Oбласть:</strong> Владимирская
              </Typography>
              <Typography>
                <strong>Населённый пункт:</strong> Владимир
              </Typography>

              <Typography
                sx={{ fontWeight: "bold", marginTop: 4, marginBottom: 1.5 }}
                variant="h5"
                fontSize={20}
              >
                Контакты
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box>
                  <Typography>
                    <strong>Телефон:</strong>
                  </Typography>
                  <Typography>+7 999 888 99 50</Typography>
                </Box>
                <Box>
                  <Typography>
                    <strong>E-mail:</strong>
                  </Typography>
                  <Typography>forExample2@yandex.ru</Typography>
                </Box>

                <Box>
                  <Typography>
                    <strong>Сайт:</strong>
                  </Typography>
                  <Typography>forexamplehelp.ru</Typography>
                </Box>
              </Box>
            </CardContent>
            <CardContent>
              <ButtonInFavorites onClick={() => {}} filled={false}>
                В избранное
              </ButtonInFavorites>
            </CardContent>
          </Card>
        </Box>

        <DonateWidget />
      </Box>
    </Container>
  );
};

export default HelpRequestPage;
