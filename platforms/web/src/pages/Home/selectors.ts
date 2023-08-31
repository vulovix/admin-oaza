import { IRootState, createSelector } from "@web/core/redux";

import { HOME_PAGE_SCOPE, initialState } from "./constants";
import { HomePageState } from "./types";

export const selectState = (state: IRootState): HomePageState => state?.[HOME_PAGE_SCOPE] || initialState;

export const selectLoading = createSelector([selectState], (state: HomePageState) => {
  return state.loading;
});

export const selectArticles = createSelector([selectState], (state: HomePageState) => {
  return state.articles;
});

export const selectArticle = createSelector([selectState], (state: HomePageState) => {
  return state.article;
});


export const selectCategorizedArticles = createSelector([selectState], (state: HomePageState) => {
  return state.categorizedArticles;
});

export const selectCategories = createSelector([selectState], (state: HomePageState) => {
  return state.categories;
});
