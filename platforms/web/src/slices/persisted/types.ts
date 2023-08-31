import { Message } from "@web/pages/AI/types";

export interface Conversation {
  id: string;
  name: string;
  messages: Array<Message>;
}

export interface Device {
  id: string;
}

export interface PersistedState {
  device: Device;
  conversations: Record<string, Conversation>;
}
