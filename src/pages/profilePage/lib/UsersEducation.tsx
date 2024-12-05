import { Box, Typography } from "@mui/material";

interface Education {
  organizationName: string;
  level: string;
  specialization: string;
  graduationYear: number;
}

interface PropsFieldUsersEducation {
  usersEducation: Education[];
}

export const UsersEducation: React.FC<PropsFieldUsersEducation> = ({
  usersEducation,
}) => {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h6" sx={{ fontSize: 20, mb: 1 }}>
        Образование
      </Typography>
      {usersEducation?.map((education, index) => {
        return (
          <Box key={index} sx={{ mb: 2 }}>
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
  );
};
