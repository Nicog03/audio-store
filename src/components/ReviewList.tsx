import classes from "./ReviewList.module.css";
import Review from "./Review";

const ReviewList = () => {
  return (
    <div className={classes.container}>
      <Review />
      <Review />
    </div>
  );
};

export default ReviewList;
