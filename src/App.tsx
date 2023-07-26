import HomePage from "./pages/HomePage.tsx";
import { ProductType } from "./interfaces/product.interface.ts";
import SignInPage from "./pages/SignInPage.tsx";
import AllProductsPage from "./pages/AllProductsPage.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductPage from "./pages/ProductPage.tsx";
import { loader as productLoader } from "./loader-function.tsx";
import ShoppingCartPage from "./pages/ShoppingCartPage.tsx";
import { createContext, SetStateAction, useState } from "react";

const router = createBrowserRouter([
  {
    path: "/",
    loader: productLoader,
    id: "root-path",
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "/:category",
        element: <HomePage />,
      },
      {
        path: "/:category/search",
        element: <HomePage mode={"search"} />,
      },
      { path: "/all-products", element: <AllProductsPage /> },
      {
        path: "/product",
        children: [
          {
            path: ":id/overview",
            element: <ProductPage mode="overview" />,
          },
          {
            path: ":id/features",
            element: <ProductPage mode="features" />,
          },
        ],
      },
      {
        path: "/shopping-cart",
        element: <ShoppingCartPage />,
      },
    ],
  },
  {
    path: "/signin",
    element: <SignInPage mode={"signin"} />,
  },
  {
    path: "/signup",
    element: <SignInPage mode={"signup"} />,
  },
  {
    path: "/password-reset",
    element: <SignInPage mode="password-reset" />,
  },
]);

interface filterType {
  category: string;
  sortBy: string;
  minPrice: string;
  maxPrice: string;
  numOfFilter: number;
}

interface ContextType {
  context: ProductType[];
  setContext: React.Dispatch<SetStateAction<ProductType[]>>;
  filter: filterType;
  setFilter: React.Dispatch<SetStateAction<filterType>>;
}

export const Context = createContext<ContextType>({
  context: [],
  setContext: () => null,
  filter: {
    category: "",
    sortBy: "",
    minPrice: "",
    maxPrice: "",
    numOfFilter: 0,
  },
  setFilter: () => null,
});

function App() {
  const [context, setContext] = useState<ProductType[]>([]);
  const [filter, setFilter] = useState<filterType>({
    category: "",
    sortBy: "",
    minPrice: "",
    maxPrice: "",
    numOfFilter: 0,
  });

  return (
    <Context.Provider value={{ context, setContext, filter, setFilter }}>
      <RouterProvider router={router} />
    </Context.Provider>
  );
}

export default App;
