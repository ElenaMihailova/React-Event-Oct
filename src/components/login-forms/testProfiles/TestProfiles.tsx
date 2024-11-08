import { Box, Typography } from "@mui/material";
import InfoIcon from "../../../assets/login/IconInfo.png";
import { testsProfilesData } from "./testProfilesData";

const containerStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
  gap: "30px",
  justifyContent: "start",
};

const cardStyle: React.CSSProperties = {
  padding: "6px",
  display: "flex",
  flexDirection: "row",
  gap: "14px",
  width: "calc(25% - 16px)",
  minWidth: "320px",
  borderRadius: "6px",
  border: "solid #0288D1",
  color: "#014361",
};

export const TestProfiles: React.FC = () => {
  return (
    <Box style={containerStyle}>
      {testsProfilesData.map((item) => (
        <Box style={cardStyle} key={item.name}>
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
