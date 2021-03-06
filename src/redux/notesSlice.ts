import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface NotesState {
  id: number;
  boardId?: number;
  title: string;
  content: string;
  isFold?: boolean;
}

const initialState: NotesState[] = [{ id: 0, boardId: 0, title: '노트 제목입니다', content: '메모내용을 적어주세요', isFold: false }];

export const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    toggleFoldingNote: (state, action: PayloadAction<{ noteId: number }>) => {
      const targetIndex = state.findIndex((el) => el.id === action.payload.noteId);
      state[targetIndex].isFold = !state[targetIndex].isFold;
    },
    addNewNote: (state, action: PayloadAction<{ currentBoardId: number }>) => {
      const newId = state.reduce((acc, curr) => (acc += curr.id), 1);
      state.push({ id: newId, boardId: action.payload.currentBoardId, title: '', content: '', isFold: false });
    },
    editNote: (state, action: PayloadAction<NotesState>) => {
      const { id, title, content } = action.payload;
      const targetIndex = state.findIndex((el) => el.id === id);
      state[targetIndex] = { ...state[targetIndex], title, content };
    },
    removeNote: (state, action: PayloadAction<{ removalNoteId: number }>) => {
      const targetIndex = state.findIndex((el) => el.id === action.payload.removalNoteId);
      state.splice(targetIndex, 1);
    },
    removeNotesOnBoard: (state, action: PayloadAction<{ targetBoardId: number }>) => {
      return state.filter((el) => el.boardId !== action.payload.targetBoardId);
    },
  },
});

export const { toggleFoldingNote, addNewNote, editNote, removeNote, removeNotesOnBoard } = notesSlice.actions;

export default notesSlice.reducer;
