import { createSlice, createPersistedSlice, PayloadAction } from "@web/core";

import { PERSISTED_SCOPE, initialState } from "./constants";

const slice = createSlice({
  name: PERSISTED_SCOPE,
  initialState: initialState,
  reducers: {
    setExperimentalInvert: (state, action: PayloadAction<boolean>) => {
      state.experimental.invert = action.payload;
    },
  },
});

export const { actions } = slice;

export default createPersistedSlice(PERSISTED_SCOPE, slice.reducer);
