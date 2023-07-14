import classes from "./ProfileIcon.module.css";

interface PropTypes {
  size: "small" | "large";
}

const ProfileIcon: React.FC<PropTypes> = ({ size }) => {
  return (
    <img
      className={`${classes.image} ${size === "small" ? classes.small : ""}`}
      src="src/assets/png/blank-profile-picture.png"
      alt="user profile picture"
    />
  );
};

export default ProfileIcon;
