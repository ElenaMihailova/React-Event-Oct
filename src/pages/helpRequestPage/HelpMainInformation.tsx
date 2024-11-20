import {
  Box,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import { toast } from "react-toastify";
import ButtonInFavorites from "./lib/ButtonInFavorites";
import verifiedIcon from "../../assets/verifyed-icon.svg";
import { ActionsSchedule } from "./ActionsSchedule";

interface ActionsScheduleElement {
  stepLabel: string;
  isDone?: boolean;
}

interface Organization {
  title: string;
  isVerified: boolean;
}

interface Location {
  latitude: number;
  longitude: number;
  district: string;
  city: string;
}
interface Contacts {
  email: string;
  phone: string;
  website: string;
}

interface HelpMainInformationProps {
  actionsSchedule: ActionsScheduleElement[];
  title: string;
  organization?: Organization;
  description: string;
  goalDescription: string;
  endingDate: Date;
  location: Location;

  contacts: Contacts;
}

const HelpMainInformation = ({
  actionsSchedule,
  contacts,
  description,
  endingDate,
  goalDescription,
  location,
  organization,
  title,
}: HelpMainInformationProps) => {
  const date = new Date(endingDate);
  const formattedDate = `${String(date.getDate()).padStart(2, "0")}.${String(date.getMonth() + 1).padStart(2, "0")}.${date.getFullYear()}`;

  const handleClickToFavourite = (): void => {
    toast.success("Успех! Добавлено в избранное");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Card variant="outlined" sx={{ py: 3, px: 2, display: "flex" }}>
        <CardContent sx={{ maxWidth: "550px" }}>
          <Typography variant="h5">
            {title.replace(/^\[\d+\]\s*/, "")}
          </Typography>
          <Typography sx={{ marginTop: 3, marginBottom: 1 }} variant="h6">
            Организация
          </Typography>
          <Typography>{organization?.title}</Typography>
          {organization?.isVerified && (
            <>
              <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                <img src={verifiedIcon} alt="" />
                <Typography variant="caption">Организация проверена</Typography>
              </Box>
            </>
          )}

          <Typography sx={{ marginTop: 3, marginBottom: 1 }} variant="h6">
            Кому мы помогаем
          </Typography>
          <Typography variant="body2">{description}</Typography>

          <Typography sx={{ marginTop: 3, marginBottom: 1 }} variant="h6">
            Цель сбора
          </Typography>
          <Typography variant="body2">{goalDescription}</Typography>

          <Typography sx={{ marginTop: 3, marginBottom: 1 }} variant="h6">
            План действий
          </Typography>

          <ActionsSchedule actionsSchedule={actionsSchedule} />

          <Typography sx={{ marginTop: 3, marginBottom: 1 }} variant="h6">
            Завершение
          </Typography>
          <Typography variant="body2">{formattedDate}</Typography>

          <Typography sx={{ marginTop: 3, marginBottom: 1 }} variant="h6">
            Локация
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <Typography variant="subtitle2">Oбласть:</Typography>
            <Typography variant="body2"> {location.district}</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <Typography variant="subtitle2">Населённый пункт:</Typography>
            <Typography variant="body2">{location.city}</Typography>
          </Box>

          <Typography sx={{ marginTop: 3, marginBottom: 1 }} variant="h6">
            Контакты
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box>
              <Typography variant="subtitle2">Телефон:</Typography>
              <Typography variant="body2">{contacts.phone}</Typography>
            </Box>
            <Box>
              <Typography variant="subtitle2">E-mail:</Typography>
              <Typography variant="body2">{contacts.email}</Typography>
            </Box>

            <Box>
              <Typography variant="subtitle2">Сайт:</Typography>
              <Typography variant="body2">{contacts.website}</Typography>
            </Box>
          </Box>
        </CardContent>
        <CardContent>
          <ButtonInFavorites onClick={handleClickToFavourite} filled={false}>
            В избранное
          </ButtonInFavorites>
        </CardContent>
      </Card>
    </Box>
  );
};

export default HelpMainInformation;
