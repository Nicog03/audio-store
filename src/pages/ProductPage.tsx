import SearchHeader from "../components/SearchHeader";
import { Link } from "react-router-dom";
import ProductCarouselMedium from "../components/ProductCarouselMedium";
import { useEffect, useState } from "react";
import axios from "axios";
import { ProductType } from "./HomePage";
import Button from "../components/Button";
import TabBarDescription from "../components/TabBarDescription";
import ImageCarousel from "../components/ImageCarousel";
import classes from "./ProductPage.module.css";
import ReviewList from "../components/ReviewList";

const baseURL = "https://run.mocky.io/v3/c4ea8253-f0b8-4c1f-ba83-4d30d8049cc9";

const ProductPage = () => {
  const [data, setData] = useState<ProductType[]>([]);

  useEffect(() => {
    axios
      .get<ProductType[]>(baseURL)
      .then((response) => setData(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <SearchHeader />
      <div className={classes.productHeadingContainer}>
        <p>USD 350</p>
        <h1>TMA-2 HD WIRELESS</h1>
      </div>
      <div className={classes.tabDiv}>
        <TabBarDescription />
      </div>
      <div className={classes.imageCarouselDiv}>
        <ImageCarousel />
      </div>
      <section className={classes.reviewsSection}>
        <h2>Reviews (3)</h2>
        <ReviewList />
      </section>
      <section className={classes.otherProductsSection}>
        <div className={classes.otherProductsDiv}>
          <h3>Another Product</h3>
          <Link to="/all-products">See All</Link>
        </div>
        <ProductCarouselMedium products={data} />
      </section>
      <div className={classes.buttonDiv}>
        <Button textContent="Add To Cart" />
      </div>
    </>
  );
};

export default ProductPage;
