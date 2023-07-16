import classes from "./ReviewList.module.css";
import Review from "./Review";
import { ReviewType } from "../pages/HomePage";

interface PropTypes {
  reviews: ReviewType[];
}

const ReviewList: React.FC<PropTypes> = ({ reviews }) => {
  return (
    <div className={classes.container}>
      {reviews.map((review) => (
        <Review review={review} />
      ))}
    </div>
  );
};

export default ReviewList;
