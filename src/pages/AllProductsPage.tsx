import SearchHeader from "../components/SearchHeader";
import FilterButton from "../components/FilterButton";
import classes from "./AllProductsPage.module.css";
import MediumProductCard from "../components/MediumProducCard";
import { useState } from "react";
import { ProductType } from "./HomePage";
import { BottomSheet } from "react-spring-bottom-sheet-updated";
import Filter from "../components/Filter";
import "react-spring-bottom-sheet-updated/dist/style.css";
import { useRouteLoaderData } from "react-router-dom";

interface FilterType {
  category: string;
  sortBy: string;
  minPrice: string;
  maxPrice: string;
}

const AllProductsPage = () => {
  const data = useRouteLoaderData("root-path") as ProductType[];

  const [open, setOpen] = useState(false);
  const [filterData, setFilterData] = useState<FilterType | null>(null);
  const [filterQnt, setFilterQnt] = useState(0);

  const openBottomSheetHandler = () => {
    setOpen(true);
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
      }

      if (filterData.minPrice) {
        filteredArray = data.filter(
          (product) => +product.price.replace("$", "") > +filterData.minPrice
        );
      }

      if (filterData.maxPrice) {
        filteredArray = data.filter(
          (product) => +product.price.replace("$", "") < +filterData.maxPrice
        );
      }
    }
  }

  return (
    <div className={classes.container}>
      <SearchHeader />
      <div className={classes.upperContainer}>
        <div className={classes.headingContainer}>
          <p>Featured products</p>
          <h2>See all products</h2>
        </div>
        <FilterButton
          clickAction={openBottomSheetHandler}
          filtersApplied={filterQnt}
        />
      </div>
      <div className={classes.productsSection}>
        {!filteredArray
          ? data.map((product) => (
              <MediumProductCard
                key={product.created_at}
                productInfo={product}
                displayReview={true}
              />
            ))
          : filteredArray.map((product) => (
              <MediumProductCard
                key={product.created_at}
                productInfo={product}
                displayReview={true}
              />
            ))}
      </div>
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
    </div>
  );
};

export default AllProductsPage;
