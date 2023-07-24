import Header from "../components/Header";
import FilterButton from "../components/FilterButton";
import classes from "./AllProductsPage.module.css";
import MediumProductCard from "../components/MediumProducCard";
import { useContext, useState } from "react";
import { ProductType } from "./HomePage";
import { BottomSheet } from "react-spring-bottom-sheet-updated";
import Filter from "../components/Filter";
import "react-spring-bottom-sheet-updated/dist/style.css";
import { useRouteLoaderData } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";
import { Context } from "../App";

interface FilterType {
  category: string;
  sortBy: string;
  minPrice: string;
  maxPrice: string;
}

const AllProductsPage = () => {
  const data = useRouteLoaderData("root-path") as ProductType[];

  const { filter } = useContext(Context);

  const isMediumScreen = useMediaQuery({ query: "(min-width: 768px" });

  const [open, setOpen] = useState(false);
  const [filterData, setFilterData] = useState<FilterType | null>(null);
  const [filterQnt, setFilterQnt] = useState(filter.numOfFilter);

  const openBottomSheetHandler = () => {
    setOpen((prev) => !prev);
  };

  const closeBottomSheetHandler = () => {
    setOpen(false);
  };

  let filteredArray;

  if (filterData?.category) {
    filteredArray = data.filter(
      (product) => product.category === filterData?.category
    );
  }

  const dataCopy = [...data];

  if (filterData?.sortBy) {
    switch (filterData.sortBy) {
      case "popularity":
        if (filteredArray) {
          filteredArray = filteredArray?.sort((a, b) =>
            a.rating > b.rating ? -1 : a.rating < b.rating ? 1 : 0
          );
        } else {
          filteredArray = dataCopy.sort((a, b) =>
            a.rating > b.rating ? -1 : a.rating < b.rating ? 1 : 0
          );
        }
        break;
      case "newest":
        if (filteredArray) {
          filteredArray = filteredArray?.sort((a, b) =>
            a.created_at > b.created_at
              ? -1
              : a.created_at < b.created_at
              ? 1
              : 0
          );
        } else {
          filteredArray = dataCopy.sort((a, b) =>
            a.created_at > b.created_at
              ? -1
              : a.created_at < b.created_at
              ? 1
              : 0
          );
        }
        break;
      case "oldest":
        if (filteredArray) {
          filteredArray = filteredArray?.sort((a, b) =>
            a.created_at < b.created_at
              ? -1
              : a.created_at > b.created_at
              ? 1
              : 0
          );
        } else {
          filteredArray = dataCopy.sort((a, b) =>
            a.created_at < b.created_at
              ? -1
              : a.created_at > b.created_at
              ? 1
              : 0
          );
        }
        break;
      case "high price":
        if (filteredArray) {
          filteredArray = filteredArray?.sort((a, b) =>
            +a.price.replace("$", "") > +b.price.replace("$", "")
              ? -1
              : +a.price.replace("$", "") < +b.price.replace("$", "")
              ? 1
              : 0
          );
        } else {
          filteredArray = dataCopy.sort((a, b) =>
            +a.price.replace("$", "") > +b.price.replace("$", "")
              ? -1
              : +a.price.replace("$", "") < +b.price.replace("$", "")
              ? 1
              : 0
          );
        }
        break;
      case "low price":
        if (filteredArray) {
          filteredArray = filteredArray?.sort((a, b) =>
            +a.price.replace("$", "") < +b.price.replace("$", "")
              ? -1
              : +a.price.replace("$", "") > +b.price.replace("$", "")
              ? 1
              : 0
          );
        } else {
          filteredArray = data.sort((a, b) =>
            +a.price.replace("$", "") < +b.price.replace("$", "")
              ? -1
              : +a.price.replace("$", "") > +b.price.replace("$", "")
              ? 1
              : 0
          );
        }
        break;
      case "reviews":
        if (filteredArray) {
          filteredArray = filteredArray?.sort((a, b) =>
            a.reviews.length > b.reviews.length
              ? -1
              : a.reviews.length < b.reviews.length
              ? 1
              : 0
          );
        } else {
          filteredArray = data.sort((a, b) =>
            a.reviews.length > b.reviews.length
              ? -1
              : a.reviews.length < b.reviews.length
              ? 1
              : 0
          );
        }
        break;
    }
  }

  if (filterData?.minPrice || filterData?.maxPrice) {
    if (filteredArray) {
      if (filterData.minPrice && filterData.maxPrice) {
        filteredArray = filteredArray.filter(
          (product) =>
            +product.price.replace("$", "") > +filterData.minPrice &&
            +product.price.replace("$", "") < +filterData.maxPrice
        );
      }

      if (filterData.minPrice) {
        filteredArray = filteredArray.filter(
          (product) => +product.price.replace("$", "") > +filterData.minPrice
        );
      }

      if (filterData.maxPrice) {
        filteredArray = filteredArray.filter(
          (product) => +product.price.replace("$", "") < +filterData.maxPrice
        );
      }
    } else {
      if (filterData.minPrice && filterData.maxPrice) {
        filteredArray = data.filter(
          (product) =>
            +product.price.replace("$", "") > +filterData.minPrice &&
            +product.price.replace("$", "") < +filterData.maxPrice
        );
      } else if (filterData.minPrice) {
        filteredArray = data.filter(
          (product) => +product.price.replace("$", "") > +filterData.minPrice
        );
      } else if (filterData.maxPrice) {
        filteredArray = data.filter(
          (product) => +product.price.replace("$", "") < +filterData.maxPrice
        );
        return;
      }
    }
  }

  const products = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const productCard = {
    hidden: { opacity: 0, y: -20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className={classes.container}>
      <Header mode="product-page" />
      <div className={classes.upperContainer}>
        <motion.div
          initial={{ transform: "translateY(-3em)" }}
          animate={{ transform: "translateY(0)" }}
          className={classes.headingContainer}
        >
          <p>Featured products</p>
          <h2>See all products</h2>
        </motion.div>
        <FilterButton
          clickAction={openBottomSheetHandler}
          filtersApplied={filterQnt}
        />
        {isMediumScreen && open && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <Filter
              XClickAction={closeBottomSheetHandler}
              changeData={setFilterData}
              setFilterQnt={setFilterQnt}
              setOpen={setOpen}
            />
          </motion.div>
        )}
      </div>
      <motion.div
        layout="position"
        variants={products}
        initial="hidden"
        animate="show"
        className={classes.productsSection}
      >
        {!filteredArray ? (
          data.map((product) => (
            <motion.li key={product.created_at} variants={productCard}>
              <MediumProductCard productInfo={product} displayReview={true} />
            </motion.li>
          ))
        ) : filteredArray.length ? (
          filteredArray.map((product) => (
            <MediumProductCard
              key={product.created_at}
              productInfo={product}
              displayReview={true}
            />
          ))
        ) : (
          <MediumProductCard />
        )}
      </motion.div>
      {!isMediumScreen && (
        <BottomSheet
          open={open}
          onDismiss={() => setOpen(false)}
          snapPoints={({ minHeight }) => minHeight}
        >
          <Filter
            XClickAction={closeBottomSheetHandler}
            changeData={setFilterData}
            setFilterQnt={setFilterQnt}
            setOpen={setOpen}
          />
        </BottomSheet>
      )}
    </div>
  );
};

export default AllProductsPage;
