import { Box, CircularProgress } from "@mui/material";
import { useLoadUserInfoQuery } from "../../../API/RTKQuery/api";
import { ErrorBlock } from "../../../components/ErrorBlock";
import { UsersName } from "./UsersName";
import { UsersBirthDate } from "./UsersBirthDate";
import { UsersLocations } from "./UsersLocations";
import { UsersEducation } from "./UsersEducation";
import { AboutUser } from "./UsersAbout";

export const PersonalData = () => {
  const { data, error, isLoading } = useLoadUserInfoQuery(undefined);

  const {
    name: firstName,
    lastName,
    birthdate,
    baseLocations = [],
    educations = [],
    additionalInfo,
  } = data || {};

  const formattedBirthdate = birthdate
    ? new Date(birthdate).toLocaleDateString("ru-RU")
    : "Дата не указана";

  if (isLoading) {
    return <CircularProgress />;
  }

  if (error) {
    return <ErrorBlock errorText=" Ошибка! Не удалось загрузить информацию" />;
  }

  return (
    <Box>
      <Box sx={{ mt: 3.75, width: 550 }}>
        <UsersName usersName={firstName} usersLastName={lastName} />

        <UsersBirthDate usersBirthDate={formattedBirthdate} />

        <UsersLocations usersLocations={baseLocations} />

        <UsersEducation usersEducation={educations} />

        <AboutUser usersInfo={additionalInfo} />
      </Box>
    </Box>
  );
};
