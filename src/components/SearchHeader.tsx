import { ChevronLeft, Trash2 } from "react-feather";
import { ShoppingCart } from "react-feather";

import { Link } from "react-router-dom";

import classes from "./SearchHeader.module.css";
import { useContext } from "react";
import { Context } from "../App";

interface PropType {
  mode?: "search" | "default" | "shop";
}

const SearchHeader: React.FC<PropType> = ({ mode = "default" }) => {
  const { context } = useContext(Context);

  let itemsQnt = 0;

  context.map((product) => (itemsQnt += product.quantity!));

  const searchMode = mode === "search";
  const shopMode = mode === "shop";

  return (
    <header className={classes.header}>
      <Link to="/headphones" className={classes.link}>
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
        <button className={classes.trashButton}>
          <Trash2 />
        </button>
      )}
    </header>
  );
};

export default SearchHeader;
