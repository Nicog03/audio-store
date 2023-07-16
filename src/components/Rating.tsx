import classes from "./Rating.module.css";
import StarIcon from "./StarIcon";

interface PropType {
  reviewValue: number;
}

const Rating: React.FC<PropType> = ({ reviewValue }) => {
  const value: number = reviewValue;
  const remaining = 5 - reviewValue;

  return (
    <div className={classes.container}>
      {[...Array<number>(value)].map((key) => (
        <StarIcon key={key} filled={true} />
      ))}
      {[...Array<number>(remaining)].map((key) => (
        <StarIcon key={key} filled={false} />
      ))}
    </div>
  );
};

export default Rating;
