import classes from "./TabBarDescription.module.css";
import { NavLink } from "react-router-dom";

interface PropType {
  productId: number;
}

const TabBarDescription: React.FC<PropType> = ({ productId }) => {
  return (
    <div className={classes.container}>
      <NavLink
        className={({ isActive }) =>
          isActive ? `${classes.active} ${classes.link}` : ``
        }
        to={`/product/${productId}/overview`}
      >
        Overview
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? `${classes.active} ${classes.link}` : ``
        }
        to={`/product/${productId}/features`}
      >
        Features
      </NavLink>
    </div>
  );
};

export default TabBarDescription;
