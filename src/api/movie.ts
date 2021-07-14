import api from "./api";

export const API_KEY = '16920a1e34e3b08e3a720c33cfc1341c';
export const ROOT_URL = 'https://api.themoviedb.org/3';
export const withKey = (url: string) => `${url}?api_key=${API_KEY}`;

export interface PageParam {
  page: number;
}

export interface MovieListApiResponse {
  page: number;
  results: MovieApiResponse[];
  total_pages: number;
  total_results: number;
}

/* ------------- Api ------------- */
export const getMoviesBySearchQueryApi = ({ query, page }: { query: string } & PageParam) =>
  api.get<MovieListApiResponse>(`${withKey('/search/movie')}&page=${page}&query=${query}`);
