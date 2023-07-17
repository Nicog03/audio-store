import { ChevronLeft } from "react-feather";
import { ShoppingCart } from "react-feather";

import { Link } from "react-router-dom";

import classes from "./SearchHeader.module.css";
import { useContext } from "react";
import { Context } from "../App";
const SearchHeader = () => {
  const { context } = useContext(Context);

  let itemsQnt = 0;

  context.map((product) => (itemsQnt += product.quantity!));

  return (
    <header className={classes.header}>
      <Link to="/headphones" className={classes.link}>
        <ChevronLeft />
      </Link>
      <h1 className={classes.heading}>Search</h1>
      <Link className={classes.shoppingLink} to="/shopping-cart">
        {itemsQnt != 0 && <p>{itemsQnt}</p>}
        <ShoppingCart />
      </Link>
    </header>
  );
};

export default SearchHeader;
