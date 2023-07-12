import { ProductType } from "../pages/HomePage";
import classes from "./ProductArrayCompact.module.css";
import CompactProductCard from "./CompactProductCard";

interface PropType {
  products: ProductType[];
}

const ProductArrayCompact: React.FC<PropType> = ({ products }) => {
  return (
    <div className={classes.container}>
      {products.map((product) => (
        <CompactProductCard productInfo={product} />
      ))}
    </div>
  );
};

export default ProductArrayCompact;
