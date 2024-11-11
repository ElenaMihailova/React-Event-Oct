import {
  Typography,
} from "@mui/material";

interface FilterTitleProps {
  title: string,
}

export const FilterTitle: React.FC<FilterTitleProps> = ({ title }) => {
  return (
    <Typography variant="h4" sx={{ opacity: "60%" }}>
      {title}
    </Typography>
  )
}