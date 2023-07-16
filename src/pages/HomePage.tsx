import TextInput from "../components/TextInput";
import CategoryList from "../components/CategoryList";
import ProductCarouselLarge from "../components/ProductCarouselLarge";
import ProductCarouselMedium from "../components/ProductCarouselMedium";
import Logo from "../components/Logo";
import { Search } from "react-feather";
import { Link, useNavigate, useParams } from "react-router-dom";
import classes from "./HomePage.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import ProductArrayCompact from "../components/ProductArrayCompact";
import SearchHeader from "../components/SearchHeader";
import { ApiURL } from "../api-url";

interface ReviewType {
  user: string;
  description: string;
  rating: number;
  date: string;
}

export interface ProductType {
  imageUrl: string;
  rating: number;
  price: string;
  name: string;
  description: string;
  category: string;
  created_at: string;
  reviews: ReviewType[];
  id: number;
}

interface PropTypes {
  mode?: "search";
}

const HomePage: React.FC<PropTypes> = ({ mode }) => {
  const [data, setData] = useState<ProductType[]>([]);
  const [filteredArray, setFilteredArray] = useState<ProductType[]>([]);

  const { category } = useParams();
  const navigate = useNavigate();

  const searchMode = mode === "search";

  useEffect(() => {
    axios
      .get<ProductType[]>(ApiURL)
      .then((response) => setData(response.data))
      .catch((error) => console.error(error));
  }, []);

  const categoryArray: ProductType[] = data.filter(
    (item) => item.category.toLowerCase() === category
  );

  const changePageModeHandler = () => {
    navigate("/search");
  };

  const filterArrayHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.trim()) {
      setFilteredArray(
        data.filter((item) =>
          item.name.toLowerCase().startsWith(e.target.value.toLowerCase())
        )
      );
    } else {
      setFilteredArray(data);
    }
  };

  return (
    <div
      className={`${classes.container} ${searchMode ? classes.onSearch : ""}`}
    >
      {searchMode ? (
        <SearchHeader />
      ) : (
        <header className={classes.header}>
          <img src="src/assets/svg/menu.svg" alt="" />
          <Logo />
          <div className={classes.profile}></div>
        </header>
      )}

      <div className={classes.firstSection}>
        {!searchMode && (
          <div className={classes.greetings}>
            <p>Hi, Andrea</p>
            <h3>What are you looking for today?</h3>
          </div>
        )}
        <TextInput
          icon={<Search />}
          placeholder="Search headphone"
          focusAction={changePageModeHandler}
          changeAction={filterArrayHandler}
        />
      </div>
      {!searchMode && (
        <div className={classes.products}>
          <CategoryList />
          <ProductCarouselLarge products={categoryArray} />
          <div className={classes.featuredHeading}>
            <p>Featured Products</p>
            <Link to="/all-products">See All</Link>
          </div>
          <ProductCarouselMedium products={categoryArray} />
        </div>
      )}
      {searchMode && (
        <section className={classes.popularProductsSection}>
          <h3 className={classes.popularProductsHeader}>Popular products</h3>
          <ProductArrayCompact products={filteredArray} />
        </section>
      )}
    </div>
  );
};

export default HomePage;
