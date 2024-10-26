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

import ButtonInFavorites from "./ButtonInFavorites";
import CheckListIcon from "./lib/CheckListIcon";

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
                sx={{ fontWeight: "bold", paddingTop: 4, paddingBottom: 1.5 }}
                variant="h5"
                fontSize={20}
              >
                Организация
              </Typography>
              <Typography>
                Фонд помощи для ветеранов и инвалидов "Вера"
              </Typography>

              <Typography
                sx={{ fontWeight: "bold", paddingTop: 4, paddingBottom: 1.5 }}
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
                sx={{ fontWeight: "bold", paddingTop: 4, paddingBottom: 1.5 }}
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
                sx={{ fontWeight: "bold", paddingTop: 4, paddingBottom: 1.5 }}
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
                sx={{ fontWeight: "bold", paddingTop: 4, paddingBottom: 1.5 }}
                variant="h5"
                fontSize={20}
              >
                Завершение
              </Typography>
              <Typography>20.03.2025</Typography>

              <Typography
                sx={{ fontWeight: "bold", paddingTop: 4, paddingBottom: 1.5 }}
                variant="h5"
                fontSize={20}
              >
                Локация
              </Typography>
              <Typography>
                область: Владимирская
                <br />
                Населённый пункт: Владимир
              </Typography>

              <Typography variant="body1" mt={2}>
                Контакты
              </Typography>
              <Typography>
                Телефон: +7 999 888 99 50
                <br />
                E-mail: forExample2@yandex.ru
                <br />
                Сайт: forexamplehelp.ru
              </Typography>
            </CardContent>
            <CardContent>
              <ButtonInFavorites onClick={() => {}} filled={false}>
                В избранное
              </ButtonInFavorites>
            </CardContent>
          </Card>
        </Box>

        {/* Right Column */}
        <Box>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h6">Вместе для добрых дел</Typography>

              <Typography>
                Цель сбора: Оплатить лечение МКБ в клинике "Здоровье". Купить
                одежду на зимний сезон...
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
              <Button
                variant="contained"
                color="primary"
                fullWidth
                sx={{ mt: 2 }}
              >
                ПОМОЧЬ
              </Button>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Container>
  );
};

export default HelpRequestPage;
