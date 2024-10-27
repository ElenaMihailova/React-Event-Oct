import { Box, Typography, CircularProgress } from "@mui/material";
import { useLoadUserInfoQuery } from "../../../API/RTKQuery/api";
import { ErrorBlock } from "../../../components/ErrorBlock";

export const PersonalData = () => {
  const { data, error, isLoading } = useLoadUserInfoQuery(undefined);

  if (isLoading) {
    return <CircularProgress />;
  }

  if (error) {
    return <ErrorBlock />;
  }

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

  return (
    <Box>
      <Box sx={{ mt: 3.75, width: 550 }}>
        <Box sx={{ mb: 4 }}>
          <Typography
            variant="body1"
            sx={{ fontSize: 20, fontWeight: "old", mb: 1 }}
          >
            Профиль
          </Typography>
          <Box sx={{ display: "flex", mb: 1 }}>
            <Typography variant="body2" sx={{ fontWeight: 500, mr: 0.5 }}>
              Фамилия:
            </Typography>
            <Typography variant="body2">{lastName}</Typography>
          </Box>
          <Box sx={{ display: "flex", mb: 1 }}>
            <Typography variant="body2" sx={{ fontWeight: 500, mr: 0.5 }}>
              Имя:
            </Typography>
            <Typography variant="body2">{firstName}</Typography>
          </Box>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h4"
            sx={{ fontSize: 20, fontWeight: 500, mr: 0.5 }}
          >
            Дата рождения
          </Typography>
          <Typography
            variant="body2"
            sx={{ width: "150px", color: "text.secondary" }}
          >
            {formattedBirthdate}
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h6"
            sx={{ fontSize: 20, fontWeight: 500, mr: 0.5 }}
          >
            Локация для помощи
          </Typography>

          {baseLocations?.map((location) => {
            return (
              <>
                <Box sx={{ display: "flex", mb: 1 }}>
                  <Typography variant="body2" sx={{ fontWeight: 500, mr: 0.5 }}>
                    Область:
                  </Typography>
                  <Typography variant="body2">{location.district}</Typography>
                </Box>
                <Box sx={{ display: "flex", mb: 1 }}>
                  <Typography variant="body2" sx={{ fontWeight: 500, mr: 0.5 }}>
                    Населённый пункт:
                  </Typography>
                  <Typography variant="body2">{location.city}</Typography>
                </Box>
              </>
            );
          })}
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" sx={{ fontSize: 20, mb: 1 }}>
            Образование
          </Typography>
          {educations?.map((education) => {
            return (
              <Box sx={{ mb: 2 }}>
                <Typography variant="body2">
                  {education.organizationName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {education.level}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {education.specialization}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Год окончания: {education.graduationYear}
                </Typography>
              </Box>
            );
          })}
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" sx={{ fontSize: 20, mb: 1 }}>
            Обо мне
          </Typography>
          <Typography variant="body1">{additionalInfo}</Typography>
        </Box>
      </Box>
    </Box>
  );
};
