import classes from "./ProfileIcon.module.css";
import profileImage from "../assets/png/blank-profile-picture.png";

interface PropTypes {
  size: "small" | "large";
}

const ProfileIcon: React.FC<PropTypes> = ({ size }) => {
  return (
    <img
      className={`${classes.image} ${size === "small" ? classes.small : ""}`}
      src={profileImage}
      alt="user profile picture"
    />
  );
};

export default ProfileIcon;
