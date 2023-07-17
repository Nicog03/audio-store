import { ProductType } from "../pages/HomePage";
import classes from "./ProductArrayCompact.module.css";
import CompactProductCard from "./CompactProductCard";
import { Link } from "react-router-dom";

interface PropType {
  products: ProductType[];
  isOnShoppingCart: boolean;
  updateStore?: () => void;
}

const ProductArrayCompact: React.FC<PropType> = ({
  products,
  isOnShoppingCart,
  updateStore,
}) => {
  return (
    <div className={classes.container}>
      {products.map((product) =>
        isOnShoppingCart ? (
          <CompactProductCard
            updateStore={updateStore}
            key={product.created_at}
            productInfo={product}
            isOnShoppingCart={isOnShoppingCart}
          />
        ) : (
          <Link to={`/product/${product.id}/overview`}>
            <CompactProductCard
              key={product.created_at}
              productInfo={product}
              isOnShoppingCart={isOnShoppingCart}
            />
          </Link>
        )
      )}
    </div>
  );
};

export default ProductArrayCompact;
