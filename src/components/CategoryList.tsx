const categoriesArray: string[] = ["Headphone", "Headband", "Earpads", "Cable"];

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import { NavLink } from "react-router-dom";

import classes from "./CategoryList.module.css";

const splideOptions = {
  autoHeight: true,
  autoWidth: true,
  snap: false,
  arrows: false,
  pagination: false,
};

const CategoryList = () => {
  return (
    <ul className={classes.UlList}>
      <Splide options={splideOptions} aria-label="list of items categories">
        {categoriesArray.map((category) => (
          <SplideSlide>
            <li className={classes.listItem}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? `${classes.active} ${classes.link}` : classes.link
                }
                to={category.toLowerCase()}
              >
                {category}
              </NavLink>
            </li>
          </SplideSlide>
        ))}
      </Splide>
    </ul>
  );
};

export default CategoryList;
