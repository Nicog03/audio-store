import { Link } from "react-router-dom";
import classes from "./LargeProductCard.module.css";
import { ArrowRight, Headphones } from "react-feather";
import { ProductType } from "../pages/HomePage";
import headset from "../assets/png/headset.png";

import { motion } from "framer-motion";

interface propType {
  productInfo?: ProductType;
}

const LargeProductCard: React.FC<propType> = ({ productInfo }) => {
  return (
    <>
      <motion.div
        className={classes.container}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {productInfo ? (
          <>
            <div className={classes.leftSide}>
              <h2>{productInfo.name}</h2>
              <Link
                className={classes.link}
                to={`/product/${productInfo.id}/overview`}
              >
                Shop now <ArrowRight />
              </Link>
            </div>
            <img src={headset} alt="image of a headset" />
          </>
        ) : (
          <div className={classes.noProductCard}>
            <div className={classes.leftSide}>
              <h2>No product to be displayed</h2>
            </div>
            <Headphones height={"5em"} width={"5em"} />
          </div>
        )}
      </motion.div>
    </>
  );
};

export default LargeProductCard;
