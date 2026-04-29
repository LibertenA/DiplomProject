import styles from "./ProductPrice.module.css";

interface ProductPriceProps {
    price: number;
    discount: number;
    installment: number;
}

export default function ProductPrice({price, discount, installment}: ProductPriceProps) {
    return(
        <div className={styles.productCardAddToCart}>
            <div className={styles.productCardPriceBlock}>
                <span className={styles.oldPrice}> {price} ₽</span>
                <div className={styles.currentPrice}>
                    {price - discount} ₽
                </div>
            </div>

            <button type="button" className={styles.addToCartBtn}>
                <img src="/cart.png" className={styles.cartIcon}/>
                <span>В корзину</span>
            </button>

            <div className={styles.installmentInfo}>
                Доступно <a href="">в рассрочку</a> от {installment} ₽/мес
            </div>
        </div>
    )
}