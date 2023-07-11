// import { ReactNode } from "react";
import { ReactNode } from "react";
import classes from "./TextInput.module.css";

interface propTypes {
  icon?: ReactNode;
  placeholder: string;
}

const TextInput: React.FC<propTypes> = ({ icon, placeholder }) => {
  return (
    <div className={classes.container}>
      <input
        id={placeholder}
        className={icon ? classes.withIcon : undefined}
        placeholder=" "
        type="text"
      />
      <div className={classes.innerContainer}>
        {icon && <div className={classes.icon}>{icon}</div>}
        <label htmlFor={placeholder}>{placeholder}</label>
      </div>
    </div>
  );
};

export default TextInput;
