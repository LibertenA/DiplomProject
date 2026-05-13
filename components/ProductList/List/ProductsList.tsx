import ProductListCard from "../Card/ProductListCard";
import { mockProducts } from "@/data/mockProducts";
import styles from "./ProductList.module.css";

interface ProductsListProps {
  title: string;
}

export default function ProductsList({ title }: ProductsListProps) {
  return (
    <section className={styles.productListPlace}>
      <h2 className={styles.listTitle}>{title}</h2> 
      
      <div className={styles.productList}>
        {mockProducts.slice(0, 4).map((product) => (
          <ProductListCard 
            id={product.id} 
            title={product.title} 
            price={product.price} 
            discount={product.discount}
            images={product.images[0]}
          />
        ))}
      </div>
    </section>
  );
}
