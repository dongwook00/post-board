import styles from './Button.module.scss';

interface ButtonProps {
  className?: string;
  text: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = (props) => {
  const { text, onClick } = props;
  const className = props.className ? props.className : '';

  return (
    <button className={styles[className]} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
