import classes from "./Filter.module.css";
import CategoryList from "./CategoryList";
import TextInput from "./TextInput";
import { X, RotateCcw } from "react-feather";
import Button from "./Button";
import SortOptions from "./SortOptions";
import { useState, useContext } from "react";
import { Context } from "../App";

interface FilterType {
  category: string;
  sortBy: string;
  minPrice: string;
  maxPrice: string;
}

interface PropType {
  XClickAction: React.MouseEventHandler<HTMLButtonElement>;
  changeData: React.Dispatch<React.SetStateAction<FilterType | null>>;
  setFilterQnt: React.Dispatch<React.SetStateAction<number>>;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Filter: React.FC<PropType> = ({
  XClickAction,
  changeData,
  setFilterQnt,
  setOpen,
}) => {
  const { filter, setFilter } = useContext(Context);

  const [category, setCategory] = useState(filter.category);
  const [sortBy, setSortBy] = useState(filter.sortBy);
  const [minPrice, setMinPrice] = useState(filter.minPrice);
  const [maxPrice, setMaxPrice] = useState(filter.maxPrice);

  const changeCategoryHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCategory(e.target.value);
  };

  const changeSortByHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSortBy(e.target.value);
  };

  const changeMinPriceHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMinPrice(e.target.value);
  };

  const changeMaxPriceHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMaxPrice(e.target.value);
  };

  const changeFilterOptions = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let numOfFilter = 0;
    const FilterArray = [category, sortBy, minPrice, maxPrice];

    FilterArray[0] != "" ? numOfFilter++ : null;
    FilterArray[1] != "" ? numOfFilter++ : null;
    FilterArray[2].trim() || FilterArray[3].trim() ? numOfFilter++ : null;

    setFilter({
      category,
      sortBy,
      minPrice,
      maxPrice,
      numOfFilter,
    });

    setFilterQnt(numOfFilter);
    changeData({ category, sortBy, minPrice, maxPrice });
    setOpen(false);
  };

  const resetFilter = () => {
    setCategory("");
    setSortBy("");
    setMinPrice("");
    setMaxPrice("");
    setFilterQnt(0);
    changeData({ category: "", sortBy: "", minPrice: "", maxPrice: "" });
    setFilter({
      category: "",
      sortBy: "",
      minPrice: "",
      maxPrice: "",
      numOfFilter: 0,
    });
  };

  return (
    <form onSubmit={changeFilterOptions} className={classes.container}>
      <div className={classes.mainHeadingContainer}>
        <h2>Filter</h2>
        <div className={classes.buttonContainer}>
          <button
            type="button"
            onClick={resetFilter}
            className={classes.resetButton}
          >
            <RotateCcw height={"1.2em"} width={"1.2em"} />
          </button>
          <button
            type="button"
            onClick={XClickAction}
            className={classes.closeButton}
          >
            <X />
          </button>
        </div>
      </div>
      <div className={classes.sectionContainer}>
        <section>
          <h3>Category</h3>
          <CategoryList
            isNavList={false}
            inputChangeAction={changeCategoryHandler}
            categoryValue={category}
          />
        </section>
        <section>
          <h3>Sort By</h3>
          <SortOptions changeAction={changeSortByHandler} current={sortBy} />
        </section>
      </div>
      <section>
        <h3>Price Range</h3>
        <div className={classes.textInputContainer}>
          <TextInput
            type="text"
            placeholder="Min Price"
            changeAction={changeMinPriceHandler}
            value={minPrice}
          />
          <TextInput
            type="text"
            placeholder="Max Price"
            changeAction={changeMaxPriceHandler}
            value={maxPrice}
          />
        </div>
      </section>
      <Button textContent="Apply Filter" />
    </form>
  );
};

export default Filter;
