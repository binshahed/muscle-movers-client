import { createBrowserRouter } from "react-router-dom";
import SignUpPage from "../pages/SignUpPage";
import App from "../App";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import ErrorPage from "../pages/ErrorPage";
import ProductsPage from "../pages/ProductsPage";
import CartPage from "../pages/CartPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, path: "", element: <HomePage /> },
      { path: "home", element: <HomePage /> },
      { path: "products", element: <ProductsPage /> },
      { path: "cart", element: <CartPage /> },
      {
        path: "sign-up",
        element: <SignUpPage />
      },
      {
        path: "login",
        element: <LoginPage />
      },
      { path: "*", element: <ErrorPage /> }
    ]
  }
]);
export default router;
