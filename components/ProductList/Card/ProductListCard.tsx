"use client"

import Button from "@/components/Button";
import styles from "./ProductListCard.module.css";
import { useRouter } from "next/navigation";

interface Product {
  id: number;
  title: string;
  price: number;
  discount: number;
  count: number;
  images: string;
}

interface ProductListCardProps {
  product: Product;
}

export default function ProductListCard({ product }: ProductListCardProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/product/${product.id}`); 
  }  
  
  return (
    <div className={styles.productCard}>
      <div className={styles.productCardIcon} onClick={handleClick}>
        <img src={product.images} className={styles.productIcon} alt={product.title} />
      </div>

      <div className={styles.productCardMain}>
        <h3 className={styles.productCardTitle} onClick={handleClick}>{product.title}</h3> 
        <span className={styles.ProductPricePlace}>
          <p className={styles.productCardPrice}>{product.price - product.discount} ₽</p>
          <p className={styles.productCardOldPrice}>{product.price} ₽</p>
        </span>
      </div>

      <div className={styles.btnPlace}>
        <Button 
          product={{
          id: product.id,
          title: product.title,
          price: product.price,
          discount: product.discount,
          count: product.count,
          image: product.images[0],
        }} />
      </div>
      
    </div>
  );
}
