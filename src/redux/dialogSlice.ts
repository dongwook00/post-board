import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface DialogState {
  removalNoteId: number;
  isOpen: boolean;
}

const initialState: DialogState = {
  removalNoteId: -1,
  isOpen: false,
};

export const dialogSlice = createSlice({
  name: 'dialog',
  initialState,
  reducers: {
    showDialog: (state, action: PayloadAction<{ removalNoteId: number }>) => {
      state.removalNoteId = action.payload.removalNoteId;
      state.isOpen = true;
    },
    hideDialog: (state) => {
      state.removalNoteId = -1;
      state.isOpen = false;
    },
  },
});

export const { showDialog, hideDialog } = dialogSlice.actions;

export default dialogSlice.reducer;
