import classes from "./Logo.module.css";
import logo from "../assets/svg/audio-logo.svg";

const Logo = () => {
  return (
    <div className={classes.container}>
      <img src={logo} alt="audio logo" />
      <h1>Audio</h1>
    </div>
  );
};

export default Logo;
