interface PropType {
  description: string;
}

const Features: React.FC<PropType> = ({ description }) => {
  return <p style={{ fontSize: "0.875rem" }}>{description}</p>;
};

export default Features;
