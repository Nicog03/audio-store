import filledStar from "../assets/svg/star-filled.svg";
import outlinedStar from "../assets/svg/star-outlined.svg";

interface PropType {
  height?: string;
  filled?: boolean;
}

const StarIcon: React.FC<PropType> = ({ height, filled = true }) => {
  return filled ? (
    <img
      style={{ height: height }}
      src={filledStar}
      alt="icon of a yellow star"
    />
  ) : (
    <img
      style={{ height: height }}
      src={outlinedStar}
      alt="icon of a star outline"
    />
  );
};

export default StarIcon;
