import { ChevronLeft, Trash2, ShoppingCart, LogOut } from "react-feather";

import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import Logo from "../components/Logo";
import blankProfilePic from "../assets/png/blank-profile-picture.png";

import { Context } from "../App";

import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";

import classes from "./SearchHeader.module.css";

interface PropType {
  mode?: "search" | "default" | "shop" | "product-page";
}

const SearchHeader: React.FC<PropType> = ({ mode = "default" }) => {
  const { context, setContext } = useContext(Context);

  const [loggedIn, setLoggedIn] = useState(false);
  const [profileOpen, setOpenProfile] = useState(false);

  const navigate = useNavigate();

  const userPicture = localStorage.getItem("user-photo");

  let itemsQnt = 0;
  context.map((product) => (itemsQnt += product.quantity!));

  const searchMode = mode === "search";
  const shopMode = mode === "shop";
  const defaultMode = mode === "default";

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
    });
  }, []);

  const clearCartHandler = () => {
    setContext([]);
  };

  const goBack = () => {
    navigate(-1);
  };

  const logOut = () => {
    signOut(auth)
      .then(() => {
        localStorage.clear();
      })
      .catch((error) => console.log(error));
  };

  const toggleProfile = () => {
    setOpenProfile((prev) => !prev);
  };

  return (
    <>
      <header className={classes.header}>
        {defaultMode ? (
          <>
            <img src="src/assets/svg/menu.svg" alt="" />
            <Logo />
            {loggedIn ? (
              <div className={classes.profileSection}>
                <button
                  onClick={toggleProfile}
                  className={classes.profile}
                  style={{
                    backgroundImage: userPicture
                      ? `url(${userPicture})`
                      : `url(${blankProfilePic})`,
                  }}
                ></button>
                {profileOpen && (
                  <div className={classes.profileOptionsContainer}>
                    <button onClick={logOut}>
                      Sign Out <LogOut height={"1rem"} />
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link to="/signin" className={classes.signInLink}>
                Sign In
              </Link>
            )}
          </>
        ) : (
          <>
            <Link to={""} onClick={goBack} className={classes.link}>
              <ChevronLeft />
            </Link>
            {searchMode && <h1 className={classes.heading}>Search</h1>}
            {shopMode && <h1 className={classes.heading}>Shopping Cart</h1>}
            {!shopMode ? (
              <Link className={classes.shoppingLink} to="/shopping-cart">
                {itemsQnt != 0 && <p>{itemsQnt}</p>}
                <ShoppingCart />
              </Link>
            ) : (
              <button
                onClick={clearCartHandler}
                className={classes.trashButton}
              >
                <Trash2 />
              </button>
            )}
          </>
        )}
      </header>
    </>
  );
};

export default SearchHeader;
