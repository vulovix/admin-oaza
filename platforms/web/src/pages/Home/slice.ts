import { PayloadAction, createSlice } from "@web/core";

import { HOME_PAGE_SCOPE, initialState } from "./constants";
import { Article, Category } from "../Publish/types";

const slice = createSlice({
  name: HOME_PAGE_SCOPE,
  initialState: initialState,
  reducers: {
    loadArticles: (state) => {
      state.loading = true;
    },
    loadArticlesDone: (state, action: PayloadAction<Array<Article>>) => {
      state.articles = action.payload;
      state.loading = false;
    },
    loadArticlesFailed: (state) => {
      state.loading = false;
    },
    loadCategories: (state) => {
      state.loading = true;
    },
    loadCategoriesDone: (state, action: PayloadAction<Array<Category>>) => {
      state.categories = action.payload;
      state.loading = false;
    },
    loadCategoriesFailed: (state) => {
      state.loading = false;
    },
    loadArticlesByCategoryId: (state, action: PayloadAction<string>) => {
      state.loading = true;
    },
    loadArticlesByCategoryIdDone: (state, action: PayloadAction<Array<Article>>) => {
      state.categorizedArticles = action.payload;
      state.loading = false;
    },
    loadArticlesByCategoryIdFailed: (state) => {
      state.loading = false;
    },
    loadArticleById: (state, action: PayloadAction<string>) => {
      state.loading = true;
    },
    loadArticleByIdDone: (state, action: PayloadAction<Article>) => {
      state.article = action.payload;
      state.loading = false;
    },
    loadArticleByIdFailed: (state) => {
      state.loading = false;
    },
  },
});

export const { actions, reducer } = slice;
