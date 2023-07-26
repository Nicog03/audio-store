import classes from "./Rating.module.css";
import StarIcon from "../atoms/StarIcon";

interface PropType {
  reviewValue: number;
}

const Rating: React.FC<PropType> = ({ reviewValue }) => {
  const value: number = reviewValue;
  const remaining = 5 - reviewValue;

  return (
    <div className={classes.container}>
      {[...Array<number>(value)].map(() => (
        <StarIcon key={Math.random()} filled={true} />
      ))}
      {[...Array<number>(remaining)].map(() => (
        <StarIcon key={Math.random()} filled={false} />
      ))}
    </div>
  );
};

export default Rating;
