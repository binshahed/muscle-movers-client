import { TCartItem, CartState } from "../types/types.cart";
import { TProduct } from "../types/types.products";
import { discountCalculator } from "./discountCalculator";

export const totalPricePerProduct = (
  cartProduct: TCartItem,
  action: { payload: TCartItem }
): number =>
  parseFloat(
    (
      cartProduct.quantity *
      discountCalculator(
        action.payload.price,
        action.payload.discountPercentage
      )
    ).toFixed(2)
  );

export const setLocalStorage = (state: CartState): void => {
  localStorage.setItem("cart", JSON.stringify(state));
};

export const cartTotalPrice = (state: CartState): number => {
  const totalPrice = state?.items?.reduce((prv, curr) => {
    return prv + curr.productPrice;
  }, 0);
  return totalPrice;
};

export const cartItems: CartState = JSON.parse(
  localStorage.getItem("cart") || '{"items": []}'
);

export const convertProductToCartItem = (product: TProduct): TCartItem => ({
  ...product,
  _id: product._id || "",
  price: product.price,
  discountPercentage: product.discountPercentage,
  quantity: 1,
  productPrice: discountCalculator(product.price, product.discountPercentage)
});
