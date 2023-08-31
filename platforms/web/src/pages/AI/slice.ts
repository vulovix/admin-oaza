import { PayloadAction, createSlice } from "@web/core";

import { CHAT_SCOPE, initialState } from "./constants";
import { Message } from "./types";

const slice = createSlice({
  name: CHAT_SCOPE,
  initialState,
  reducers: {
    prompt: (state, action: PayloadAction<Message>) => {
      state.loading = true;
      state.messages = [...state.messages, action.payload];
    },
    promptDone: (state, action: PayloadAction<Message>) => {
      state.loading = false;
      state.messages = [...state.messages, action.payload];
    },
    setMessages: (state, action: PayloadAction<Array<Message>>) => {
      state.loading = false;
      state.messages = action.payload;
    },
    onStreamMessage: (state, action: PayloadAction<Message>) => {
      state.loading = false;
      const existingMessage = state.messages.find((x) => x.id === action.payload.id);
      if (existingMessage) {
        state.messages = state.messages.map((x) =>
          x.id === action.payload.id
            ? {
                ...x,
                content: `${x.content}${action.payload.content}`,
              }
            : x,
        );
      } else {
        state.messages = [...state.messages, action.payload];
      }
    },
  },
});

export const { actions, reducer } = slice;
