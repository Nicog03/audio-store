import { Link } from "react-router-dom";
import classes from "./LargeProductCard.module.css";
import { ArrowRight } from "react-feather";

const LargeProductCard = () => {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.leftSide}>
          <h2>TMA-2 Modular Headphone</h2>
          <Link className={classes.link} to="/">
            Shop now <ArrowRight />
          </Link>
        </div>
        <img src="./src/assets/png/headset.png" alt="" />
      </div>
    </>
  );
};

export default LargeProductCard;
