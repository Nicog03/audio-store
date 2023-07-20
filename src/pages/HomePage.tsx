import TextInput from "../components/TextInput";
import CategoryList from "../components/CategoryList";
import ProductCarouselLarge from "../components/ProductCarouselLarge";
import ProductCarouselMedium from "../components/ProductCarouselMedium";
import { Search } from "react-feather";
import {
  Link,
  useNavigate,
  useParams,
  useRouteLoaderData,
} from "react-router-dom";
import classes from "./HomePage.module.css";
import { useState, useEffect } from "react";
import ProductArrayCompact from "../components/ProductArrayCompact";
import Header from "../components/Header";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";

export interface ReviewType {
  user: string;
  description: string;
  rating: number;
  date: string;
  id: number;
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
  quantity?: number;
}

interface PropTypes {
  mode?: "search";
}

const HomePage: React.FC<PropTypes> = ({ mode }) => {
  const data = useRouteLoaderData("root-path") as ProductType[];

  const userName = localStorage.getItem("name")?.replace(/ .*/, "");

  const [loggedIn, setLoggedIn] = useState(false);

  const { category } = useParams();
  const navigate = useNavigate();

  const searchMode = mode === "search";

  const categoryArray: ProductType[] = data.filter(
    (item) => item.category.toLowerCase() === category
  );

  const [filteredArray, setFilteredArray] =
    useState<ProductType[]>(categoryArray);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
    });
  }, []);

  const changePageModeHandler = () => {
    navigate(`/${category!}/search`);
    setFilteredArray(categoryArray);
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
      {searchMode ? <Header mode="search" /> : <Header />}

      <div className={classes.firstSection}>
        {!searchMode && (
          <div className={classes.greetings}>
            <p>Hi, {loggedIn && userName}</p>
            <h3>What are you looking for today?</h3>
          </div>
        )}
        <TextInput
          type="text"
          icon={<Search />}
          placeholder={`Search ${category!}`}
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
          <ProductArrayCompact
            isOnShoppingCart={false}
            products={filteredArray}
          />
        </section>
      )}
    </div>
  );
};

export default HomePage;
