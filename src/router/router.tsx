import { createBrowserRouter } from "react-router-dom";
import SignUpPage from "../pages/SignUpPage";
import App from "../App";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import ErrorPage from "../pages/ErrorPage";
import ProductsPage from "../pages/ProductsPage";
import CartPage from "../pages/CartPage";
import ProductDetailsPage from "../pages/ProductDetailsPage";
import CheckoutPage from "../pages/CheckoutPage";
import ProtectedRoute from "./ProtectedRoute";
import ProductManagement from "../pages/ProductManagement";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, path: "", element: <HomePage /> },
      { path: "home", element: <HomePage /> },
      { path: "products", element: <ProductsPage /> },
      { path: "product-management", element: <ProductManagement /> },
      { path: "products/:id", element: <ProductDetailsPage /> },
      { path: "cart", element: <CartPage /> },
      {
        path: "check-out",
        element: (
          <ProtectedRoute>
            <CheckoutPage />
          </ProtectedRoute>
        )
      },
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
