import styles from './Board.module.scss';

export const Board: React.FC = ({ children }) => {
  return <div className={styles.board}>{children}</div>;
};
