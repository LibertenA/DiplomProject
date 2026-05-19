"use client";

import { useState } from "react";
import styles from "./Catalog.module.css";
import { Categories } from "@/components/Catalog/";
import { List } from "@/components/Catalog/";
import { mockProducts } from "@/data/mockProducts";

interface Product {
  id: number;
  title: string;
  price: number;
  discount: number;
  count: number;
  image: string;
}

interface ProductListCardProps {
  product: Product;
}


export default function Catalog ( {product}: ProductListCardProps) {
  
let categories: string[] = [];

  mockProducts.forEach((product) => {
    if (!categories.includes(product.category)) {
      categories.push(product.category);
    }
  });

  const [pickedCategory, setPickedCategory] = useState(categories[0]);

  const filteredProducts = mockProducts.filter((product) => {
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
              count: item.count,
              image: item.images[0],
            }} 
          />
        ))}
      </div>
    </div>
  )
}