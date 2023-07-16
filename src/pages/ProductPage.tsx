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

interface PropType {
  mode: "overview" | "features";
}

const ProductPage: React.FC<PropType> = ({ mode }) => {
  const data = useRouteLoaderData("root-path") as ProductType[];
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

  const { id } = useParams();

  const productData = data.find((product) => product.id === +id!);

  return (
    <>
      <SearchHeader />
      <div className={classes.productHeadingContainer}>
        <p>USD {productData?.price.replace("$", "")}</p>
        <h1>{productData?.name}</h1>
      </div>
      <div className={classes.tabDiv}>
        <TabBarDescription productId={productData!.id} />
      </div>
      <div className={classes.imageCarouselDiv}>
        {mode === "overview" ? (
          <ImageCarousel />
        ) : (
          <Features description={productData!.description} />
        )}
      </div>
      <section className={classes.reviewsSection}>
        <h2>Reviews ({productData?.reviews.length})</h2>
        <ReviewList reviews={productData!.reviews} />
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
