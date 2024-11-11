import { HelpRequestData } from "../types/types";

export const matchesFilters = (
  card: HelpRequestData,
  filters: { [key: string]: string | null },
  selectedDate: string | null,
) => {
  return Object.entries(filters).every(([filterKey, filterValue]) => {
    if (filterValue === null) return true;
    if (filterKey === "Кому мы помогаем")
      return card.requesterType === filterValue;
    if (filterKey === "Чем мы помогаем") return card.helpType === filterValue;
    if (filterKey === "date" && selectedDate) {
      const cardDate = new Date(card.endingDate);
      const selectedDateObj = new Date(selectedDate);
      return (
        cardDate.setHours(0, 0, 0, 0) <= selectedDateObj.setHours(0, 0, 0, 0)
      );
    }
    return true;
  });
};

export const matchesVolunteerFilters = (
  card: HelpRequestData,
  selectedVolunteerFilters: { [key: string]: string | null },
) => {
  return Object.entries(selectedVolunteerFilters).every(
    ([filterKey, filterValue]) => {
      if (filterValue === null) return true;
      if (filterKey === "Специализация")
        return card.helperRequirements?.qualification === filterValue;
      if (filterKey === "Необходимо волонтеров")
        return card.helperRequirements?.helperType === filterValue;
      if (filterKey === "Формат")
        return filterValue === "online"
          ? card.helperRequirements?.isOnline === true
          : card.helperRequirements?.isOnline === false;
      return true;
    },
  );
};

export const matchesSearch = (card: HelpRequestData, searchText: string) => {
  return (
    searchText === "" ||
    card.title.toLowerCase().includes(searchText.toLowerCase()) ||
    card.organization.title.toLowerCase().includes(searchText.toLowerCase())
  );
};
