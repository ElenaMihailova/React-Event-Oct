import { Box, Typography } from "@mui/material";
import InfoIcon from "../../../assets/login/InfoIcon.svg";
import { testsProfilesData } from "./testProfilesData";
import "./style.css";

export const TestProfiles: React.FC = () => {
  return (
    <Box className="container">
      {testsProfilesData.map((item) => (
        <Box className="card" key={item.name}>
          <Box sx={{ padingLeft: 10 }}>
            <img src={InfoIcon} alt="Info" />
          </Box>
          <Box>
            <Box sx={{ textAlign: "start" }}>
              <Typography variant="body1">{item.name}</Typography>
              <Typography variant="body1">{item.login}</Typography>
              <Typography variant="body1">{item.password}</Typography>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
};
