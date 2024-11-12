import { styled } from "@mui/material/styles";
import { Box, Button } from "@mui/material";

export const SidebarContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(2.5),
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  textAlign: "left",
  border: theme.borders.default,
  width: theme.spacing(32),
  marginRight: theme.spacing(1.5),
}));

export const ResetButton = styled(Button)(({ theme }) => ({
  color: theme.palette.text.primary,
  borderColor: theme.palette.divider,
  "&:hover": {
    borderColor: theme.palette.divider,
    backgroundColor: theme.palette.action.hover,
  },
}));
