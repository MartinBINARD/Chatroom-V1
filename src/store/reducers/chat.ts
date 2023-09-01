import { createAction, createReducer } from '@reduxjs/toolkit';

import { Message } from '../../@types';

interface ChatState {
  messages: Message[];
  currentMessage: string;
}

const initialState: ChatState = {
  messages: [
    {
      id: 1,
      author: 'Super Chat',
      content: 'Salut ça va ?',
    },
    {
      id: 2,
      author: 'Super Chat',
      content: "T'as pas des super-croquettes ?",
    },
    {
      id: 3,
      author: 'Super Chat',
      content: 'Stp',
    },
  ],
  currentMessage: '',
};

// je vais récupérer une chaîne de caractères = la saisie utilisateur
// → payload
// → il faut typer mon action
export const changeCurrentMessage = createAction<string>(
  'chat/change-current-message'
);

export const addMessage = createAction<Message>('chat/add-message');

const chatReducer = createReducer(initialState, (builder) => {
  builder.addCase(changeCurrentMessage, (state, action) => {
    // je traduis mon action en modifiant le state
    state.currentMessage = action.payload;
  });
});

export default chatReducer;
