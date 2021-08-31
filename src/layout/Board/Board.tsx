import classnames from 'classnames';
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

  return (
    <div onClick={onBoardClick} className={classnames(styles.board, 'board')}>
      {props.children}
    </div>
  );
};
