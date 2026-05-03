import styles from "./ProductPrice.module.css";

interface ProductPriceProps {
  price: number;
  discount: number;
  installment: number;
}

export default function ProductPrice({
  price,
  discount,
  installment,
}: ProductPriceProps) {
  return (
    <div className={styles.productCardAddToCart}>
      <div className={styles.productCardPriceBlock}>
        <span className={styles.oldPrice}> {price} ₽</span>
        <span className={styles.currentPrice}> {price - discount} ₽ </span>
      </div>

      <button type="button" className={styles.addToCartBtn}>
        <img src="/cart.png" className={styles.cartIcon} alt="cart" />
        <span className={styles.btnText}>В корзину</span>
      </button>

      <div className={styles.installmentInfo}>
        <span className={styles.installmentText}>
          Доступно <a href="" className={styles.installmentLink}> в рассрочку </a> от {installment} ₽/мес
        </span>
      </div>
    </div>
  );
}
