import {
  Box,
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import ButtonInFavorites from "./lib/ButtonInFavorites";
import CheckListIcon from "./lib/CheckListIcon";
import verifiedIcon from "./assets/verifyed-icon.svg";

const HelpMainInformation = () => {
  return (
    <Box>
      <Card variant="outlined" sx={{ py: 3, px: 2, display: "flex" }}>
        <CardContent sx={{ maxWidth: "550px" }}>
          <Typography variant="h5">
            Сбор средств для пенсионерки Ангелины Ивановны
          </Typography>
          <Typography sx={{ marginTop: 4, marginBottom: 1.5 }} variant="h6">
            Организация
          </Typography>
          <Typography>Фонд помощи для ветеранов и инвалидов "Вера"</Typography>

          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <img src={verifiedIcon} alt="" />
            <Typography variant="caption">Организация проверена</Typography>
          </Box>

          <Typography sx={{ marginTop: 4, marginBottom: 1.5 }} variant="h6">
            Кому мы помогаем
          </Typography>
          <Typography variant="body2">
            Мы помогаем пенсионерке Ангелине Ивановне. Ей 82 года, и, к
            сожалению, её здоровье в последние годы значительно ухудшилось...
          </Typography>

          <Typography sx={{ marginTop: 4, marginBottom: 1.5 }} variant="h6">
            Цель сбора
          </Typography>
          <Typography variant="body2">
            Оплатить лечение МКБ в клинике "Здоровье". Купить одежду на зимний
            сезон...
          </Typography>

          <Typography sx={{ marginTop: 4, marginBottom: 1.5 }} variant="h6">
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

          <Typography sx={{ marginTop: 4, marginBottom: 1.5 }} variant="h6">
            Завершение
          </Typography>
          <Typography variant="body2">20.03.2025</Typography>

          <Typography sx={{ marginTop: 4, marginBottom: 1.5 }} variant="h6">
            Локация
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <Typography variant="subtitle2">Oбласть:</Typography>
            <Typography variant="body2"> Владимирская</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <Typography variant="subtitle2">Населённый пункт:</Typography>
            <Typography variant="body2"> Владимир</Typography>
          </Box>

          <Typography sx={{ marginTop: 4, marginBottom: 1.5 }} variant="h6">
            Контакты
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box>
              <Typography variant="subtitle2">Телефон:</Typography>
              <Typography variant="body2">+7 999 888 99 50</Typography>
            </Box>
            <Box>
              <Typography variant="subtitle2">E-mail:</Typography>
              <Typography variant="body2">forExample2@yandex.ru</Typography>
            </Box>

            <Box>
              <Typography variant="subtitle2">Сайт:</Typography>
              <Typography variant="body2">forexamplehelp.ru</Typography>
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
  );
};

export default HelpMainInformation;
