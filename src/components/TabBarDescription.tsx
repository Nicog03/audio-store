import classes from "./TabBarDescription.module.css";
import { NavLink } from "react-router-dom";

const TabBarDescription = () => {
  return (
    <div className={classes.container}>
      <NavLink
        className={({ isActive }) =>
          isActive ? `${classes.active} ${classes.link}` : ``
        }
        to="/product"
      >
        Overview
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? `${classes.active} ${classes.link}` : ``
        }
        to="/product"
      >
        Features
      </NavLink>
    </div>
  );
};

export default TabBarDescription;
