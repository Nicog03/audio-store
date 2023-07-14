interface PropType {
  height?: string;
  filled?: boolean;
}

const StarIcon: React.FC<PropType> = ({ height, filled = true }) => {
  return filled ? (
    <img
      style={{ height: height }}
      src="src/assets/svg/star-filled.svg"
      alt="icon of a yellow star"
    />
  ) : (
    <img
      style={{ height: height }}
      src="src/assets/svg/star-outlined.svg"
      alt="icon of a star outline"
    />
  );
};

export default StarIcon;
