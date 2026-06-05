"use client";

import { createContext, useContext, useReducer, ReactNode } from "react";
import {  cartReducer, ProductWithCount, initialState } from "@/reducer/cartReducer";

type CartContextValue = {
  items: ProductWithCount[];
  totalCount: number,
  totalPrice: number,
  totalDiscount: number,
  add: (product: ProductWithCount) => void;
  increment: (id: number) => void;
  decrement: (id: number) => void;
  remove: (id: number) => void;
  getProductCount: (id: number) => number;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const totalCount = state.items.reduce(
    (sum, item) => sum + item.count,
    0
  );

  const totalPrice = state.items.reduce(
    (sum, item) => sum + item.price * item.count,
    0
  );

  const totalDiscount = state.items.reduce(
    (sum, item) => sum + item.discount * item.count,
    0
  );

  function getProductCount(id: number) {
    return state.items.filter((item) => item.id === id).length
  }

  function add(product: ProductWithCount) {
    dispatch({
      type: "ADD",
      payload: product
    });
  }

  function increment(id: number) {
    dispatch({
      type: "INCREMENT",
      payload: id
    });
  }

  function decrement(id: number) {
    dispatch({
      type: "DECREMENT",
      payload: id
    });
  }

  function remove(id: number) {
    dispatch({
      type: "REMOVE",
      payload: id
    });
  }

  const value: CartContextValue = {
    items: state.items,
    totalCount,
    totalPrice,
    totalDiscount,
    add,
    increment,
    decrement,
    remove,
    getProductCount,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }

  return context;
}

