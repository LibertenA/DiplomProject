import ProductListCardButton from "../Button/ProductListCardButton";
import styles from "./ProductListCard.module.css";

interface ProductListCardProps {
  title: string;
  price: number;
}

export default function ProductListCard({ title, price }: ProductListCardProps) {
  return (
    <div className={styles.productCard}>
      <div className={styles.productCardIcon}>
        <img src="/products/product1.png" className={styles.productIcon} alt={title} />
      </div>
      <div className={styles.productCardMain}>
        <h3 className={styles.productCardTitle}>{title}</h3>
        <p className={styles.productCardPrice}>{price} ₽</p>
      </div>
      <ProductListCardButton />
    </div>
  );
}
