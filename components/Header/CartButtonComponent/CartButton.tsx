"use client"

import styles from "./CartButton.module.css";
import { useRouter  } from 'next/navigation';
import { useReducer } from "react";

interface CartButtonProps {
  count: number;
}

export default function CartButton({ count }: CartButtonProps) {
  const router = useRouter();

  const handleClick = () => {
      router.push("/cart"); 
  }  

  return (
    <button className={styles.cartBtn} onClick={handleClick}>
      <img src="/cart(dark).png" className={styles.cartLogo} alt="cart" />
      <span className={styles.cartCount}>{count}</span>
      <span className={styles.cartText}>Корзина</span>
    </button>
  );
}
