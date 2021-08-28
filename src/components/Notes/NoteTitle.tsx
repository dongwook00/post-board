import styles from './NoteTitle.module.scss';

interface NoteTitleProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const NoteTitle: React.FC<NoteTitleProps> = (props) => {
  const { value, onChange } = props;
  return <input className={styles.noteTitle} type="text" value={value} onChange={onChange} />;
};

export default NoteTitle;
