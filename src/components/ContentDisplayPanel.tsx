import { Box, Typography, useTheme } from "@mui/material";
import { ViewToggleGroup } from "./ViewToggleGroup";
import DisplayModeSwitcher from "./DisplayModeSwitcher";
import { HelpRequestData } from "../types/types";

interface ContentDisplayPanelProps {
  filteredCards: HelpRequestData[];
  displayMode: "grid" | "list" | "map";
  onDisplayModeChange: (mode: "grid" | "list" | "map") => void;
  paginatedCards: HelpRequestData[];
  onCardClick: (id: string) => void;
  isLoading: boolean;
  error: boolean;
  page: number;
  totalPages: number;
  onPageChange: (event: React.ChangeEvent<unknown>, value: number) => void;
}

const ContentDisplayPanel: React.FC<ContentDisplayPanelProps> = ({
  filteredCards,
  displayMode,
  onDisplayModeChange,
  paginatedCards,
  onCardClick,
  isLoading,
  error,
  page,
  totalPages,
  onPageChange,
}) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: "white",
        padding: theme.spacing(2.5),
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        borderRadius: theme.shape.borderRadius,
        flex: 1,
        minHeight: "100%",
        border: theme.borders.default,
      }}
    >
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        marginBottom={3}
      >
        <Typography variant="h6">Найдено: {filteredCards.length}</Typography>
        <ViewToggleGroup
          handleDisplayModeChange={onDisplayModeChange}
          displayMode={displayMode}
        />
      </Box>

      <DisplayModeSwitcher
        displayMode={displayMode}
        cards={filteredCards}
        paginatedCards={paginatedCards}
        onCardClick={onCardClick}
        isLoading={isLoading}
        error={error}
        page={page}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </Box>
  );
};

export default ContentDisplayPanel;
