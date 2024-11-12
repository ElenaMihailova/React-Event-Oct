import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { ButtonIcon } from "../components/IconButton";
import GridonRounded from "../assets/icon/GridonRounded.png";
import ListAltRounded from "../assets/icon/ListAltRounded.png";
import LocationOnFilled from "../assets/icon/LocationOnFilled.png";

interface ViewToggleGroupProps {
  handleDisplayModeChange: (mode: "grid" | "list" | "map") => void;
  displayMode: "grid" | "list" | "map";
}

const buttonConfigs = [
  { mode: "grid", icon: GridonRounded, alt: "Grid View" },
  { mode: "list", icon: ListAltRounded, alt: "List View" },
  { mode: "map", icon: LocationOnFilled, alt: "Map View" },
];

export const ViewToggleGroup: React.FC<ViewToggleGroupProps> = ({
  handleDisplayModeChange,
  displayMode,
}) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        border: theme.borders.default,
        borderRadius: theme.borders.defaultRadius,
      }}
    >
      {buttonConfigs.map(({ mode, icon, alt }) => (
        <ButtonIcon
          key={mode}
          src={icon}
          alt={alt}
          onClickTable={() =>
            handleDisplayModeChange(mode as "grid" | "list" | "map")
          }
          sx={{
            backgroundColor:
              displayMode === mode ? "rgba(0, 0, 0, 0.08)" : "transparent",
            borderRadius: "0",
            borderRight: theme.borders.default,
          }}
        />
      ))}
    </Box>
  );
};
