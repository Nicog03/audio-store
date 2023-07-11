import MediumProductCard from "./MediumProducCard";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const splideOptions = {
  autoWidth: true,
  gap: "0.938rem",
  snap: false,
  arrows: false,
  pagination: false,
};

const ProductCarouselMedium = () => {
  return (
    <Splide options={splideOptions}>
      <SplideSlide>
        <MediumProductCard />
      </SplideSlide>
      <SplideSlide>
        <MediumProductCard />
      </SplideSlide>
      <SplideSlide>
        <MediumProductCard />
      </SplideSlide>
    </Splide>
  );
};

export default ProductCarouselMedium;
