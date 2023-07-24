import { ChevronLeft, Trash2, ShoppingCart, LogOut } from "react-feather";

import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import Logo from "./Logo";
import MenuButton from "./MenuButton";

import blankProfilePic from "../assets/png/blank-profile-picture.png";

import { Context } from "../App";

import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";

import classes from "./Header.module.css";

import { motion } from "framer-motion";

interface PropType {
  mode?: "search" | "default" | "shop" | "product-page";
}

const Header: React.FC<PropType> = ({ mode = "default" }) => {
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

  const shopQuant = {
    hide: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0 },
  };

  const headerTitle = {
    hide: { y: -30 },
    show: { y: 0 },
  };

  return (
    <>
      <header className={classes.header}>
        {defaultMode ? (
          <>
            <div className={classes.navBarDiv}>
              <MenuButton />
            </div>
            <motion.div variants={headerTitle} initial="hide" animate="show">
              <Logo />
            </motion.div>
            <ul className={classes.navList}>
              <li>
                <Link to="/headphones">Home</Link>
              </li>
              <li>
                <Link to="/all-products">All products</Link>
              </li>
              <li>
                <Link to="/shopping-cart">Cart</Link>
              </li>
            </ul>
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
                  <motion.div
                    initial={{ transform: "translateX(-2em)", opacity: 0 }}
                    animate={{ transform: "translateX(0)", opacity: 1 }}
                    className={classes.profileOptionsContainer}
                  >
                    <button onClick={logOut}>
                      Sign Out <LogOut height={"1rem"} />
                    </button>
                  </motion.div>
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
            {searchMode && (
              <motion.h1
                variants={headerTitle}
                initial="hide"
                animate="show"
                className={classes.heading}
              >
                Search
              </motion.h1>
            )}
            {shopMode && (
              <motion.h1
                variants={headerTitle}
                initial="hide"
                animate="show"
                className={classes.heading}
              >
                Shopping Cart
              </motion.h1>
            )}
            {!shopMode ? (
              <Link className={classes.shoppingLink} to="/shopping-cart">
                {itemsQnt != 0 && (
                  <motion.p
                    key={itemsQnt}
                    variants={shopQuant}
                    initial="hide"
                    animate="show"
                  >
                    {itemsQnt}
                  </motion.p>
                )}
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

export default Header;
