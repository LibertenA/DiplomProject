import styles from "./ProductPresentation.module.css";

export default function ProductPresentation() {
  return (
    <div className={styles.placePresentation}>
      <div className={styles.mainIcon}>
        <img src="/products/product1.png" className={styles.mainIconImg} />
      </div>
      <ul className={styles.gallery}>
        <li className={styles.galleryItemActive}>
          <img src="/products/product1.png" className={styles.galleryImg} />
        </li>
        <li className={styles.galleryItem}>
          <img src="/products/product1(2).png" className={styles.galleryImg} />
        </li>
        <li className={styles.galleryItem}>
          <img src="/products/product1(3).png" className={styles.galleryImg} />
        </li>
        <li className={styles.galleryItem}>
          <img src="/products/product1(4).png" className={styles.galleryImg} />
        </li>
      </ul>
    </div>
  );
}
