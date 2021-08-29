import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface BoardState {
  currentBoardId: number;
}

const initialState: BoardState = {
  currentBoardId: 0,
};

export const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    selectBoard: (state, action: PayloadAction<number>) => {
      state.currentBoardId = action.payload;
    },
  },
});

export const { selectBoard } = boardSlice.actions;

export default boardSlice.reducer;
