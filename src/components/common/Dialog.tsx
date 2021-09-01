import classnames from 'classnames';
import { useAppDispatch } from '../../redux/hooks';
import styles from './Dialog.module.scss';
import { removeNote } from '../../redux/notesSlice';
import { hideDialog } from '../../redux/dialogSlice';

interface DialogProps {
  show: boolean;
  removalNoteId: number;
}

const Dialog: React.FC<DialogProps> = (props) => {
  const dispatch = useAppDispatch();

  const onYesBtnClick = () => {
    dispatch(removeNote({ removalNoteId: props.removalNoteId }));
    dispatch(hideDialog());
  };

  const onNoBtnClick = () => {
    dispatch(hideDialog());
  };

  return (
    <div onClick={(e) => e.stopPropagation()} className={classnames(styles.modalContainer, { [styles.show]: props.show })}>
      <div className={styles.modalContent}>
        <div>
          <p>정말 삭제하시겠습니까?</p>
        </div>
        <div>
          <button onClick={onYesBtnClick}>예</button>
          <button onClick={onNoBtnClick}>아니오</button>
        </div>
      </div>
    </div>
  );
};

export default Dialog;
