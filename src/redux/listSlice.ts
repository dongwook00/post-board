import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ListState {
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
    updateBoardTitle: (state, action: PayloadAction<ListState>) => {
      state[action.payload.id].name = action.payload.name;
    },
  },
});
export const { updateBoardTitle } = listSlice.actions;
export default listSlice.reducer;
