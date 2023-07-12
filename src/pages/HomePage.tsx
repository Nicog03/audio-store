import TextInput from "../components/TextInput";
import CategoryList from "../components/CategoryList";
import ProductCarouselLarge from "../components/ProductCarouselLarge";
import ProductCarouselMedium from "../components/ProductCarouselMedium";
import Logo from "../components/Logo";
import { Search } from "react-feather";
import { Link, useParams } from "react-router-dom";
import classes from "./HomePage.module.css";
import axios from "axios";
import { useEffect, useState } from "react";

const baseURL = "https://run.mocky.io/v3/c4ea8253-f0b8-4c1f-ba83-4d30d8049cc9";

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
  const [data, setData] = useState<ProductType[]>([]);

  const { category } = useParams();

  useEffect(() => {
    axios
      .get<ProductType[]>(baseURL)
      .then((response) => setData(response.data))
      .catch((error) => console.error(error));
  }, []);

  const categoryArray: ProductType[] = data.filter(
    (item) => item.category.toLowerCase() === category
  );

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
