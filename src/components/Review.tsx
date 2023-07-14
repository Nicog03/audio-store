import classes from "./Review.module.css";
import ProfileIcon from "./ProfileIcon";
import Rating from "./Rating";

const Review = () => {
  return (
    <div className={classes.container}>
      <ProfileIcon size="small" />
      <div className={classes.info}>
        <div className={classes.infoUpper}>
          <p>Madelina</p>
          <p className={classes.reviewDate}>1 Month ago</p>
        </div>
        <Rating reviewValue={3} />
      </div>
      <p className={classes.reviewText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
  );
};

export default Review;
