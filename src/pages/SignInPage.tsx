import { useState } from "react";
import classes from "./SignInPage.module.css";
import { Mail, Lock, X } from "react-feather";
import { Link, useNavigate } from "react-router-dom";
import { BeatLoader } from "react-spinners";

import auth from "../firebase";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

interface propTypes {
  mode: "signin" | "signup";
}

const SignInPage: React.FC<propTypes> = ({ mode }) => {
  const signInMode: boolean = mode === "signin";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  let buttonText = "Sign In";

  if (mode === "signup") {
    buttonText = "Sign Up";
  }

  const authenticateUser = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    if (email.trim() === "" || password.trim() === "") {
      setError("Incorrect email or password");
      setLoading(false);
      return;
    }

    if (mode === "signin") {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCrendentials) => {
          console.log(userCrendentials);
          navigate("/headphones");
        })
        .catch((error: Error) => {
          console.log(error.message);
          setLoading(false);
          setError(error.message);
        });
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCrendentials) => {
          console.log(userCrendentials);
        })
        .catch((error: Error) => {
          error.message.includes("already-in-use")
            ? setError("This email is already being used")
            : null;
          setLoading(false);
        });
    }
  };

  return (
    <div className={classes.container}>
      <hgroup className={classes.header}>
        <h1 className={classes.h1}>Audio</h1>
        <p className={classes.h1}>It's modular and designed to last</p>
      </hgroup>
      <div className={classes.bottomSection}>
        <form onSubmit={authenticateUser} action="" className={classes.form}>
          {error && (
            <div className={classes.errorDiv}>
              <p>{error}</p>
              <X
                onClick={() => setError("")}
                color="rgb(255, 101, 101)"
                height={"1rem"}
              />
            </div>
          )}
          <div className={classes.inputContainer}>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              type="email"
              placeholder=" "
            />
            <div className={classes.label}>
              <Mail />
              <label htmlFor="email">Email</label>
            </div>
          </div>
          <div className={classes.inputContainer}>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              type="password"
              placeholder=" "
            />
            <div className={classes.label}>
              <Lock />
              <label htmlFor="password">Password</label>
            </div>
          </div>
          {signInMode && <a href="#">Forgot Password</a>}
          <button>
            {loading ? <BeatLoader color={"white"} size={10} /> : buttonText}
          </button>
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
            Don't have an account?{" "}
            <Link onClick={() => setError("")} to="/signup">
              Sign Up here
            </Link>
          </p>
        ) : (
          <p className={classes.SignUpParagraph}>
            Already have an account?{" "}
            <Link onClick={() => setError("")} to="/signin">
              Sign In here
            </Link>
          </p>
        )}
      </div>
    </div>
  );
};

export default SignInPage;
