import {
  Box,
  Card,
  CardContent,
} from "@mui/material";
import { HelpRequestData } from "../types/types";
import { CardContentSection } from "./CardContentSection";

export const CardHorizontal: React.FC<HelpRequestData> = (props) => {
  return (
    <Box sx={{ width: "100%", display: "flex", alignItems: "center", p: 1 }}>
      <Card variant="outlined" sx={{ display: "flex", flexDirection: "row", width: "100%" }}>
        <CardContent
          sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}
        >
          <CardContentSection {...props} />
        </CardContent>
      </Card>
    </Box>
  );
};
