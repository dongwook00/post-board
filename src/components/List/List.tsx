import React from 'react';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { selectBoard } from '../../redux/listSlice';
import styles from './List.module.scss';

export const List: React.FC = () => {
  const list = useAppSelector((state) => state.list);
  const dispatch = useAppDispatch();

  const onListClick = (id: number) => {
    dispatch(selectBoard(id));
  };

  return (
    <ul className={styles.items}>
      {list.map((item) => (
        <li key={item.id} onClick={onListClick.bind(null, item.id)}>
          {item.name}
        </li>
      ))}
    </ul>
  );
};
