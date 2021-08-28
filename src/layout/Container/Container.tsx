import styles from './Container.module.scss';

export const Container: React.FC = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};
