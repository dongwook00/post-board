import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import logger from 'redux-logger';
import { combineReducers } from 'redux';
import listReducer from './listSlice';
import notesReducer from './notesSlice';
import boardReducer from './boardSlice';
import dialogReducer from './dialogSlice';

const reducers = combineReducers({
  list: listReducer,
  notes: notesReducer,
  board: boardReducer,
  dialog: dialogReducer,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }).concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
