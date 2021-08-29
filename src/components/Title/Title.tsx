// import { useState } from 'react';
import { createSelector } from 'reselect';
import { useAppSelector } from '../../redux/hooks';
import { EditableTitle } from '../common';
import { RootState } from '../../redux/store';
import { ListState } from '../../redux/listSlice';
import { BoardState } from '../../redux/boardSlice';
import styles from './Title.module.scss';

const listSelector = createSelector(
  (state: RootState) => state.list,
  (state: RootState) => state.board,
  (list: ListState[], board: BoardState) => list.find((item) => item.id === board.currentBoardId),
);

const Title: React.FC = () => {
  // const [title, setTitle] = useState('board title');
  const list = useAppSelector(listSelector);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // setTitle(e.target.value);
    console.log(e.target);
  };

  return (
    <h2 className={styles.title}>
      <EditableTitle className="boardTitle" value={list?.name} onChange={onChange} />
    </h2>
  );
};

export default Title;
