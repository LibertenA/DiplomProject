"use client";

import { useRouter  } from 'next/navigation';
import { useCart } from "@/context/CartContext";
import styles from "./Button.module.css";

interface Product {
  id: number;
  title: string;
  price: number;
  discount: number;
  image: string;
}

interface ProductButtonProps {
  product: Product;
}

export default function Button({ product }: ProductButtonProps) {

  const {items, add } = useCart();

  const router = useRouter();

  const addedToCart = items.some((item) => item.id === product.id);

  const handleClick = () => {
    if (!addedToCart) {
      add(product);
    } else{
      router.push("/cart"); 
    }
  };  

  const buttonClass = `${styles.addToCartBtn} ${addedToCart  ? styles.addedToCartBtn :  ""}`;

  return(
      <button className={buttonClass} onClick={handleClick}>
      <img src="/cart.png" className={styles.cartIcon} alt="cart" />
      {addedToCart ? <span className={styles.buttonText}>Оформить</span> : <span className={styles.buttonText}>В корзину</span>}
    </button>
  )    
}