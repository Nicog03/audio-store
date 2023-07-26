import TextInput from "../components/atoms/TextInput";
import CategoryList from "../components/molecules/CategoryList";
import ProductCarouselLarge from "../components/organisms/ProductCarouselLarge";
import ProductCarouselMedium from "../components/organisms/ProductCarouselMedium";
import { Search } from "react-feather";
import {
  Link,
  useNavigate,
  useParams,
  useRouteLoaderData,
} from "react-router-dom";
import classes from "./HomePage.module.css";
import { useState, useEffect } from "react";
import ProductArrayCompact from "../components/organisms/ProductArrayCompact";
import Header from "../components/organisms/Header";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { ProductType } from "../interfaces/product.interface";
import { motion } from "framer-motion";

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
      className={`${classes.parentContainer} ${
        searchMode ? classes.parentContainerSearchMode : ""
      }`}
    >
      <div
        className={`${classes.container} ${searchMode ? classes.onSearch : ""}`}
      >
        {searchMode ? <Header mode="search" /> : <Header />}

        <div className={classes.firstSection}>
          {!searchMode && (
            <motion.div
              initial={{ transform: "translateY(-100%)" }}
              exit={{ transform: "translateY(-100%)" }}
              animate={{ transform: "translateY(0)" }}
            >
              <div className={classes.greetings}>
                <p>Hi, {loggedIn && userName}</p>
                <h3>What are you looking for today?</h3>
              </div>
            </motion.div>
          )}
          <motion.div layout>
            <TextInput
              type="text"
              icon={<Search />}
              placeholder={`Search ${category!}`}
              focusAction={changePageModeHandler}
              changeAction={filterArrayHandler}
            />
          </motion.div>
        </div>
        {!searchMode && (
          <motion.div
            initial={{ transform: "translateY(100%)" }}
            exit={{ transform: "translateY(100%)" }}
            animate={{ transform: "translateY(0)" }}
          >
            <motion.div layout="position" className={classes.products}>
              <CategoryList />
              <ProductCarouselLarge products={categoryArray} />
              <div className={classes.featuredHeading}>
                <p>Featured Products</p>
                <Link to="/all-products">See All</Link>
              </div>
              <ProductCarouselMedium products={categoryArray} />
            </motion.div>
          </motion.div>
        )}
        {searchMode && (
          <motion.div
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <section className={classes.popularProductsSection}>
              <h3 className={classes.popularProductsHeader}>
                Popular products
              </h3>
              <ProductArrayCompact
                isOnShoppingCart={false}
                products={filteredArray}
              />
            </section>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
