import { createSlice, createPersistedSlice, PayloadAction } from "@web/core";
import { Message } from "@web/pages/AI/types";

import { PERSISTED_SCOPE, initialState } from "./constants";

const slice = createSlice({
  name: PERSISTED_SCOPE,
  initialState: initialState,
  reducers: {
    storeConversation: (state, action: PayloadAction<{ id: string; name: string; messages: Array<Message> }>) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      state.conversations[action.payload.id] = action.payload;
    },
    removeConversation: (state, action: PayloadAction<{ id: string }>) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      state.conversations[action.payload.id] = undefined;
    },
  },
});

export const { actions } = slice;

export default createPersistedSlice(PERSISTED_SCOPE, slice.reducer);
