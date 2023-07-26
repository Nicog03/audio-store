import classes from "./ReviewList.module.css";
import Review from "../molecules/Review";
import { ReviewType } from "../../interfaces/review.interface";

interface PropTypes {
  reviews: ReviewType[];
}

const ReviewList: React.FC<PropTypes> = ({ reviews }) => {
  return (
    <div className={classes.container}>
      {reviews.map((review) => (
        <Review key={review.id} review={review} />
      ))}
    </div>
  );
};

export default ReviewList;
