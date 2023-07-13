import classes from "./Filter.module.css";
import CategoryList from "./CategoryList";
import TextInput from "./TextInput";
import { X } from "react-feather";
import Button from "./Button";
import SortOptions from "./SortOptions";

const Filter = () => {
  return (
    <div className={classes.container}>
      <div className={classes.mainHeadingContainer}>
        <h2>Filter</h2>
        <button className={classes.closeButton}>
          <X />
        </button>
      </div>
      <section>
        <h3>Category</h3>
        <CategoryList isNavList={false} />
      </section>
      <section>
        <h3>Sort By</h3>
        <SortOptions />
      </section>
      <section>
        <h3>Price Range</h3>
        <div className={classes.textInputContainer}>
          <TextInput placeholder="Min Price" />
          <TextInput placeholder="Max Price" />
        </div>
      </section>
      <Button textContent="Apply Filter" />
    </div>
  );
};

export default Filter;
