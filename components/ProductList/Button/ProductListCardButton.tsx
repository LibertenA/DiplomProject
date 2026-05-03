import styles from "./ProductListCardButton.module.css";

export default function ProductListCardButton() {
  return (
    <button className={styles.productCardButton}>
      <img src="/cart.png" className={styles.cartLogo} alt="cart" />
      <p className={styles.buttonText}>В корзину</p>
    </button>
  );
}
