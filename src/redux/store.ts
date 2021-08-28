import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import listReducer from './listSlice';
import notesReducer from './notesSlice';

export const store = configureStore({
  reducer: {
    list: listReducer,
    notes: notesReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
