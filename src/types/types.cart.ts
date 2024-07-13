import { TProduct } from "./types.products";

export interface TCartItem extends TProduct {
  quantity: number;
  productPrice: number;
}

export interface CartState {
  items: TCartItem[];
  user?: string;
  token?: string;
  totalPrice: number;
}
