"use client"

import CartOrderProduct from "../CartOrderProduct";
import CartProduct from "../CartProduct";
import { useCart } from "@/context/CartContext";
import styles from "./CartPage.module.css";

export default function CartPage() {
    const {
      items,
      totalPrice,
      totalDiscount,
      totalCount,
    } = useCart();

  return (
    <div className={styles.cartPlace}>
      <div className={styles.cartContainerLayout}>
        <h2 className={styles.cartTitle}>Корзина</h2>

        {items.map((item) => (
          <CartProduct 
            key={item.id} 
            {...item} />
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
