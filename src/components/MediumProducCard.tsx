import classes from "./MediumProductCard.module.css";
import { ProductType } from "../pages/HomePage";

interface PropType {
  productInfo: ProductType;
}

const MediumProductCard: React.FC<PropType> = ({ productInfo }) => {
  return (
    <>
      <div className={classes.cardContainer}>
        <img src="src/assets/png/headset.png" alt="image of a headphone" />

        <div className={classes.info}>
          <h3>{productInfo.name}</h3>
          <p>USD {productInfo.price}</p>
        </div>
      </div>
    </>
  );
};

export default MediumProductCard;
