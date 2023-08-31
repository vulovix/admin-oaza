import { IRootState, createSelector } from "@web/core/redux";

import { PERSISTED_SCOPE, initialState } from "./constants";
import { PersistedState } from "./types";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const selectState = (state: IRootState): PersistedState => state?.[PERSISTED_SCOPE] || initialState;

export const selectDeviceId = createSelector([selectState], (state: PersistedState) => {
  return state.device.id;
});

export const selectConversations = createSelector([selectState], (state: PersistedState) => {
  return Object.values(state.conversations)
    .filter((x) => x)
    .reverse();
});

// export const selectLoading = createSelector([selectState], (state: PersistedState) => {
//   return state.loading;
// });
