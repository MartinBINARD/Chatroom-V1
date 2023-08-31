import { createAction, createReducer } from '@reduxjs/toolkit';
import { ChatState, TMessageContent } from '../../@types';

const initialState: ChatState = {
  userName: 'Super chat',
  message: [
    { content: 'Salut ça va ?' },
    { content: `T'as pas des super-croquettes ?` },
    { content: 'Stp' },
  ],
};

export const addMessage = createAction<TMessageContent>('chat/add-message');

const chatReducer = createReducer(initialState, (builder) => {
  builder.addCase(addMessage, (state, action) => {
    state.message.push({ content: action.payload });
  });
});

export default chatReducer;
