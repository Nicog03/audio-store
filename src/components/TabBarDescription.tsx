import classes from "./TabBarDescription.module.css";
import { NavLink } from "react-router-dom";

const TabBarDescription = () => {
  return (
    <div className={classes.container}>
      <NavLink
        className={({ isActive }) =>
          isActive ? `${classes.active} ${classes.link}` : ``
        }
        to="/product/:id/overview"
      >
        Overview
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? `${classes.active} ${classes.link}` : ``
        }
        to="/product/:id/features"
      >
        Features
      </NavLink>
    </div>
  );
};

export default TabBarDescription;
