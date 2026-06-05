import ProductListCard from "../Card/ProductListCard";

import styles from "./ProductList.module.css";

interface ProductsListProps {
  title: string;
}

async function getProducts() {
  const response = await fetch(
    "http://localhost:3000/api/products",
    {
      cache: "no-store",
    }
  );

  const data = await response.json();

  return data.products;
}

export default async function ProductsList({
  title,
}: ProductsListProps) {

  const products = await getProducts();

  return (
    <section className={styles.productListPlace}>
      <h2 className={styles.listTitle}>{title}</h2>

      <div className={styles.productList}>
        {products.slice(0, 4).map((product: any) => (
          <ProductListCard
            key={product.id}
            product={{
              id: product.id,
              title: product.title,
              price: product.price,
              discount: product.discount,
              image:
                product.images?.[0]?.image_url || "",
            }}
          />
        ))}
      </div>
    </section>
  );
}