import { Typography } from "@mui/material";
import { ResultSection } from "../components/ResultSection";
import MapBlock from "../components/Map";
import { ErrorBlock } from "../components/ErrorBlock";
import { EmptyBlock } from "./EmptyBlock";
import { HelpRequestData } from "../types/types";

interface DisplayModeSwitcherProps {
  displayMode: "grid" | "list" | "map";
  cards: HelpRequestData[];
  paginatedCards: HelpRequestData[];
  onCardClick: (id: string) => void;
  isLoading: boolean;
  error: boolean;
  page: number;
  totalPages: number;
  onPageChange: (event: React.ChangeEvent<unknown>, value: number) => void;
}

const DisplayModeSwitcher: React.FC<DisplayModeSwitcherProps> = ({
  displayMode,
  cards,
  paginatedCards,
  onCardClick,
  isLoading,
  error,
  page,
  totalPages,
  onPageChange,
}) => {
  if (isLoading) {
    return <Typography>Загрузка...</Typography>;
  }

  if (error) {
    return <ErrorBlock errorText=" Ошибка! Не удалось загрузить информацию" />;
  }

  if (cards.length === 0) {
    return <EmptyBlock />;
  }

  switch (displayMode) {
    case "map":
      return <MapBlock requests={cards} onMarkerClick={onCardClick} />;
    case "grid":
    case "list":
    default:
      return (
        <ResultSection
          cards={paginatedCards.map((card) => ({
            ...card,
            collectedAmount: card.requestGoalCurrentValue,
            targetAmount: card.requestGoal,
            contributorsCount: card.contributorsCount,
          }))}
          onCardClick={onCardClick}
          displayMode={displayMode}
          currentPage={page}
          totalPages={totalPages}
          onPageChange={onPageChange}
        />
      );
  }
};

export default DisplayModeSwitcher;
