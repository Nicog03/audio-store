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
  gap: "0.688em",
  arrows: false,
  pagination: false,
};

interface propTypes {
  isNavList?: boolean;
  inputChangeAction?: React.ChangeEventHandler<HTMLInputElement>;
}

const CategoryList: React.FC<propTypes> = ({
  isNavList = true,
  inputChangeAction,
}) => {
  return (
    <Splide options={splideOptions} aria-label="list of items categories">
      {categoriesArray.map((category) => (
        <SplideSlide key={category}>
          <div className={classes.listItem}>
            {isNavList ? (
              <NavLink
                className={({ isActive }) =>
                  isActive ? `${classes.active} ${classes.link}` : classes.link
                }
                to={`/${category.toLowerCase()}`}
              >
                {category}
              </NavLink>
            ) : (
              <div className={classes.radioContainer}>
                <input
                  onChange={inputChangeAction}
                  className={classes.radioInput}
                  type="radio"
                  id={category}
                  name="product_category"
                  value={category}
                />
                <label
                  className={`${classes.radioLabel} ${classes.listItem} ${classes.link}`}
                  htmlFor={category}
                >
                  {category}
                </label>
              </div>
            )}
          </div>
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default CategoryList;
