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
import { Context } from "../App";
import { useContext, useState } from "react";

interface PropType {
  mode: "overview" | "features";
}

const ProductPage: React.FC<PropType> = ({ mode }) => {
  const data = useRouteLoaderData("root-path") as ProductType[];
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

  const [value, setValue] = useState(0);

  const reloadPage = () => {
    setValue((value) => value + 1);
  };

  const { id } = useParams();

  const productData = data.find((product) => product.id === +id!);

  const { context, setContext } = useContext(Context);

  const pushProductToCartHandler = () => {
    context.find((product) => product.id === productData!.id)
      ? (productData!.quantity! += 1)
      : (productData!.quantity = 1);
    productData!.quantity === 1
      ? setContext((prevArray) => [...prevArray, productData!])
      : reloadPage();
  };

  return (
    <>
      <SearchHeader mode="product-page" />
      <div className={classes.productHeadingContainer}>
        <p>USD {productData?.price.replace("$", "")}</p>
        <h1>{productData?.name}</h1>
      </div>
      <div className={classes.tabDiv}>
        <TabBarDescription productId={productData!.id} />
      </div>
      {mode === "overview" ? (
        <div className={classes.overviewContent}>
          <div className={classes.tabContent}>
            <ImageCarousel />
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
        </div>
      ) : (
        <div className={classes.tabContent}>
          <Features description={productData!.description} />
        </div>
      )}

      <div className={classes.buttonDiv}>
        <Button textContent="Add To Cart" onClick={pushProductToCartHandler} />
      </div>
    </>
  );
};

export default ProductPage;
