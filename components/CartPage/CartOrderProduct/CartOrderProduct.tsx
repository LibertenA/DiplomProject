import styles from "./CartOrderProduct.module.css";

interface CartOrderProductProps {
  price: number;
  discount: number;
  count: number;
}

export default function CartOrderProduct({
  price,
  discount,
  count,
}: CartOrderProductProps) {
  const totalPrice = price - discount;

  return (
    <div className={styles.orderPlace}>
      <h3 className={styles.orderPlaceTitle}>Заказ</h3>

      <div className={styles.orderPlaceDetails}>
        <div className={styles.orderPlaceRow}>
          <span className={styles.orderPlaceLabel}>{count} товара</span>
          <span className={styles.orderPlaceLabel}>{price} ₽</span>
        </div>

        <div className={styles.orderPlaceRow}>
          <span className={styles.orderPlaceLabel}>Скидка</span>
          <span className={styles.orderPlaceLabel}>{-discount} ₽</span>
        </div>

        <div className={styles.orderPlaceRowTotalPrice}>
          <span className={styles.orderPlaceLabel}>К оплате</span>
          <span className={styles.orderPlaceTotalPriceValue}> {totalPrice} ₽</span>
        </div>
      </div>

      <button className={styles.purchaseBtn}>
        <span className={styles.purchaseBtnText}>Перейти к оформлению</span>
      </button>
    </div>
  );
}
