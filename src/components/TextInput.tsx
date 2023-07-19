// import { ReactNode } from "react";
import { ReactNode } from "react";
import classes from "./TextInput.module.css";

interface propTypes {
  icon?: ReactNode;
  placeholder: string;
  focusAction?: React.FocusEventHandler<HTMLElement>;
  changeAction?: React.ChangeEventHandler<HTMLElement>;
  type: "password" | "text";
}

const TextInput: React.FC<propTypes> = ({
  icon,
  placeholder,
  focusAction,
  changeAction,
  type,
}) => {
  return (
    <div className={classes.container}>
      <input
        onFocus={focusAction}
        id={placeholder}
        className={icon ? classes.withIcon : undefined}
        placeholder=" "
        type={type}
        onChange={changeAction}
      />
      <div className={classes.innerContainer}>
        {icon && <div className={classes.icon}>{icon}</div>}
        <label htmlFor={placeholder}>{placeholder}</label>
      </div>
    </div>
  );
};

export default TextInput;
