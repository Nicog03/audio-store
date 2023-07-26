import { Sliders } from "react-feather";
import classes from "./FilterButton.module.css";

interface propType {
  filtersApplied?: number;
  clickAction: React.MouseEventHandler<HTMLButtonElement>;
}

const FilterButton: React.FC<propType> = ({ filtersApplied, clickAction }) => {
  return (
    <button onClick={clickAction} className={classes.container}>
      {filtersApplied ? (
        <div className={classes.quantity}>
          <p>{filtersApplied}</p>
        </div>
      ) : (
        <Sliders height={20} width={20} />
      )}

      <p>Filters</p>
    </button>
  );
};

export default FilterButton;
