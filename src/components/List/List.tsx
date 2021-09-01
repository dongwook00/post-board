import React from 'react';
import classnames from 'classnames';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { removeNotesOnBoard } from '../../redux/notesSlice';
import { selectBoard } from '../../redux/boardSlice';
import { addNewBoard, removeBoard } from '../../redux/listSlice';
import { Button } from '../common';

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

  const onBoardRemovalBtnClick = (targetId: number) => {
    dispatch(removeBoard({ targetId }));
    dispatch(removeNotesOnBoard({ targetBoardId: targetId }));
  };

  return (
    <ul className={styles.items}>
      {list.map((item) => (
        <li key={item.id}>
          <h5 className={classnames({ [styles.active]: item.id === currentBoardId })} onClick={onListClick.bind(null, item.id)}>
            {item.name}
          </h5>
          <Button className="boardRemoval" text="삭제" onClick={() => onBoardRemovalBtnClick(item.id)} />
        </li>
      ))}
      <li onClick={onNewBoardCreateBtn}>+</li>
    </ul>
  );
};
