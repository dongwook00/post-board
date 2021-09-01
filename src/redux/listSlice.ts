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
    test: (state) => {
      console.log('list/test', state);
    },
  },
});

export const { updateBoardTitle, addNewBoard, removeBoard, test } = listSlice.actions;

export default listSlice.reducer;
