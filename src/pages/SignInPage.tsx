import { useState } from "react";
import classes from "./SignInPage.module.css";
import { Mail, Lock, X } from "react-feather";
import { Link, useNavigate } from "react-router-dom";
import { BeatLoader } from "react-spinners";

import { auth, facebookSignIn, googleSignIn } from "../firebase";

import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";

import TextInput from "../components/TextInput";

interface propTypes {
  mode: "signin" | "signup" | "password-reset";
}

const SignInPage: React.FC<propTypes> = ({ mode }) => {
  const signInMode: boolean = mode === "signin";
  const resetPasswordMode: boolean = mode === "password-reset";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [resetMessageSent, setResetMessageSent] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  let buttonText = "Sign In";

  if (mode === "signup") {
    buttonText = "Sign Up";
  } else if (mode === "password-reset") {
    buttonText = "Send password reset email";
  }

  const authenticateUser = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    if (resetPasswordMode) {
      if (email.trim() === "") {
        setError("Please provide an email");
        setLoading(false);
        return;
      }
    } else {
      if (email.trim() === "" || password.trim() === "") {
        setError("Incorrect email or password");
        setLoading(false);
        return;
      }
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
          setError("Incorrect email or password");
        });
    } else if (mode === "signup") {
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
    } else if (mode === "password-reset") {
      sendPasswordResetEmail(auth, email)
        .then(() => {
          setLoading(false);
          setError("");
          setResetMessageSent(true);
        })
        .catch((error: Error) => {
          error.message.includes("user-not-found")
            ? setError(
                "This email is either invalid, or is not associated with an user account."
              )
            : null;
          setLoading(false);
        });
    }
  };

  const signInWithGoogle = () => {
    googleSignIn()
      .then((response) => {
        console.log(response);
        navigate("/headphones");
        console.log(response);
        localStorage.setItem("name", response.user.displayName!);
        localStorage.setItem("user-photo", response.user.photoURL!);
      })
      .catch((error) => console.log(error));
  };

  const signInWithFacebook = () => {
    facebookSignIn()
      .then((response) => {
        console.log(response);
        navigate("/headphones");
        console.log(response);
        localStorage.setItem("name", response.user.displayName!);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className={classes.container}>
      <div className={classes.backGroundImage}></div>
      <div className={classes.innerContainer}>
        {!resetPasswordMode && (
          <hgroup className={classes.header}>
            <h1 className={classes.h1}>Audio</h1>
            <p className={classes.h1}>It's modular and designed to last</p>
          </hgroup>
        )}
        {resetPasswordMode && <h1>Reset your password</h1>}
        <div className={classes.bottomSection}>
          <form onSubmit={authenticateUser} action="" className={classes.form}>
            {resetMessageSent && (
              <div className={classes.resetMessageSuccessDiv}>
                <p>
                  Reset message sent!{" "}
                  <Link
                    onClick={() => setResetMessageSent(false)}
                    to={"/signin"}
                  >
                    go back to sign in
                  </Link>
                </p>
              </div>
            )}
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
            {resetPasswordMode && (
              <div className={classes.resetParagraphDiv}>
                <p>
                  Enter your account email address and we will send you a
                  password reset link.
                </p>
              </div>
            )}
            <div className={classes.inputContainer}>
              <TextInput
                type="text"
                changeAction={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setEmail(e.target.value)
                }
                icon={<Mail />}
                placeholder="Email"
              />
            </div>
            {!resetPasswordMode && (
              <div className={classes.inputContainer}>
                <TextInput
                  type="password"
                  changeAction={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setPassword(e.target.value)
                  }
                  icon={<Lock />}
                  placeholder="Password"
                />
              </div>
            )}
            {signInMode && <Link to={"/password-reset"}>Forgot Password?</Link>}
            <button>
              {loading ? <BeatLoader color={"white"} size={10} /> : buttonText}
            </button>
          </form>
          {!signInMode && !resetPasswordMode && (
            <ul className={classes.socialMediaList}>
              <li>
                <button>
                  <img src="./src/assets/svg/apple-logo.svg" alt="apple logo" />
                </button>
              </li>
              <li>
                <button onClick={signInWithFacebook}>
                  <img
                    src="./src/assets/svg/faceboo-logo.svg"
                    alt="facebook logo"
                  />
                </button>
              </li>
              <li>
                <button onClick={signInWithGoogle}>
                  <img
                    src="./src/assets/svg/google-logo.svg"
                    alt="google logo"
                  />
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
            !resetPasswordMode && (
              <p className={classes.SignUpParagraph}>
                Already have an account?{" "}
                <Link onClick={() => setError("")} to="/signin">
                  Sign In here
                </Link>
              </p>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
