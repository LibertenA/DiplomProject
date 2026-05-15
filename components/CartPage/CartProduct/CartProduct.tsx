"use client"

import styles from "./CartProduct.module.css";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";

interface CartProductProps {
  id: number;
  title: string;
  price: number;
  discount: number;
  count: number;
  image: string; 
}

export default function CartProduct(props: CartProductProps) { 

  const { increment, decrement, remove } = useCart();
  const router = useRouter();

  const handleClick = () => {
    router.push(`/product/${props.id}`); 
  }  

  return (
    <div className={styles.cartProductPlace}>
      <div className={styles.cartProductIcon} onClick={handleClick}>
        <img src={props.image} alt={props.title} className={styles.cartProductIconImg}/>
      </div>

      <div className={styles.cartProductInfo}>
        <span className={styles.cartProductCode}>Код товара {props.id}</span>
        <h3 className={styles.cartProductName}>
          {props.title}
        </h3>
      </div>

      <div className={styles.cartProductCounter}>
        <button type="button" className={styles.counterBtn} onClick={() => decrement(props.id)}>
          <img src="/minus.png" alt="minus" />
        </button>
        <input
          type="number"
          className={styles.counterValue}
          value={props.count} 
          readOnly
        />
        <button type="button" className={styles.counterBtn} onClick={() => increment(props.id)}>
          <img src="/plus.png" alt="plus" />
        </button>
      </div>

      <div className={styles.cartProductPrice}>
        <span className={styles.cartPrice}>{props.price} ₽</span>
      </div>
    </div>
  );
}
