import { useEffect, useState } from 'react';
import { createSelector } from 'reselect';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
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
  const [title, setTitle] = useState('');
  const [targetId, setTargetId] = useState(-1);
  const dispatch = useAppDispatch();
  const list = useAppSelector(listSelector);

  useEffect(() => {
    if (!list) return;

    setTitle(list.name);
    setTargetId(list.id);
  }, [list]);

  useEffect(() => {
    dispatch({ type: 'list/updateBoardTitleBySaga', payload: { id: targetId, name: title } });
  }, [title]);

  const onBoardTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  return (
    <h2 onClick={(e) => e.stopPropagation()} className={styles.title}>
      {list && <EditableTitle className="boardTitle" value={title} onChange={onBoardTitleChange} />}
    </h2>
  );
};

export default Title;
