import classes from "./SortOptions.module.css";

const options = [
  "Popularity",
  "Newest",
  "Oldest",
  "High Price",
  "Low Price",
  "Reviews",
];

interface PropType {
  changeAction: React.ChangeEventHandler<HTMLInputElement>;
}

const SortOptions: React.FC<PropType> = ({ changeAction }) => {
  return (
    <div className={classes.container}>
      {options.map((option) => (
        <div key={option}>
          <input
            onChange={changeAction}
            className={classes.input}
            type="radio"
            name="sort_by"
            value={option.toLowerCase()}
            id={option.toLowerCase()}
          />
          <label className={classes.label} htmlFor={option.toLowerCase()}>
            {option}
          </label>
        </div>
      ))}
    </div>
  );
};

export default SortOptions;
