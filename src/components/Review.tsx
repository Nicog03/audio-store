import classes from "./Review.module.css";
import ProfileIcon from "./ProfileIcon";
import Rating from "./Rating";
import { ReviewType } from "../pages/HomePage";

interface PropType {
  review: ReviewType;
}

const Review: React.FC<PropType> = ({ review }) => {
  return (
    <div className={classes.container}>
      <ProfileIcon size="small" />
      <div className={classes.info}>
        <div className={classes.infoUpper}>
          <p>{review.user}</p>
          <p className={classes.reviewDate}>1 Month ago</p>
        </div>
        <Rating reviewValue={review.rating} />
      </div>
      <p className={classes.reviewText}>{review.description}</p>
    </div>
  );
};

export default Review;
