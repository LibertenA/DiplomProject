import CartOrderProduct from "../CartOrderProduct";
import CartProduct from "../CartProduct";
import { mockProducts } from "@/data/mockProducts";
import styles from "./CartProductsPlace.module.css";

export default function CartProductsPlace() {
  const totalCount = mockProducts.reduce(
    (sum, product) => sum + product.count,
    0,
  );

  const totalPrice = mockProducts.reduce(
    (sum, product) => sum + product.price * product.count,
    0,
  );

  const totalDiscount = mockProducts.reduce(
    (sum, product) => sum + product.discount * product.count,
    0,
  );

  return (
    <div className={styles.cartPlace}>
      <div className={styles.cartContainer}>
        <h2 className={styles.cartTitle}>Корзина</h2>

        {mockProducts.map((product) => (
          <CartProduct key={product.id} {...(product as any)} />
        ))}
      </div>

      <CartOrderProduct
        price={totalPrice}
        discount={totalDiscount}
        count={totalCount}
      />
    </div>
  );
}
