import { PayloadAction, createSlice } from "@web/core";

import { PUBLISH_SCOPE, initialState } from "./constants";
import { Article, Category } from "./types";

const slice = createSlice({
  name: PUBLISH_SCOPE,
  initialState,
  reducers: {
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    setError(state, action: PayloadAction<any>) {
      state.error = action.payload;
    },
    createArticle(state, action: PayloadAction<Omit<Article, "id">>) {
      
    },
    createArticleDone(state, action: PayloadAction<Article>) {
      state.articles = state.articles.concat(action.payload);
    },
    loadArticles(state) {
      state.error = null;
      state.loading = false;
    },
    loadArticle(state, action: PayloadAction<string>) {
      state.error = null;
      state.loading = false;
    },
    removeArticle(state, action: PayloadAction<string>) {
      
    },
    removeArticleDone(state, action: PayloadAction<Article>) {
      state.error = null;
      state.loading = false;
      state.articles = state.articles.filter(x => x._id !== action.payload._id);
    },
    updateArticle(state, action: PayloadAction<Article>) {
      state.error = null;
      state.loading = false;
    },
    updateArticleDone(state, action: PayloadAction<Article>) {
      state.error = null;
      state.loading = false;
      state.articles = state.articles.map(x => x._id === action.payload._id ? action.payload : x);
    },
    loadCategories(state) {
      state.error = null;
      state.loading = false;
    },
    loadArticlesDone(state, action: PayloadAction<Array<Article>>) {
      state.error = null;
      state.loading = false;
      state.articles = action.payload;
    },
    loadArticleDone(state, action: PayloadAction<Article>) {
      state.error = null;
      state.loading = false;
      state.article = action.payload;
    },
    loadCategoriesDone(state, action: PayloadAction<Array<Category>>) {
      state.error = null;
      state.loading = false;
      state.categories = action.payload;
    },
  },
});

export const { actions, reducer } = slice;
