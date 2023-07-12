import TextInput from "../components/TextInput";
import CategoryList from "../components/CategoryList";
import ProductCarouselLarge from "../components/ProductCarouselLarge";
import ProductCarouselMedium from "../components/ProductCarouselMedium";
import Logo from "../components/Logo";
import { Search } from "react-feather";
import { Link } from "react-router-dom";
import classes from "./HomePage.module.css";

interface ReviewType {
  user: string;
  description: string;
  rating: number;
  date: string;
}

export interface ProductType {
  imageUrl: string;
  rating: number;
  price: string;
  name: string;
  description: string;
  category: string;
  created_at: string;
  reviews: ReviewType[];
}

const HomePage = () => {
  return (
    <div className={classes.container}>
      <header className={classes.header}>
        <img src="src/assets/svg/menu.svg" alt="" />
        <Logo />
        <div className={classes.profile}></div>
      </header>
      <div className={classes.firstSection}>
        <div className={classes.greetings}>
          <p>Hi, Andrea</p>
          <h3>What are you looking for today?</h3>
        </div>
        <TextInput icon={<Search />} placeholder="Search headphone" />
      </div>
      <div className={classes.products}>
        <CategoryList />
        <ProductCarouselLarge />
        <div className={classes.featuredHeading}>
          <p>Featured Products</p>
          <Link to="/">See All</Link>
        </div>
        <ProductCarouselMedium />
      </div>
    </div>
  );
};

export default HomePage;
