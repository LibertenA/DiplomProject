"use client"

import CartOrderProduct from "../CartOrderProduct";
import CartProduct from "../CartProduct";
import { mockProducts } from "@/data/mockProducts";
import styles from "./CartProductsPlace.module.css";
import { useReducer } from "react";
import { cartReducer } from "@/reducer/cartReducer";

    const cartData = mockProducts.filter(product => product.count && product.count > 0).map(product => {
    const selectedColor = product.color?.[0] || { id: 'none', color: 'Стандартный', colorCode: 'transparent' };
    const selectedMemory = product.memory?.[0] || { id: 'none', memory: 0};

    return {
      id: product.id,
      price: product.price,
      title: product.title,
      images: product.images?.[0],
      count: product.count,
      discount: product.discount || 0,
      color: selectedColor?.color,
      colorCode: selectedColor?.colorCode,
      memory: selectedMemory?.memory,
      os: product.os ?? product.ios,
      display: product.display ?? product.screen,
    };
  });

export default function CartProductsPlace() {

  const [state, dispatch] = useReducer(cartReducer, cartData); 

  const totalCount = state.reduce(
    (sum, product) => sum + product.count,
    0,
  );

  const totalPrice = state.reduce(
    (sum, product) => sum + product.price * product.count,
    0,
  );

  const totalDiscount = state.reduce(
    (sum, product) => sum + product.discount * product.count,
    0,
  );

  return (
    <div className={styles.cartPlace}>
      <div className={styles.cartContainerLayout}>
        <h2 className={styles.cartTitle}>Корзина</h2>

        {state.map((item) => (
          <CartProduct key={item.id} {...item} dispatch={dispatch}/>
        ))}
      </div>

      <CartOrderProduct
        price={totalPrice}
        discount={totalDiscount}
        count={totalCount}
      />
    </div>
  );
}
