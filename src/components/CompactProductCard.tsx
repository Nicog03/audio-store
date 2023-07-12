import classes from "./CompactProductCard.module.css";

import { MoreVertical } from "react-feather";

import StarIcon from "./StarIcon";

const CompactProductCard = () => {
  return (
    <div className={classes.container}>
      <div className={classes.imageContainer}>
        <img src="src/assets/png/headset.png" alt="headset image" />
      </div>
      <div className={classes.rightSide}>
        <div className={classes.productInfoContainer}>
          <p className={classes.productTitle}>TMA-2 Comfort Wireless</p>
          <p className={classes.price}>USD 270</p>
        </div>
        <div className={classes.bottomContainer}>
          <div className={classes.reviewSection}>
            <div className={classes.starSection}>
              <StarIcon />
              <p>4.6</p>
            </div>
            <p>3 Reviews</p>
          </div>
          <MoreVertical className={classes.optionsIcon} />
        </div>
      </div>
    </div>
  );
};

export default CompactProductCard;
