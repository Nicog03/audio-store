import { Link } from "react-router-dom";
import classes from "./LargeProductCard.module.css";
import { ArrowRight } from "react-feather";
import { ProductType } from "../pages/HomePage";

interface propType {
  productInfo: ProductType;
}

const LargeProductCard: React.FC<propType> = ({ productInfo }) => {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.leftSide}>
          <h2>{productInfo.name}</h2>
          <Link
            className={classes.link}
            to={`/product/${productInfo.id}/overview`}
          >
            Shop now <ArrowRight />
          </Link>
        </div>
        <img src="./src/assets/png/headset.png" alt="" />
      </div>
    </>
  );
};

export default LargeProductCard;
