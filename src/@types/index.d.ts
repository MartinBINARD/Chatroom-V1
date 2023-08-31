export type TMessageContent = string;

export type TMessage = {
  content: TMessageContent;
};

export interface ChatState {
  userName: string;
  message: TMessage[];
}
