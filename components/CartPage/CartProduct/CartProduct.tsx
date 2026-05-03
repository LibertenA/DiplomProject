import styles from "./CartProduct.module.css";

interface CartProductProps {
  id: number;
  title: string;
  price: number;
  color: string;
  memory: number;
  ram: number;
  count: number;
}

export default function CartProduct(props: CartProductProps) {
  return (
    <div className={styles.cartProductPlace}>
      <div className={styles.cartProductIcon}>
        <img src="/products/product1.png" alt={props.title} className={styles.cartProductIconImg}/>
      </div>

      <div className={styles.cartProductInfo}>
        <span className={styles.cartProductCode}>Код товара {props.id}</span>
        <h3 className={styles.cartProductName}>
          {props.title}, {props.ram} ГБ, {props.memory} ГБ SSD, {props.color}
        </h3>
      </div>

      <div className={styles.cartProductCounter}>
        <button type="button" className={styles.counterBtn}>
          <img src="/minus.png" alt="minus" />
        </button>
        <input
          type="number"
          className={styles.counterValue}
          defaultValue={props.count}
        />
        <button type="button" className={styles.counterBtn}>
          <img src="/plus.png" alt="plus" />
        </button>
      </div>

      <div className={styles.cartProductPrice}>
        <span className={styles.cartPrice}>{props.price} ₽</span>
      </div>
    </div>
  );
}
