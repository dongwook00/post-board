import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ListState {
  id: number;
  name: string;
}

const initialState: ListState[] = [{ id: 0, name: '1번 보드!' }];

export const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    updateBoardTitle: (state, action: PayloadAction<ListState>) => {
      const targetIndex = state.findIndex((el) => el.id === action.payload.id);
      state[targetIndex].name = action.payload.name;
    },
    addNewBoard: (state) => {
      const newId = state.reduce((acc, curr) => (acc += curr.id), 1);
      state.push({ id: newId, name: '새 보드' });
    },
    removeBoard: (state, action: PayloadAction<{ targetId: number }>) => {
      const targetIndex = state.findIndex((el) => el.id === action.payload.targetId);
      state.splice(targetIndex, 1);
    },
  },
});

export const { updateBoardTitle, addNewBoard, removeBoard } = listSlice.actions;

export default listSlice.reducer;
