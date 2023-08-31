export const enum Role {
  System = "system",
  User = "user",
  Assistant = "assistant",
}
export interface Message {
  id: string;
  content: string;
  role: Role;
}

export interface ChatProps {
  messages: Array<Message>;
  className?: string;
}

export interface FormProps {
  onSubmit(message: Message): void;
  handleOpenOptions(): void;
}

export interface ChatState {
  loading: boolean;
  messages: Array<Message>;
}

export interface OptionProps {
  onClose(): void;
}
