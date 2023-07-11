import classes from "./SignInPage.module.css";
import { Mail, Lock } from "react-feather";

const SignIn = () => {
  return (
    <div className={classes.container}>
      <hgroup className={classes.header}>
        <h1 className={classes.h1}>Audio</h1>
        <p className={classes.h1}>It's modular and designed to last</p>
      </hgroup>
      <div className={classes.bottomSection}>
        <form action="" className={classes.form}>
          <div className={classes.inputContainer}>
            <input id="email" type="email" placeholder=" " />
            <div className={classes.label}>
              <Mail />
              <label htmlFor="email">Email</label>
            </div>
          </div>
          <div className={classes.inputContainer}>
            <input id="password" type="password" placeholder=" " />
            <div className={classes.label}>
              <Lock />
              <label htmlFor="password">Password</label>
            </div>
          </div>
          <a href="#">Forgot Password</a>
          <button>Sign In</button>
        </form>
        <p className={classes.SignUpParagraph}>
          Don't have an account? <a href="">Sign Up here</a>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
