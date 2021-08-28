import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface NotesState {
  id: number;
  boardId?: number;
  title: string;
  content: string;
}

const initialState: NotesState[] = [
  { id: 0, boardId: 0, title: 'hello world', content: 'this is note from board 0' },
  { id: 1, boardId: 0, title: 'post it', content: 'this is note from board 1' },
  { id: 10, boardId: 1, title: 'hello world', content: 'this is note from board 0' },
];

export const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    editNote: (state, action: PayloadAction<NotesState>) => {
      console.log('action', state, action);
      return state;
    },
  },
});

export const { editNote } = notesSlice.actions;

export default notesSlice.reducer;
