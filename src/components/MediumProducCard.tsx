import classes from "./MediumProductCard.module.css";
import { ProductType } from "../pages/HomePage";
import StarIcon from "./StarIcon";
import image from "../assets/png/headset.png";
import { Link } from "react-router-dom";

interface PropType {
  productInfo: ProductType;
  displayReview?: boolean;
}

const MediumProductCard: React.FC<PropType> = ({
  productInfo,
  displayReview,
}) => {
  return (
    <>
      <Link
        to={`/product/${productInfo.id}/overview`}
        className={classes.cardContainer}
      >
        <img src={image} alt="image of a headphone" />
        <div className={classes.info}>
          <h3>{productInfo.name}</h3>
          <p>USD {productInfo.price}</p>
        </div>
        {displayReview && (
          <div className={classes.reviewSection}>
            <div className={classes.ratingSection}>
              <StarIcon height="11px" />
              <p>{productInfo.rating}</p>
            </div>
            <p>{productInfo.reviews.length} Reviews</p>
          </div>
        )}
      </Link>
    </>
  );
};

export default MediumProductCard;
