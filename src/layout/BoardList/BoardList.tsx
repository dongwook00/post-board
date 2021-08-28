import styles from './BoardList.module.scss';

export const BoardList: React.FC = ({ children }) => {
  return <div className={styles.boardList}>{children}</div>;
};
