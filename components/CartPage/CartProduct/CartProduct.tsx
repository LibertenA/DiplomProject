"use client"

import React from 'react';
import styles from "./CartProduct.module.css";
import { useRouter } from "next/navigation";

type Action =  { type: 'INCREMENT'; id: number } | { type: 'DECREMENT'; id: number } | { type: 'REMOVE'; id: number };

interface CartProductProps {
  id: number;
  title: string;
  price: number;
  discount: number;
  count: number;
  images: string; 
  dispatch: React.Dispatch<Action>;
}


export default function CartProduct(props: CartProductProps) { 

  const { dispatch } = props;

  const router = useRouter();

  const handleClick = () => {
    router.push(`/product/${props.id}`); 
  }  

  return (
    <div className={styles.cartProductPlace}>
      <div className={styles.cartProductIcon} onClick={handleClick}>
        <img src={props.images} alt={props.title} className={styles.cartProductIconImg}/>
      </div>

      <div className={styles.cartProductInfo}>
        <span className={styles.cartProductCode}>Код товара {props.id}</span>
        <h3 className={styles.cartProductName}>
          {props.title}
        </h3>
      </div>

      <div className={styles.cartProductCounter}>
        <button type="button" className={styles.counterBtn} onClick={() => dispatch({ type: 'DECREMENT', id: props.id })}>
          <img src="/minus.png" alt="minus" />
        </button>
        <input
          type="number"
          className={styles.counterValue}
          value={props.count} 
          readOnly
        />
        <button type="button" className={styles.counterBtn} onClick={() => dispatch({ type: 'INCREMENT', id: props.id })}>
          <img src="/plus.png" alt="plus" />
        </button>
      </div>

      <div className={styles.cartProductPrice}>
        <span className={styles.cartPrice}>{props.price} ₽</span>
      </div>
    </div>
  );
}
