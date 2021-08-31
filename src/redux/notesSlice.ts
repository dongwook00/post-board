import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface NotesState {
  id: number;
  boardId?: number;
  title: string;
  content: string;
  isFold: boolean;
}

const initialState: NotesState[] = [
  { id: 0, boardId: 0, title: 'hello world', content: 'this is note from board 0', isFold: false },
  { id: 1, boardId: 0, title: 'post it', content: 'this is note from board 1', isFold: false },
  { id: 2, boardId: 1, title: 'hello world', content: 'this is note from board 0', isFold: false },
  { id: 3, boardId: 1, title: 'hello world', content: 'this is note from board 0', isFold: false },
  { id: 4, boardId: 2, title: 'hello world', content: 'this is note from board 0', isFold: false },
];

export const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    toggleFoldingNote: (state, action: PayloadAction<{ noteId: number }>) => {
      const targetIndex = state.findIndex((el) => el.id === action.payload.noteId);
      state[targetIndex].isFold = !state[targetIndex].isFold;
    },
    addNewNote: (state, action: PayloadAction<{ currentBoardId: number }>) => {
      const newId = state.length + 1;
      state.push({ id: newId, boardId: action.payload.currentBoardId, title: '새로운 노트', content: '', isFold: false });
    },
    editNote: (state, action: PayloadAction<NotesState>) => {
      console.log('action', state, action);
    },
  },
});

export const { toggleFoldingNote, addNewNote, editNote } = notesSlice.actions;

export default notesSlice.reducer;
