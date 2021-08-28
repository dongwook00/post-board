import React from 'react';
import styles from './List.module.scss';

interface List {
  id: number;
  name: string;
}

const list: List[] = [
  { id: 0, name: 'list 1' },
  { id: 1, name: 'list 2' },
  { id: 2, name: 'list 3' },
  { id: 3, name: 'list 4' },
  { id: 4, name: 'list 5' },
];

export const List: React.FC = () => {
  const onListClick = (id: number) => {
    console.log('clicked', id);
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
