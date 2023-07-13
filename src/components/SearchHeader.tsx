import { ChevronLeft } from "react-feather";
import { ShoppingCart } from "react-feather";

import { Link } from "react-router-dom";

import classes from "./SearchHeader.module.css";

const SearchHeader = () => {
  return (
    <header className={classes.header}>
      <Link to="/headphones" className={classes.link}>
        <ChevronLeft />
      </Link>
      <h1 className={classes.heading}>Search</h1>
      <ShoppingCart />
    </header>
  );
};

export default SearchHeader;
