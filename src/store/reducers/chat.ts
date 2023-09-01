import { createReducer } from '@reduxjs/toolkit';

import { Message } from '../../@types';

interface ChatState {
  messages: Message[];
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

const chatReducer = createReducer(initialState, (builder) => {});

export default chatReducer;
