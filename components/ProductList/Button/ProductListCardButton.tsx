"use client"

import { useRouter  } from 'next/navigation';
import { useState } from "react";
import styles from "./ProductListCardButton.module.css";

export default function ProductListCardButton() {
  const router = useRouter();

  const [addedToCart, setAddedToCart] = useState(false);

  const handleClick = () => {
    if (!addedToCart) {
      setAddedToCart(true)
    } else {
      router.push("/cart"); 
    };
  }  

  const buttonClass = addedToCart ? styles.productAddedToCartButton : styles.productCartButton;

  return (
    <button className={buttonClass} onClick={handleClick}>
      <img src="/cart.png" className={styles.cartLogo} alt="cart" />
      {addedToCart ? <p className={styles.buttonText}>Оформить</p> : <p className={styles.buttonText}>В корзину</p>}
    </button>
  );                              
}

