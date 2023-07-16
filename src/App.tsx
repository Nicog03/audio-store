import HomePage from "./pages/HomePage.tsx";
import SignInPage from "./pages/SignInPage.tsx";
import AllProductsPage from "./pages/AllProductsPage.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductPage from "./pages/ProductPage.tsx";
import { loader as productLoader } from "./loader-function.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    loader: productLoader,
    id: "root-path",
    children: [
      {
        path: "/:category",
        element: <HomePage />,
      },
      {
        path: "/search",
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
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
