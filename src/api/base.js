const API_BACKEND = 'https://natticharity.eveloth.ru/';

export const request = axios.create({
  baseURL: API_BACKEND,
});