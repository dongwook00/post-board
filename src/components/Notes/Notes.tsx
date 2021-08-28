import Note from './Note';

interface Notes {
  id: number;
  boardId?: number;
  title: string;
  content: string;
}

const notes: Notes[] = [
  { id: 0, boardId: 0, title: 'hello world', content: 'this is note from board 0' },
  { id: 1, boardId: 1, title: 'post it', content: 'this is note from board 1' },
];

const Notes: React.FC = () => {
  return (
    <>
      {notes.map((note) => (
        <Note key={note.id} noteId={note.id} title={note.title} content={note.content} />
      ))}
    </>
  );
};

export default Notes;
