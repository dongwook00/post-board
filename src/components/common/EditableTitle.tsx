import { ChangeEvent } from 'react';
import classnames from 'classnames';
import styles from './EditableTitle.module.scss';

interface EditableTitleProps {
  className: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>, targetId?: number) => void;
}

const EditableTitle: React.FC<EditableTitleProps> = (props) => {
  const { className, value, onChange } = props;

  return (
    <input
      placeholder="제목을 입력해주세요"
      className={classnames(styles.editableTitle, styles[className])}
      type="text"
      value={value}
      onChange={onChange}
    />
  );
};

export default EditableTitle;
