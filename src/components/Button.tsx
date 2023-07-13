import classes from "./Button.module.css";

interface PropType {
  textContent: string;
}

const Button: React.FC<PropType> = ({ textContent }) => {
  return <button className={classes.button}>{textContent}</button>;
};

export default Button;
