import styles from "./CartButton.module.css";

interface CartButtonProps {
  count: number;
}

export default function CartButton({ count }: CartButtonProps) {
  return (
    <button className={styles.cartBtn}>
      <img src="/cart(dark).png" className={styles.cartLogo} alt="cart" />
      <span className={styles.cartCount}>{count}</span>
      <span className={styles.cartText}>Корзина</span>
    </button>
  );
}
