import { IRootState, createSelector } from "@web/core/redux";

import { initialState, PUBLISH_SCOPE } from "./constants";
import { PublishState } from "./types";

export const getPublishState = (state: IRootState): PublishState => state?.[PUBLISH_SCOPE] || initialState;


export const selectPublishLoading = createSelector(getPublishState, (state: PublishState) => state.loading);

export const selectArticle = createSelector(getPublishState, (state: PublishState) => state.article);
export const selectArticles = createSelector(getPublishState, (state: PublishState) => state.articles);
export const selectCategories = createSelector(getPublishState, (state: PublishState) => state.categories);


export const selectPublishError = createSelector(getPublishState, (state: PublishState) => state.error);
