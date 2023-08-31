import { configureStore } from '@reduxjs/toolkit';

import chatReducer from './reducers/chat';

const store = configureStore({
  // un REDUCER est un objet qui va contenir toutes les fonctions
  // qui vont MODIFIER LE STATE
  // → c'est fonctions sont appelées des… _reducers_
  reducer: {
    chat: chatReducer,
  },
});

export default store;

// Pour éviter de devoir typer à la main notre state,
// on demande à TS de le faire automatiquement pour nous.
// Le state aura pour type le retour de la méthode `store.getState()`
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
