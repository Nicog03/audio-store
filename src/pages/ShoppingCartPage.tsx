import classes from "./ShoppingCartPage.module.css";

import SearchHeader from "../components/SearchHeader";
import Button from "../components/Button";
import { Context } from "../App";
import { useContext, useState } from "react";
import ProductArrayCompact from "../components/ProductArrayCompact";

const ShoppingCartPage = () => {
  const { context } = useContext(Context);
  const [value, setValue] = useState(0);

  let totalItems = 0;
  context.map((product) => (totalItems += product.quantity!));

  let totalPrice = 0;
  context.map(
    (product) =>
      (totalPrice += +product.price.replace("$", "") * product.quantity!)
  );

  const updatePageHandler = () => {
    setValue((value) => value + 1);
  };

  return (
    <>
      <div className={classes.container}>
        <SearchHeader mode="shop" />
        <div className={classes.content}>
          {totalItems === 0 ? (
            <p className={classes.noItemMessage}>No items in the cart yet</p>
          ) : (
            <ProductArrayCompact
              updateStore={updatePageHandler}
              isOnShoppingCart={true}
              products={context}
            />
          )}

          <div className={classes.bottomSection}>
            <section className={classes.totalSection}>
              <h3>Total {totalItems} Items</h3>
              <p>USD {totalPrice.toFixed(2)}</p>
            </section>
            <Button textContent="Proceed to Checkout" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoppingCartPage;
