import { useRouter  } from 'next/navigation';
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import styles from "./Button.module.css";

interface Product {
  id: number;
  title: string;
  price: number;
  discount: number;
  count: number;
  image: string;
}

interface ProductButtonProps {
  product: Product;
}

export default function Button({ product }: ProductButtonProps) {

  const { add } = useCart();

  const router = useRouter();

  const [addedToCart, setAddedToCart] = useState(false);

  const handleClick = () => {
    console.log("Добавляемый товар:", product); 
    if (!addedToCart) {
      add(product),
      setAddedToCart(true)
    } else {
      router.push("/cart"); 
    };
  }  

  const buttonClass = `${styles.addToCartBtn} ${addedToCart ? styles.addedToCartBtn :  ""}`;

  return(
      <button className={buttonClass} onClick={handleClick}>
      <img src="/cart.png" className={styles.cartIcon} alt="cart" />
      {addedToCart ? <span className={styles.buttonText}>Оформить</span> : <span className={styles.buttonText}>В корзину</span>}
    </button>
  )    
}