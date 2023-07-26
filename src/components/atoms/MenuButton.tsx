import classes from "./MenuButton.module.css";
import { Link } from "react-router-dom";

import { useState, useEffect } from "react";
import { Headphones, Home, ShoppingCart, X } from "react-feather";

import Menu from "../../assets/svg/menu.svg";

import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";

import { motion } from "framer-motion";

const MenuButton = () => {
  const [navBarOpen, setNavBarOpen] = useState(false);
  const [isLoggedIn, setIsLoggeIn] = useState(false);

  const toggleNavBar = () => {
    setNavBarOpen((prev) => !prev);
  };

  const logOut = () => {
    signOut(auth)
      .then(() => console.log("chongas"))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggeIn(true);
      } else {
        setIsLoggeIn(false);
      }
    });
  }, []);

  const linksContainer = {
    hidden: { opacity: 0, scaleY: 0 },
    show: {
      opacity: 1,
      scaleY: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const link = {
    hidden: { opacity: 0, x: 20 },
    show: { opacity: 1, x: 0 },
  };

  return (
    <div className={classes.container}>
      <button onClick={toggleNavBar} className={classes.menuButton}>
        {navBarOpen ? (
          <X height={"20px"} width={"20px"} />
        ) : (
          <img src={Menu} alt="" />
        )}
      </button>
      {navBarOpen && (
        <>
          <motion.ul
            variants={linksContainer}
            initial="hidden"
            animate="show"
            className={classes.linksContainer}
          >
            <motion.li variants={link}>
              <Link to="/headphones">
                <Home height={"1.2rem"} width={"1.2rem"} /> Home
              </Link>{" "}
            </motion.li>
            <motion.li variants={link}>
              <Link to="/all-products">
                <Headphones height={"1.2rem"} width={"1.2rem"} />
                All products
              </Link>{" "}
            </motion.li>
            <motion.li variants={link}>
              <Link to="/shopping-cart">
                <ShoppingCart height={"1.2rem"} width={"1.2rem"} />
                Cart
              </Link>
            </motion.li>
            {isLoggedIn && (
              <motion.li variants={link}>
                <button className={classes.signOutButton} onClick={logOut}>
                  Sign Out
                </button>
              </motion.li>
            )}
          </motion.ul>
          <div className={classes.background} onClick={toggleNavBar}></div>
        </>
      )}
    </div>
  );
};

export default MenuButton;
