import Header from "../components/organisms/Header";
import { Link, useParams, useRouteLoaderData } from "react-router-dom";
import ProductCarouselMedium from "../components/organisms/ProductCarouselMedium";
import { ProductType } from "../interfaces/product.interface";
import Button from "../components/atoms/Button";
import TabBarDescription from "../components/molecules/TabBarDescription";
import ImageCarousel from "../components/molecules/ImageCarousel";
import classes from "./ProductPage.module.css";
import ReviewList from "../components/organisms/ReviewList";
import Features from "../components/atoms/Features";
import { Context } from "../App";
import { useContext, useState } from "react";

import { useMediaQuery } from "react-responsive";

interface PropType {
  mode: "overview" | "features";
}

const ProductPage: React.FC<PropType> = ({ mode }) => {
  const data = useRouteLoaderData("root-path") as ProductType[];
  window.scrollTo({ top: 0, left: 0 });

  const [, setValue] = useState(0);

  const reloadPage = () => {
    setValue((value) => value + 1);
  };

  const isMediumScreen = useMediaQuery({ query: "(min-width: 1024px" });

  const { id } = useParams();

  const productData = data.find((product) => product.id === +id!);

  const { context, setContext } = useContext(Context);

  const pushProductToCartHandler = () => {
    context.find((product: ProductType) => product.id === productData!.id)
      ? (productData!.quantity! += 1)
      : (productData!.quantity = 1);
    productData!.quantity === 1
      ? setContext((prevArray: ProductType[]) => [...prevArray, productData!])
      : reloadPage();
  };

  return (
    <div className={classes.container}>
      <Header mode="product-page" />
      {!isMediumScreen && (
        <>
          <div className={classes.productHeadingContainer}>
            <p>USD {productData?.price.replace("$", "")}</p>
            <h1>{productData?.name}</h1>
          </div>
          <div className={classes.tabDiv}>
            <TabBarDescription productId={productData!.id} />
          </div>
        </>
      )}
      {mode === "overview" ? (
        <div className={classes.overviewContent}>
          <div className={classes.flexContainer}>
            <div className={classes.tabContent}>
              <ImageCarousel />
            </div>
            {isMediumScreen && (
              <div className={classes.productRightSide}>
                <div className={classes.productInfo}>
                  <div className={classes.productHeadingContainer}>
                    <p>USD {productData?.price.replace("$", "")}</p>
                    <h1>{productData?.name}</h1>
                  </div>
                  <p>{productData!.description}</p>
                </div>
                <div className={classes.buttonDiv}>
                  <Button
                    textContent="Add To Cart"
                    onClick={pushProductToCartHandler}
                  />
                </div>
              </div>
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
        </div>
      ) : (
        <div className={classes.tabContent}>
          <Features description={productData!.description} />
        </div>
      )}

      {!isMediumScreen && (
        <div className={classes.buttonDiv}>
          <Button
            textContent="Add To Cart"
            onClick={pushProductToCartHandler}
          />
        </div>
      )}
    </div>
  );
};

export default ProductPage;
