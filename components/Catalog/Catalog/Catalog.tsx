"use client";

import { useEffect, useState } from "react";

import styles from "./Catalog.module.css";

import { Categories } from "@/components/Catalog/";
import { List } from "@/components/Catalog/";

type Product = {
  id: number;
  title: string;
  price: number;
  discount: number;
  category: string;
  images: {
    image_url: string;
  }[];
};

export default function Catalog() {
  const [products, setProducts] = useState<Product[]>([]);

  const [pickedCategory, setPickedCategory] = useState("");

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("/api/products");

        const data = await response.json();

        setProducts(data.products);

        const categories = [
          ...new Set(
            data.products.map(
              (product: Product) => product.category
            )
          ),
        ] as string[];

        if (categories.length > 0) {
          setPickedCategory(categories[0]);
        }

      } catch (error) {
        console.error(error);
      }
    }

    fetchProducts();
  }, []);

  const categories = [
    ...new Set(products.map((product) => product.category)),
  ];

  const filteredProducts = products.filter((product) => {
    return product.category === pickedCategory;
  });

  return (
    <div className={styles.CatalogPage}>
      <Categories
        categories={categories}
        pickedCategory={pickedCategory}
        setPickedCategory={setPickedCategory}
      />

      <div className={styles.listPlace}>
        {filteredProducts.map((item) => (
          <List
            key={item.id}
            product={{
              id: item.id,
              title: item.title,
              price: item.price,
              discount: item.discount,
              image: item.images?.[0]?.image_url || "",
            }}
          />
        ))}
      </div>
    </div>
  );
}