import LargeProductCard from "./LargeProductCard";
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

interface PropTypes {
  products: ProductType[];
}

const ProductCarouselLarge: React.FC<PropTypes> = ({ products }) => {
  return (
    <>
      <Splide options={splideOptions}>
        <SplideSlide>
          <LargeProductCard />
        </SplideSlide>
        <SplideSlide>
          <LargeProductCard />
        </SplideSlide>
        <SplideSlide>
          <LargeProductCard />
        </SplideSlide>
      </Splide>
    </>
  );
};

export default ProductCarouselLarge;
