import styles from "./ProductPresentation.module.css";

export default function ProductPresentation() {
    return (
        <div className={styles.placePresentation}>
            <div className={styles.mainIcon}>
                <img src="/products/product1.png" />
            </div>

            <ul className={styles.gallery}>
                <li><img src="/products/product1.png" /></li>
                <li><img src="/products/product1(2).png" /></li>
                <li><img src="/products/product1(3).png" /></li>
                <li><img src="/products/product1(4).png" /></li>
            </ul>
        </div>
    )
}