import axios from "axios";
import { HelpRequestData } from "../types/types";

export const fetchRequestCards = async (): Promise<HelpRequestData[]> => {
  try {
    const response = await axios.get<HelpRequestData[]>("https://natticharity.eveloth.ru/api/request");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Ошибка при получении данных о запросах:", error);
    throw error;
  }
};
