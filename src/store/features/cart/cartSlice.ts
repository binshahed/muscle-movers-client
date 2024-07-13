import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { message } from "antd";

import {
  cartTotalPrice,
  setLocalStorage,
  totalPricePerProduct,
  cartItems
} from "../../../utils/cartCommonFunc";
import { discountCalculator } from "../../../utils/discountCalculator";
import { TCartItem, CartState } from "../../../types/types.cart";

// Define types for cart items and state

// initial state
const initialState: CartState = {
  items: cartItems?.items || [],
  user: undefined,
  token: undefined,
  totalPrice: cartTotalPrice(cartItems) || 0
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state: CartState, action: PayloadAction<TCartItem>) => {
      const cartProduct = state.items.find(
        (product) => product?._id === action.payload?._id
      );

      console.log("pd quantity", action.payload.stockQuantity);
      console.log("cart quantity", cartProduct?.quantity);

      // if product not exist
      if (!cartProduct) {
        if (action.payload.stockQuantity > 0) {
          const cartPd: TCartItem = {
            ...action.payload,
            quantity: 1,
            productPrice: discountCalculator(
              action.payload.price,
              action.payload.discountPercentage
            )
          };

          state.items.push(cartPd);
          state.totalPrice = cartTotalPrice(state);
          setLocalStorage(state);
          message.success("Product added to cart.");
        } else {
          message.error("Product is not available.");
        }
      } else {
        // if product exists and stock is available
        if (cartProduct.quantity < action.payload.stockQuantity) {
          cartProduct.quantity++;
          cartProduct.productPrice = totalPricePerProduct(cartProduct, action);
          state.totalPrice = cartTotalPrice(state);
          setLocalStorage(state);
          message.success("Product quantity updated in cart.");
        } else {
          message.error("Insufficient stock for this product.");
        }
      }
    },

    removeFromCart: (state: CartState, action: PayloadAction<TCartItem>) => {
      const cartProduct = state.items.find(
        (product) => product?._id === action.payload?._id
      );

      // if cart item = 0 then remove from cart
      if (cartProduct && cartProduct.quantity === 1) {
        state.items = state.items.filter(
          (product) => product._id !== action.payload._id
        );
        state.totalPrice = cartTotalPrice(state);
        setLocalStorage(state);
      } else if (cartProduct) {
        // if cart item more than 1, reduce quantity
        cartProduct.quantity--;
        cartProduct.productPrice = totalPricePerProduct(cartProduct, action);
        state.totalPrice = cartTotalPrice(state);
        setLocalStorage(state);
      }
    },

    deleteItemFromCart: (state: CartState, action: PayloadAction<string>) => {
      state.items = state.items.filter(
        (product) => product._id !== action.payload
      );
      setLocalStorage(state);
      state.totalPrice = cartTotalPrice(state);
    },
    clearCart: (state: CartState) => {
      state.items = [];
      state.totalPrice = 0;
      setLocalStorage(state);
    }
  }
});

export const { addToCart, removeFromCart, deleteItemFromCart, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
