import classes from "./CompactProductCard.module.css";

import { Minus, Plus, MoreVertical, Trash2 } from "react-feather";

import StarIcon from "./StarIcon";
import { ProductType } from "../pages/HomePage";
import { useContext } from "react";
import { Context } from "../App";
import productImage from "../assets/png/headset.png";

import { motion } from "framer-motion";

interface PropType {
  productInfo: ProductType;
  isOnShoppingCart?: boolean;
  updateStore?: () => void;
}

const CompactProductCard: React.FC<PropType> = ({
  productInfo,
  isOnShoppingCart = false,
  updateStore,
}) => {
  const { setContext } = useContext(Context);

  if (productInfo.quantity === 0) {
    setContext((current) => current.filter((product) => product.quantity != 0));
  }

  const reduceQuantityHandler = () => {
    productInfo.quantity!--;
    updateStore!();
  };

  const increaseQuantityHandler = () => {
    productInfo.quantity!++;
    updateStore!();
  };

  const removeProductFromCartHandler = () => {
    setContext((current) =>
      current.filter((product) => product.id != productInfo.id)
    );
  };

  const quantity = {
    hidden: { y: -5 },
    show: { y: 0 },
  };

  return (
    <div className={classes.container}>
      <div className={classes.imageContainer}>
        <img src={productImage} alt="headset image" />
      </div>
      <div className={classes.rightSide}>
        <div className={classes.productInfoContainer}>
          <p className={classes.productTitle}>{productInfo.name}</p>
          <p className={classes.price}>
            USD {productInfo.price.replace("$", "")}
          </p>
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
              <motion.p
                variants={quantity}
                initial="hidden"
                animate="show"
                key={productInfo.quantity}
              >
                {productInfo.quantity}
              </motion.p>
              <button onClick={increaseQuantityHandler}>
                <Plus height={"1.25rem"} width={"1.25rem"} />
              </button>
            </div>
            <button
              className={classes.trashButton}
              onClick={removeProductFromCartHandler}
            >
              <Trash2 height={"1.25rem"} width={"1.25rem"} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CompactProductCard;
