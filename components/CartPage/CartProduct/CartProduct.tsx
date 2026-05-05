"use client"

import { useState } from 'react';
import styles from "./CartProduct.module.css";
interface ColorOption {
  id: string;
  color: string;
  colorCode: string;
}

interface MemoryOption {
  id: string;
  memory: number;
}

interface CartProductProps {
  id: number;
  title: string;
  price: number;
  color: ColorOption[];
  memory: MemoryOption[];
  ram: number;
  count: number;
  images?: string[];
  [x: string]: any;
}

export default function CartProduct(props: CartProductProps) {

  const [count, setCount] = useState(props.count);

  const handleAddOne = () => {
    setCount(prev => prev + 1);
  };

  const handleRemoveOne = () => {
    setCount(prev => prev - 1);
  };

  return (
    <div className={styles.cartProductPlace}>
      <div className={styles.cartProductIcon}>
        <img src="/products/product1.png" alt={props.title} className={styles.cartProductIconImg}/>
      </div>

      <div className={styles.cartProductInfo}>
        <span className={styles.cartProductCode}>Код товара {props.id}</span>
        <h3 className={styles.cartProductName}>
          {props.title}, {props.ram} ГБ, {props.memory[0]?.memory} ГБ SSD, {props.color[0]?.color}
        </h3>
      </div>

      <div className={styles.cartProductCounter}>
        <button type="button" className={styles.counterBtn} onClick={handleRemoveOne}>
          <img src="/minus.png" alt="minus" />
        </button>
        <input
          type="number"
          className={styles.counterValue}
          value={count} 
          readOnly
        />
        <button type="button" className={styles.counterBtn} onClick={handleAddOne}>
          <img src="/plus.png" alt="plus" />
        </button>
      </div>

      <div className={styles.cartProductPrice}>
        <span className={styles.cartPrice}>{props.price} ₽</span>
      </div>
    </div>
  );
}
