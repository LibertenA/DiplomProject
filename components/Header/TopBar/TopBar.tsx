import styles from "./TopBar.module.css";

export default function TopBar() {
  return (
    <div className={styles.topBar}>
      <ul className={styles.listTopBar}>
        <li> <span className={styles.locationText}>Воронеж</span></li>
        <li><a href="tel:+74731230676" className={styles.topBarLink}>+7 473 123-06-76</a>
        </li>
      </ul>

      <ul className={styles.listTopBar}>
        <li><a href="" className={styles.topBarLink}>О нас</a>
        </li>
        <li><a href="" className={styles.topBarLink}>Магазины</a>
        </li>
        <li><a href="" className={styles.topBarLink}>Оплата и доставка</a>
        </li>
        <li><a href="" className={styles.topBarLink}>Помощь</a>
        </li>
        <li><a href="" className={styles.topBarLink}>Контакты</a>
        </li>
      </ul>
    </div>
  );
}
