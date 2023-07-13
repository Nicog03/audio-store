interface PropType {
  height?: string;
}

const StarIcon: React.FC<PropType> = ({ height }) => {
  return (
    <img
      style={{ height: height }}
      src="src/assets/svg/star-filled.svg"
      alt="icon of a yellow star"
    />
  );
};

export default StarIcon;
