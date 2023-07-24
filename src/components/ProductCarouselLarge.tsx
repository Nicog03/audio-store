import LargeProductCard from "./LargeProductCard";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { ProductType } from "../pages/HomePage";

const splideOptions = {
  autoWidth: true,
  gap: "0.938rem",
  arrows: false,
  pagination: false,
};

interface PropTypes {
  products: ProductType[];
}

const ProductCarouselLarge: React.FC<PropTypes> = ({ products }) => {
  const filteredArray = products.filter((product) => product.rating === 5);

  return (
    <>
      <Splide options={splideOptions}>
        {filteredArray.length ? (
          filteredArray.map((product) => (
            <SplideSlide key={product.created_at}>
              <LargeProductCard productInfo={product} />
            </SplideSlide>
          ))
        ) : (
          <LargeProductCard />
        )}
      </Splide>
    </>
  );
};

export default ProductCarouselLarge;
