import React, { useState } from 'react';
import classnames from 'classnames';
import styles from './Note.module.scss';
import Button from './Button';
import { EditableTitle } from '../common';
import NoteContent from './NoteContent';
import { useAppDispatch } from '../../redux/hooks';
import { toggleFoldingNote } from '../../redux/notesSlice';

interface NoteProps {
  noteId: number;
  title: string;
  content: string;
  isFold: boolean;
}

const Note: React.FC<NoteProps> = (props) => {
  const dispatch = useAppDispatch();
  const [isOnEdit, setIsOnEdit] = useState(false);
  const [title, setTitle] = useState(props.title);
  const [content, setContent] = useState(props.content);

  const onTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsOnEdit(true);
    setTitle(e.target.value);
  };

  const onContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setIsOnEdit(true);
    setContent(e.target.value);
  };

  const onSave = (noteId: number) => {
    console.log('onSave', noteId);
    setIsOnEdit(false);
  };

  const onCancle = () => {
    setIsOnEdit(false);
    setTitle(props.title);
    setContent(props.content);
  };

  const onToggleFoldBtnClick = (noteId: number) => {
    dispatch(toggleFoldingNote({ noteId }));
  };

  return (
    <div className={styles.note}>
      <div className={styles.title}>
        <EditableTitle className="noteTitle" value={title} onChange={onTitleChange} />
        <Button text={props.isFold ? '+' : '−'} onClick={() => onToggleFoldBtnClick(props.noteId)} />
        <Button text="⨯" />
      </div>
      <div className={classnames(styles.content, { [styles.hide]: props.isFold })}>
        <NoteContent value={content} onChange={onContentChange} />
        {isOnEdit && (
          <>
            <Button className="save" text="저장" onClick={() => onSave(props.noteId)} />
            <Button className="cancel" text="취소" onClick={onCancle} />
          </>
        )}
      </div>
    </div>
  );
};

export default Note;
