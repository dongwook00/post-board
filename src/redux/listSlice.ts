import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ListState {
  id: number;
  name: string;
}

const initialState: ListState[] = [
  { id: 0, name: 'list 1' },
  { id: 1, name: 'list 2222' },
  { id: 2, name: 'list 3' },
  { id: 3, name: 'list 4' },
  { id: 4, name: 'list 5' },
];

export const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    selectBoard: (state, action: PayloadAction<number>) => {
      console.log('action', state, action);
      return state;
    },
  },
});

export const { selectBoard } = listSlice.actions;

export default listSlice.reducer;
