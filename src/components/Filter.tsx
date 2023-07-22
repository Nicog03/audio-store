import classes from "./Filter.module.css";
import CategoryList from "./CategoryList";
import TextInput from "./TextInput";
import { X } from "react-feather";
import Button from "./Button";
import SortOptions from "./SortOptions";
import { useState } from "react";

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
  const [category, setCategory] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

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
    const filter = [category, sortBy, minPrice, maxPrice];
    let numOfFilter = 0;

    filter.forEach((item) => (item != "" ? numOfFilter++ : null));

    setFilterQnt(numOfFilter);
    changeData({ category, sortBy, minPrice, maxPrice });
    setOpen(false);
  };

  return (
    <form onSubmit={changeFilterOptions} className={classes.container}>
      <div className={classes.mainHeadingContainer}>
        <h2>Filter</h2>
        <button
          type="button"
          onClick={XClickAction}
          className={classes.closeButton}
        >
          <X />
        </button>
      </div>
      <section>
        <h3>Category</h3>
        <CategoryList
          isNavList={false}
          inputChangeAction={changeCategoryHandler}
        />
      </section>
      <section>
        <h3>Sort By</h3>
        <SortOptions changeAction={changeSortByHandler} />
      </section>
      <section>
        <h3>Price Range</h3>
        <div className={classes.textInputContainer}>
          <TextInput
            type="text"
            placeholder="Min Price"
            changeAction={changeMinPriceHandler}
          />
          <TextInput
            type="text"
            placeholder="Max Price"
            changeAction={changeMaxPriceHandler}
          />
        </div>
      </section>
      <Button textContent="Apply Filter" />
    </form>
  );
};

export default Filter;
