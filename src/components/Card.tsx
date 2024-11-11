import {
  Box,
  Card,
  CardContent,
} from "@mui/material";
import Volunteering from "../assets/Volunteering1.png";
import Person from "../assets/Person.png";
import Organization from "../assets/Organisation.png";
import { CardContentSection } from "./CardContentSection";
import { HelpRequestData } from "../types/types";

export const CardInformation: React.FC<HelpRequestData> = (props) => {

  const selectImage = () => {
    if (props.requesterType === "person" && props.helpType === "finance") {
      return Person;
    } else if (props.requesterType === "organization") {
      return Organization;
    } else if (props.requesterType === "person" && props.helpType === "material") {
      return Volunteering;
    }
    return Volunteering;
  };

  return (
    <Box sx={{ width: { xs: "100%", sm: "45%", md: "30%" }, display: "flex", alignItems: "stretch", p: 1 }}>
      <Card
        variant="outlined"
        sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}
      >
        <CardContent
          sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}
        >
          <Box
            component="img"
            src={selectImage()}
            alt="Фото Запроса"
            sx={{
              width: { xs: "100%", sm: "180px", md: "220px" },
              height: { xs: "auto", sm: "180px", md: "220px" },
              borderRadius: 1,
              mb: 2,
              alignItems: "stretch",
            }}
          />
          <CardContentSection {...props} />
        </CardContent>
      </Card>
    </Box>
  );
};
