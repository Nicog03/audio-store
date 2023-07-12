import classes from "./CompactProductCard.module.css";

import { MoreVertical } from "react-feather";

import StarIcon from "./StarIcon";
import { ProductType } from "../pages/HomePage";

interface PropType {
  productInfo: ProductType;
}

const CompactProductCard: React.FC<PropType> = ({ productInfo }) => {
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
      </div>
    </div>
  );
};

export default CompactProductCard;
