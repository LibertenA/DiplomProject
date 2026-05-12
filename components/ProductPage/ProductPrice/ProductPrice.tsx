"use client"

import styles from "./ProductPrice.module.css";
import { useRouter  } from 'next/navigation';
import { useState } from "react";

interface ProductPriceProps {
  price: number;
  discount: number;
}

export default function ProductPrice({ price, discount }: ProductPriceProps) {

  const router = useRouter();

  const [addedToCart, setAddedToCart] = useState(false);

  const handleClick = () => {
    if (!addedToCart) {
      setAddedToCart(true)
    } else {
      router.push("/cart"); 
    };
  }  

  const buttonClass = addedToCart ? styles.addedToCartBtn : styles.addToCartBtn;

  return (
    <div className={styles.productCardAddToCart}>
      <div className={styles.productCardPriceBlock}>
        <span className={styles.oldPrice}> {price} ₽</span>
        <span className={styles.currentPrice}> {price - discount} ₽ </span>
      </div>

      <button className={buttonClass} onClick={handleClick}>
        <img src="/cart.png" className={styles.cartIcon} alt="cart" />
        {addedToCart ? <span className={styles.buttonText}>Оформить</span> : <span className={styles.buttonText}>В корзину</span>}
      </button>

      <div className={styles.installmentInfo}>
        <span className={styles.installmentText}>
          Доступно <a href="" className={styles.installmentLink}> в рассрочку </a> от {Math.round(price/12)} ₽/мес
        </span>
      </div>
    </div>
  );
}
