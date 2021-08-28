import styles from './NoteContent.module.scss';

interface NoteContentProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const NoteContent: React.FC<NoteContentProps> = (props) => {
  const { value, onChange } = props;

  return <textarea className={styles.noteContent} value={value} onChange={onChange} />;
};

export default NoteContent;
