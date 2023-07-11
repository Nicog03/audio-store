import LargeProductCard from "./LargeProductCard";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const splideOptions = {
  autoWidth: true,
  gap: "0.938rem",
  snap: false,
  arrows: false,
  pagination: false,
};

const ProductCarouselLarge = () => {
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
