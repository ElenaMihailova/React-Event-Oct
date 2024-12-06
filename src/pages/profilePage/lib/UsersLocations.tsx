import { Box, Typography } from "@mui/material";

interface Location {
  district: string;
  city: string;
}

interface PropsFieldUsersLocations {
  usersLocations: Location[];
}

export const UsersLocations: React.FC<PropsFieldUsersLocations> = ({
  usersLocations,
}) => {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h6" sx={{ fontSize: 20, fontWeight: 500, mr: 0.5 }}>
        Локация для помощи
      </Typography>

      {usersLocations?.map((location, index) => {
        return (
          <Box key={index}>
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
          </Box>
        );
      })}
    </Box>
  );
};
