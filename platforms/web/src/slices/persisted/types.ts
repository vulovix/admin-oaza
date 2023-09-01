import { Message } from "@web/pages/AI/types";

export interface Conversation {
  id: string;
  name: string;
  messages: Array<Message>;
}

export interface Device {
  id: string;
}

export interface Experimental {
  invert: boolean;
}

export interface PersistedState {
  device: Device;
  experimental: Experimental;
  conversations: Record<string, Conversation>;
}
