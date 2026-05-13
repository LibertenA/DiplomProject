"use client"

import ProductListCardButton from "../Button/ProductListCardButton";
import styles from "./ProductListCard.module.css";
import { useRouter } from "next/navigation";

interface ProductListCardProps {
  id: number;
  title: string;
  price: number;
  discount: number;
  images: string;
}

export default function ProductListCard({ id, title, price, discount, images }: ProductListCardProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/product/${id}`); 
  }  
  
  return (
    <div className={styles.productCard}>
      <div className={styles.productCardIcon} onClick={handleClick}>
        <img src={images} className={styles.productIcon} alt={title} />
      </div>
      <div className={styles.productCardMain}>
        <h3 className={styles.productCardTitle}>{title}</h3> 
        <span className={styles.ProductPricePlace}>
          <p className={styles.productCardPrice}>{price - discount} ₽</p>
          <p className={styles.productCardOldPrice}>{price} ₽</p>
        </span>
      </div>
      <ProductListCardButton />
    </div>
  );
}
