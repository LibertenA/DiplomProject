"use client"

import styles from "./ProductPrice.module.css";
import Button from "@/components/Button";

interface Product {
  id: number;
  title: string;
  price: number;
  discount: number;
  count: number;
  image: string;
}

interface ProductPriceProps {
  product: Product;
}

export default function ProductPrice({ product }: ProductPriceProps) {

  return (
    <div className={styles.productCardAddToCart}>
      <div className={styles.productCardPriceBlock}>
        <span className={styles.oldPrice}> {product.price} ₽</span>
        <span className={styles.currentPrice}> {product.price - product.discount} ₽ </span>
      </div>

      <Button 
          product={{
          id: product.id,
          title: product.title,
          price: product.price,
          discount: product.discount,
          count: product.count,
          image: product.image,
        }} />

      <div className={styles.installmentInfo}>
        <span className={styles.installmentText}>
          Доступно <a href="" className={styles.installmentLink}> в рассрочку </a> от {Math.round(product.price/12)} ₽/мес
        </span>
      </div>
    </div>
  );
}
