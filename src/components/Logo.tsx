import classes from "./Logo.module.css";

const Logo = () => {
  return (
    <div className={classes.container}>
      <img src="src/assets/svg/audio-logo.svg" alt="audio logo" />
      <h1>Audio</h1>
    </div>
  );
};

export default Logo;
