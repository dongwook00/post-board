import { useState } from 'react';
import styles from './Title.module.scss';
import { EditableTitle } from '../common';

const Title: React.FC = () => {
  const [title, setTitle] = useState('board title');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  return (
    <h2 className={styles.title}>
      <EditableTitle className="boardTitle" value={title} onChange={onChange} />
    </h2>
  );
};

export default Title;
