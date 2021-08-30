import React from 'react';
import classnames from 'classnames';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { selectBoard } from '../../redux/boardSlice';
import { addNewBoard } from '../../redux/listSlice';
import styles from './List.module.scss';

export const List: React.FC = () => {
  const list = useAppSelector((state) => state.list);
  const currentBoardId = useAppSelector((state) => state.board.currentBoardId);
  const dispatch = useAppDispatch();

  const onListClick = (id: number) => {
    dispatch(selectBoard(id));
  };

  const onNewBoardCreateBtn = () => {
    dispatch(addNewBoard());
  };

  return (
    <ul className={styles.items}>
      {list.map((item) => (
        <li key={item.id} className={classnames({ [styles.active]: item.id === currentBoardId })} onClick={onListClick.bind(null, item.id)}>
          {item.name}
        </li>
      ))}
      <li onClick={onNewBoardCreateBtn}>+</li>
    </ul>
  );
};
