import { ProductType } from "../pages/HomePage";
import classes from "./ProductArrayCompact.module.css";
import CompactProductCard from "./CompactProductCard";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface PropType {
  products: ProductType[];
  isOnShoppingCart: boolean;
  updateStore?: () => void;
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemA = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0 },
};

const ProductArrayCompact: React.FC<PropType> = ({
  products,
  isOnShoppingCart,
  updateStore,
}) => {
  return (
    <motion.div initial={"hidden"} animate={"show"} variants={container}>
      <div className={classes.container}>
        {products.map((product) =>
          isOnShoppingCart ? (
            <motion.li key={product.id} variants={itemA}>
              <CompactProductCard
                updateStore={updateStore}
                productInfo={product}
                isOnShoppingCart={isOnShoppingCart}
              />
            </motion.li>
          ) : (
            <motion.li key={product.created_at} variants={itemA}>
              <Link to={`/product/${product.id}/overview`}>
                <CompactProductCard
                  productInfo={product}
                  isOnShoppingCart={isOnShoppingCart}
                />
              </Link>
            </motion.li>
          )
        )}
      </div>
    </motion.div>
  );
};

export default ProductArrayCompact;
