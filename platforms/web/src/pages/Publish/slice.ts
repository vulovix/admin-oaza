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
    createArticle(state, action: PayloadAction<Article>) {
      
    },
    createArticleDone(state, action: PayloadAction<Article>) {
      state.articles = [action.payload, ...state.articles];
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
    loadCategory(state, action: PayloadAction<string>) {
      state.error = null;
      state.loading = false;
    },
    loadCategoryDone(state, action: PayloadAction<Category>) {
      state.error = null;
      state.loading = false;
      state.category = action.payload;
    },
    loadCategoriesDone(state, action: PayloadAction<Array<Category>>) {
      state.error = null;
      state.loading = false;
      state.categories = action.payload;
    },
    createCategory(state, action: PayloadAction<Category>) {
      
    },
    createCategoryDone(state, action: PayloadAction<Category>) {
      state.categories = state.categories.concat(action.payload);
    },
    updateCategory(state, action: PayloadAction<Category>) {
      state.error = null;
      state.loading = false;
    },
    updateCategoryDone(state, action: PayloadAction<Category>) {
      state.error = null;
      state.loading = false;
      state.categories = state.categories.map(x => x._id === action.payload._id ? action.payload : x);
    },
    removeCategory(state, action: PayloadAction<string>) {
      
    },
    removeCategoryDone(state, action: PayloadAction<Category>) {
      state.error = null;
      state.loading = false;
      state.categories = state.categories.filter(x => x._id !== action.payload._id);
    },
    resetArticle: (state) => {
      state.article = null;
    },
  },
});

export const { actions, reducer } = slice;
