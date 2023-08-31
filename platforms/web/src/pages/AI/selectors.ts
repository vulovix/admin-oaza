import { IRootState, createSelector } from "@web/core/redux";

import { CHAT_SCOPE, initialState } from "./constants";
import { ChatState } from "./types";

export const selectState = (state: IRootState): ChatState => state?.[CHAT_SCOPE] || initialState;

export const selectMessages = createSelector([selectState], (state: ChatState) => {
  return state.messages;
});

export const selectLoading = createSelector([selectState], (state: ChatState) => {
  return state.loading;
});
