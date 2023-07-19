import classes from "./MenuButton.module.css";
import { Link } from "react-router-dom";

import { useState, useEffect } from "react";
import { Headphones, Home, ShoppingCart, X } from "react-feather";

import Menu from "../assets/svg/menu.svg";

import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

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
          <div className={classes.linksContainer}>
            <Link to="/headphones">
              <Home height={"1.2rem"} width={"1.2rem"} /> Home
            </Link>{" "}
            <Link to="/all-products">
              <Headphones height={"1.2rem"} width={"1.2rem"} />
              All products
            </Link>{" "}
            <Link to="/shopping-cart">
              <ShoppingCart height={"1.2rem"} width={"1.2rem"} />
              Cart
            </Link>
            {isLoggedIn && (
              <button className={classes.signOutButton} onClick={logOut}>
                Sign Out
              </button>
            )}
          </div>
          <div className={classes.background} onClick={toggleNavBar}></div>
        </>
      )}
    </div>
  );
};

export default MenuButton;
