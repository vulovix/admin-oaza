import { ChatState, Role } from "./types";

export const CHAT_SCOPE = "chat";

export const initialState: ChatState = {
  loading: false,
  messages: [
    {
      id: Math.random().toString(36),
      role: Role.System,
      content: "Hello! Welcome to Oasis AI. How can I assist you today?",
    },
  ],
};
