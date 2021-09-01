import React from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { addNewNote } from '../../redux/notesSlice';
import styles from './Board.module.scss';

export const Board: React.FC = (props) => {
  const currentBoardId = useAppSelector((state) => state.board.currentBoardId);
  const disaptch = useAppDispatch();

  const onBoardClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.detail === 2) {
      disaptch(addNewNote({ currentBoardId }));
    }
  };

  const onBoardKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.ctrlKey && e.altKey && e.key === 'n') {
      disaptch(addNewNote({ currentBoardId }));
    }
  };

  return (
    <div tabIndex={0} onClick={onBoardClick} onKeyDown={onBoardKeyDown} className={styles.board}>
      {props.children}
    </div>
  );
};
