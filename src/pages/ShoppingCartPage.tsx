import classes from "./ShoppingCartPage.module.css";

import Header from "../components/organisms/Header";
import Button from "../components/atoms/Button";
import { Context } from "../App";
import { useContext, useState } from "react";
import ProductArrayCompact from "../components/organisms/ProductArrayCompact";
import { ProductType } from "../interfaces/product.interface";

const ShoppingCartPage = () => {
  const { context } = useContext(Context);
  const [, setValue] = useState(0);

  let totalItems = 0;
  context.map((product: ProductType) => (totalItems += product.quantity!));

  let totalPrice = 0;
  context.map(
    (product: ProductType) =>
      (totalPrice += +product.price.replace("$", "") * product.quantity!)
  );

  const updatePageHandler = () => {
    setValue((value) => value + 1);
  };

  return (
    <>
      <div className={classes.container}>
        <Header mode="shop" />
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
