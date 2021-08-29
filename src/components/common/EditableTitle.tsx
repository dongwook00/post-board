import classnames from 'classnames';
import styles from './EditableTitle.module.scss';

interface EditableTitleProps {
  className: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const EditableTitle: React.FC<EditableTitleProps> = (props) => {
  const { className, value, onChange } = props;
  return <input className={classnames(styles.editableTitle, styles[className])} type="text" value={value} onChange={onChange} />;
};

export default EditableTitle;

EditableTitle.defaultProps = {
  className: '',
  value: '',
};
