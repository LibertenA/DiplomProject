import {
  ProductDetails,
  ProductPresentation,
  ProductPrice,
} from "@/components/ProductPage";
import styles from "./ProductPage.module.css";

interface ColorOption {
  id: string;
  color: string;
  colorCode: string;
}

interface MemoryOption {
  id: string;
  memory: number;
}

interface ProductPage {
  product: {
    id: number;
    title: string;
    price: number;
    discount: number;
    count: number;
    images: string[];
    color?: ColorOption[];
    memory?: MemoryOption[];
    display?: string; 
    cpu?: string;
    system?: string;
    features?: string;
    ram?: number;
    weight?: string;
    wifi?: boolean;
  };
}

export default function ProductPage({ product }: ProductPage) {

  const priceProductData = {
    id: product.id,
    title: product.title,
    price: product.price,
    discount: product.discount,
    count: product.count,
    image: product.images[0], 
  };

  return (
    <div className={styles.productFullPlace}>
      <div className={styles.productLeftPlace}>
        
        <div className={styles.productMainPlace}>
          <ProductPresentation images={product.images}/>
          <ProductDetails {...product} />
        </div>
        
        <div>
          <h2 className={styles.descriptionTitle}>Описание</h2>
        </div>
      </div>

      <ProductPrice
        product={priceProductData} 
      />
    </div>
  );
}
