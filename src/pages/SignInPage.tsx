import classes from "./SignInPage.module.css";
import { Mail, Lock } from "react-feather";
import { Link } from "react-router-dom";

interface propTypes {
  mode: "signin" | "signup";
}

const SignInPage: React.FC<propTypes> = ({ mode }) => {
  const signInMode: boolean = mode === "signin";

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
          {signInMode && <a href="#">Forgot Password</a>}
          <button>{signInMode ? "Sign In" : "Sign Up"}</button>
        </form>
        {!signInMode && (
          <ul className={classes.socialMediaList}>
            <li>
              <button>
                <img src="./src/assets/svg/apple-logo.svg" alt="apple logo" />
              </button>
            </li>
            <li>
              <button>
                <img
                  src="./src/assets/svg/faceboo-logo.svg"
                  alt="facebook logo"
                />
              </button>
            </li>
            <li>
              <button>
                <img src="./src/assets/svg/google-logo.svg" alt="google logo" />
              </button>
            </li>
          </ul>
        )}
        {signInMode ? (
          <p className={classes.SignUpParagraph}>
            Don't have an account? <Link to="/signup">Sign Up here</Link>
          </p>
        ) : (
          <p className={classes.SignUpParagraph}>
            Already have an account? <Link to="/signin">Sign In here</Link>
          </p>
        )}
      </div>
    </div>
  );
};

export default SignInPage;
