import { createAction, createReducer } from '@reduxjs/toolkit';
import { ChatState, TMessage } from '../../@types';

// const initialState: ChatState = {
//   message: {
//     id: 1,
//     content: 'Super content',
//     userName: 'Super Chat',
//   },
// };

const initialState: ChatState = {
  message: 'hello',
};

export const addMessage = createAction<ChatState>;

const chatReducer = createReducer(initialState, (builder) => {
  builder.addCase(addMessage, (state, action) => {
    state.message = action.payload;
  });
});

export default chatReducer;
