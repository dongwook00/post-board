import { createSelector } from 'reselect';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { EditableTitle } from '../common';
import { RootState } from '../../redux/store';
import { ListState, updateBoardTitle } from '../../redux/listSlice';
import { BoardState } from '../../redux/boardSlice';
import styles from './Title.module.scss';

const listSelector = createSelector(
  (state: RootState) => state.list,
  (state: RootState) => state.board,
  (list: ListState[], board: BoardState) => list.find((item) => item.id === board.currentBoardId),
);

const Title: React.FC = () => {
  const dispatch = useAppDispatch();
  const list = useAppSelector(listSelector);

  const onBoardTitleChange = (e: React.ChangeEvent<HTMLInputElement>, targetId: number) => {
    const payload = { id: targetId, name: e.target.value };
    dispatch(updateBoardTitle(payload));
  };

  return (
    <h2 className={styles.title}>
      {list && <EditableTitle className="boardTitle" value={list.name} onChange={(e) => onBoardTitleChange(e, list.id)} />}
    </h2>
  );
};

export default Title;
