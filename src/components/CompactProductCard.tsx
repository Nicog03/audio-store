import classes from "./CompactProductCard.module.css";

import { Minus, Plus, MoreVertical, Trash2 } from "react-feather";

import StarIcon from "./StarIcon";
import { ProductType } from "../pages/HomePage";
import { useContext, useState } from "react";
import { Context } from "../App";

interface PropType {
  productInfo: ProductType;
  isOnShoppingCart?: boolean;
}

const CompactProductCard: React.FC<PropType> = ({
  productInfo,
  isOnShoppingCart = false,
}) => {
  const { setContext } = useContext(Context);
  const [value, setValue] = useState(0);

  if (productInfo.quantity === 0) {
    setContext((current) => current.filter((product) => product.quantity != 0));
  }

  const updatePage = () => {
    setValue((value) => value + 1);
  };

  const reduceQuantityHandler = () => {
    productInfo.quantity!--;
    updatePage();
  };

  const increaseQuantityHandler = () => {
    productInfo.quantity!++;
    updatePage();
  };

  return (
    <div className={classes.container}>
      <div className={classes.imageContainer}>
        <img src="src/assets/png/headset.png" alt="headset image" />
      </div>
      <div className={classes.rightSide}>
        <div className={classes.productInfoContainer}>
          <p className={classes.productTitle}>{productInfo.name}</p>
          <p className={classes.price}>USD {productInfo.price}</p>
        </div>
        {!isOnShoppingCart ? (
          <div className={classes.bottomContainer}>
            <div className={classes.reviewSection}>
              <div className={classes.starSection}>
                <StarIcon />
                <p>{productInfo.rating}</p>
              </div>
              <p>{productInfo.reviews.length} Reviews</p>
            </div>

            <MoreVertical className={classes.optionsIcon} />
          </div>
        ) : (
          <div className={classes.shoppingBottomContainer}>
            <div className={classes.quantityContainer}>
              <button onClick={reduceQuantityHandler}>
                <Minus height={"1.25rem"} width={"1.25rem"} />
              </button>
              {productInfo.quantity}
              <button onClick={increaseQuantityHandler}>
                <Plus height={"1.25rem"} width={"1.25rem"} />
              </button>
            </div>
            <Trash2 height={"1.25rem"} width={"1.25rem"} />
          </div>
        )}
      </div>
    </div>
  );
};

export default CompactProductCard;
