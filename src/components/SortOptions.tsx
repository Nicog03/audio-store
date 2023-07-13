import classes from "./SortOptions.module.css";

const SortOptions = () => {
  return (
    <div className={classes.container}>
      <input
        className={classes.input}
        type="radio"
        name="sort_by"
        id="popularity"
      />
      <label className={classes.label} htmlFor="popularity">
        Popularity
      </label>
      <input
        className={classes.input}
        type="radio"
        name="sort_by"
        id="newest"
      />
      <label className={classes.label} htmlFor="newest">
        Newest
      </label>
      <input
        className={classes.input}
        type="radio"
        name="sort_by"
        id="oldest"
      />
      <label className={classes.label} htmlFor="oldest">
        Oldest
      </label>
      <input
        className={classes.input}
        type="radio"
        name="sort_by"
        id="high_price"
      />
      <label className={classes.label} htmlFor="high_price">
        High Price
      </label>
      <input
        className={classes.input}
        type="radio"
        name="sort_by"
        id="low_price"
      />
      <label className={classes.label} htmlFor="low_price">
        Low Price
      </label>
      <input
        className={classes.input}
        type="radio"
        name="sort_by"
        id="reviews"
      />
      <label className={classes.label} htmlFor="reviews">
        Reviews
      </label>
    </div>
  );
};

export default SortOptions;
