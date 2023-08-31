import { HomePageState } from "./types";

export const HOME_PAGE_SCOPE = "home";

export const initialState: HomePageState = {
  loading: false,
  article: undefined,
  articles: [],
  categories: [],
  categorizedArticles: [],
};
