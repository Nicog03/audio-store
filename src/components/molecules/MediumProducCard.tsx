import classes from "./MediumProductCard.module.css";
import { ProductType } from "../../interfaces/product.interface";
import StarIcon from "../atoms/StarIcon";
import image from "../../assets/png/headset.png";
import { Link } from "react-router-dom";
import { Headphones } from "react-feather";

interface PropType {
  productInfo?: ProductType;
  displayReview?: boolean;
}

const MediumProductCard: React.FC<PropType> = ({
  productInfo,
  displayReview,
}) => {
  return (
    <>
      {productInfo ? (
        <Link
          to={`/product/${productInfo.id}/overview`}
          className={classes.cardContainer}
        >
          <img src={image} alt="image of a headphone" />
          <div className={classes.info}>
            <h3>{productInfo.name}</h3>
            <p>USD {productInfo.price.replace("$", "")}</p>
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
      ) : (
        <div className={classes.noProductCard}>
          <Headphones height={"5em"} width={"5em"} />
          <div className={classes.noProductinfo}>
            <h3>No product to be displayed here</h3>
          </div>
        </div>
      )}
    </>
  );
};

export default MediumProductCard;
