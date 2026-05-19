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
          <span className={styles.textBlock}>
            Apple MacBook Air A3240 – лёгкий и производительный ноутбук для тех, кто ценит мобильность и сочетание функций в одном устройстве. Он подходит для учебы, работы и творческих задач благодаря современному процессору и экрану с высоким разрешением. Модель выделяется голубым корпусом и обновлённой операционной системой macOS.
          </span>
          <span className={styles.textBlock}>
            13.6-дюймовый экран с разрешением 2560x1664 создаёт детализированную картинку с плотностью пикселей 224ppi. Матрица Liquid Retina на базе IPS с LED-подсветкой даёт широкие углы обзора 170-178° и яркость до 500 кд/м². Экран поддерживает HDR10, улучшая цветопередачу и контрастность при просмотре совместимого контента. Глянцевая поверхность подчёркивает насыщенность цветов, а режим защиты зрения снижает нагрузку на глаза при длительной работе. Соотношение сторон 16:10 расширяет вертикальное пространство для работы с документами и веб-страницами.
          </span>
        </div>
      </div>

      <ProductPrice
        product={priceProductData} 
      />
    </div>
  );
}
