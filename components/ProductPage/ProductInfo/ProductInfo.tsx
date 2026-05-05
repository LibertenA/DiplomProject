import {
  ProductDetails,
  ProductPresentation,
  ProductPrice,
} from "@/components/ProductPage/";
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
    images: string[];
    color: ColorOption[];
    memory: MemoryOption[];
    cpu: string;
    ram: number;
    system: string;
    display: number;
    resolution: string;
    weight: number;
    language: string;
    price: number;
    discount: number;
    installment: number;
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
          <span className={styles.textBlock}>
            Apple MacBook Air A3240 – лёгкий и производительный ноутбук для тех,
            кто ценит мобильность и сочетание функций в одном устройстве. Он
            подходит для учебы, работы и творческих задач благодаря современному
            процессору и экрану с высоким разрешением. Модель выделяется голубым
            корпусом и обновлённой операционной системой macOS.
          </span>
          <span className={styles.textBlock}>
            13.6-дюймовый экран с разрешением 2560x1664 создаёт детализированную
            картинку с плотностью пикселей 224ppi. Матрица Liquid Retina на базе
            IPS с LED-подсветкой даёт широкие углы обзора 170-178° и яркость до
            500 кд/м². Экран поддерживает HDR10, улучшая цветопередачу и
            контрастность при просмотре совместимого контента. Глянцевая
            поверхность подчёркивает насыщенность цветов, а режим защиты зрения
            снижает нагрузку на глаза при длительной работе. Соотношение сторон
            16:10 расширяет вертикальное пространство для работы с документами и
            веб-страницами.
          </span>
        </div>
      </div>

      <ProductPrice
        price={product.price}
        discount={product.discount}
        installment={product.installment}
      />
    </div>
  );
}
