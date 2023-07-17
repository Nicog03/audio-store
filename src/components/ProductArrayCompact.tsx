import { ProductType } from "../pages/HomePage";
import classes from "./ProductArrayCompact.module.css";
import CompactProductCard from "./CompactProductCard";
import { Link } from "react-router-dom";

interface PropType {
  products: ProductType[];
  isOnShoppingCart: boolean;
}

const ProductArrayCompact: React.FC<PropType> = ({
  products,
  isOnShoppingCart,
}) => {
  return (
    <div className={classes.container}>
      {products.map((product) =>
        isOnShoppingCart ? (
          <CompactProductCard
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
