import HomePage from "./pages/HomePage.tsx";
import SignInPage from "./pages/SignInPage.tsx";
import AllProductsPage from "./pages/AllProductsPage.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductPage from "./pages/ProductPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    children: [
      {
        path: ":category",
        element: <HomePage />,
      },
    ],
  },
  {
    path: "/search",
    element: <HomePage mode={"search"} />,
  },
  { path: "/all-products", element: <AllProductsPage /> },
  {
    path: "/signin",
    element: <SignInPage mode={"signin"} />,
  },
  {
    path: "/signup",
    element: <SignInPage mode={"signup"} />,
  },
  {
    path: "/product/:id/overview",
    element: <ProductPage mode="overview" />,
  },
  {
    path: "/product/:id/features",
    element: <ProductPage mode="features" />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
