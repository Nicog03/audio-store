import classes from "./ShoppingCartPage.module.css";

import SearchHeader from "../components/SearchHeader";
import Button from "../components/Button";
import { Context } from "../App";
import { useContext } from "react";
import ProductArrayCompact from "../components/ProductArrayCompact";

const ShoppingCartPage = () => {
  const { context } = useContext(Context);

  let totalItems = 0;
  context.map((product) => (totalItems += product.quantity!));

  let totalPrice = 0;
  context.map(
    (product) =>
      (totalPrice += +product.price.replace("$", "") * product.quantity!)
  );

  return (
    <>
      <div className={classes.container}>
        <SearchHeader />
        <div className={classes.content}>
          <ProductArrayCompact isOnShoppingCart={true} products={context} />
          <div className={classes.bottomSection}>
            <section className={classes.totalSection}>
              <h3>Total {totalItems} Items</h3>
              <p>USD {totalPrice}</p>
            </section>
            <Button textContent="Proceed to Checkout" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoppingCartPage;
