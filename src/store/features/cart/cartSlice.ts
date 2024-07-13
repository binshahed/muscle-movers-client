import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {
  cartTotalPrice,
  setLocalStorage,
  totalPricePerProduct,
  cartItems
} from "../../../utils/cartCommonFunc";
import { discountCalculator } from "../../../utils/discountCalculator";

// Define types for cart items and state
interface CartItem {
  _id: string;
  price: number;
  discountPercentage: number;
  quantity: number;
  productPrice: number;
}

interface CartState {
  items: CartItem[];
  user?: string;
  token?: string;
  totalPrice: number;
}

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
    addToCart: (state: CartState, action: PayloadAction<CartItem>) => {
      const cartProduct = state.items.find(
        (product) => product?._id === action.payload?._id
      );
      // if product not exist

      if (!cartProduct) {
        const cartPd: CartItem = {
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
      } else {
        // if product exists
        cartProduct.quantity++;
        cartProduct.productPrice = totalPricePerProduct(cartProduct, action);
        state.totalPrice = cartTotalPrice(state);
        setLocalStorage(state);
      }
    },

    removeFromCart: (state: CartState, action: PayloadAction<CartItem>) => {
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
    }
  }
});

export const { addToCart, removeFromCart, deleteItemFromCart } =
  cartSlice.actions;
export default cartSlice.reducer;
