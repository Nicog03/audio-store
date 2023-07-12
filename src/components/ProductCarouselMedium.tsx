import MediumProductCard from "./MediumProducCard";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { ProductType } from "../pages/HomePage";

const splideOptions = {
  autoWidth: true,
  gap: "0.938rem",
  snap: false,
  arrows: false,
  pagination: false,
};

interface propTypes {
  products: ProductType[];
}

const ProductCarouselMedium: React.FC<propTypes> = ({ products }) => {
  return (
    <Splide options={splideOptions}>
      {products.map((product) => (
        <SplideSlide>
          <MediumProductCard productInfo={product} />
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default ProductCarouselMedium;
