import { Sliders } from "react-feather";
import classes from "./FilterButton.module.css";

interface propType {
  filtersApplied?: number;
}

const FilterButton: React.FC<propType> = ({ filtersApplied }) => {
  return (
    <button className={classes.container}>
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
