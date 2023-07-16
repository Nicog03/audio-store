import SearchHeader from "../components/SearchHeader";
import { Link, useParams, useRouteLoaderData } from "react-router-dom";
import ProductCarouselMedium from "../components/ProductCarouselMedium";
import { ProductType } from "./HomePage";
import Button from "../components/Button";
import TabBarDescription from "../components/TabBarDescription";
import ImageCarousel from "../components/ImageCarousel";
import classes from "./ProductPage.module.css";
import ReviewList from "../components/ReviewList";
import Features from "../components/Features";
import { ApiURL } from "../api-url";

interface PropType {
  mode: "overview" | "features";
}

const ProductPage: React.FC<PropType> = ({ mode }) => {
  const data = useRouteLoaderData("product-page") as ProductType[];

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
        {mode === "overview" ? <ImageCarousel /> : <Features />}
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

export async function loader(): Promise<ProductType[]> {
  try {
    const response = await fetch(ApiURL);
    return (await response.json()) as ProductType[];
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export default ProductPage;
