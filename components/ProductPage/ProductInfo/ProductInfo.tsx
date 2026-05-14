import {
  ProductDetails,
  ProductPresentation,
  ProductPrice,
} from "@/components/ProductPage";
import styles from "./ProductInfo.module.css";

interface ColorOption {
  id: string;
  color: string;
  colorCode: string;
}

interface MemoryOption {
  id: string;
  memory: number;
}

interface ProductInfoProps {
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
    weight?: number;
    wifi?: boolean;
  };
}

export default function ProductInfo({ product }: ProductInfoProps) {

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
        product={{
          id: product.id,
          title: product.title,
          price: product.price,
          discount: product.discount,
          count: product.count,
          images: product.images[0],
        }} 
      />
    </div>
  );
}
