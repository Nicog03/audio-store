import SearchHeader from "../components/SearchHeader";
import FilterButton from "../components/FilterButton";
import classes from "./AllProductsPage.module.css";
import MediumProductCard from "../components/MediumProducCard";
import axios from "axios";
import { useEffect, useState } from "react";
import { ProductType } from "./HomePage";

const baseURL = "https://run.mocky.io/v3/c4ea8253-f0b8-4c1f-ba83-4d30d8049cc9";

const AllProductsPage = () => {
  const [data, setData] = useState<ProductType[]>([]);

  useEffect(() => {
    axios
      .get<ProductType[]>(baseURL)
      .then((response) => setData(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className={classes.container}>
      <SearchHeader />
      <div className={classes.upperContainer}>
        <div className={classes.headingContainer}>
          <p>Featured products</p>
          <h2>See all products</h2>
        </div>
        <FilterButton />
      </div>
      <div className={classes.productsSection}>
        {data.map((product) => (
          <MediumProductCard productInfo={product} displayReview={true} />
        ))}
      </div>
    </div>
  );
};

export default AllProductsPage;
