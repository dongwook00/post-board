import { useAppSelector } from '../../redux/hooks';
import Note from './Note';

const Notes: React.FC = () => {
  const notes = useAppSelector((state) => state.notes);
  return (
    <>
      {notes.map((note) => (
        <Note key={note.id} noteId={note.id} title={note.title} content={note.content} />
      ))}
    </>
  );
};

export default Notes;
