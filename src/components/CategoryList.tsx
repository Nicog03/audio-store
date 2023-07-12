const categoriesArray: string[] = [
  "Headphones",
  "Headsets",
  "Earpads",
  "Cable",
];

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
    <Splide options={splideOptions} aria-label="list of items categories">
      <div className={classes.categoriesList}>
        {categoriesArray.map((category) => (
          <SplideSlide className={classes}>
            <div className={classes.listItem}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? `${classes.active} ${classes.link}` : classes.link
                }
                to={category.toLowerCase()}
              >
                {category}
              </NavLink>
            </div>
          </SplideSlide>
        ))}
      </div>
    </Splide>
  );
};

export default CategoryList;
