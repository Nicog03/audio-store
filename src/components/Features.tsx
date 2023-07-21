interface PropType {
  description: string;
}

const Features: React.FC<PropType> = ({ description }) => {
  return <p style={{ fontSize: "0.875em" }}>{description}</p>;
};

export default Features;
