import classes from "./Button.module.css";

interface PropType {
  textContent: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<PropType> = ({ textContent, onClick }) => {
  return (
    <button onClick={onClick} className={classes.button}>
      {textContent}
    </button>
  );
};

export default Button;
