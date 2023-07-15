import { Splide, SplideSlide } from "@splidejs/react-splide";

import classes from "./ImageCarousel.module.css";

const splideOptions = {
  autoHeight: true,
  autoWidth: true,
  snap: false,
  arrows: false,
  pagination: false,
  gap: "1.25rem",
};

const ImageCarousel = () => {
  return (
    <Splide options={splideOptions}>
      <SplideSlide>
        <div className={`${classes.div} ${classes.one}`}></div>
      </SplideSlide>
      <SplideSlide>
        <div className={`${classes.div} ${classes.two}`}></div>
      </SplideSlide>
    </Splide>
  );
};

export default ImageCarousel;
