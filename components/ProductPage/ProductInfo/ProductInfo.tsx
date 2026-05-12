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
    price: number;
    discount: number;
    images: string[];
    color?: ColorOption[];
    memory?: MemoryOption[];
    language?: string;
    ram?: number;
    cpu?: string;
    display?: string | number;
    display_size?: string;
    resolution?: string;
    refresh_rate?: string | number;
    gpu?: string;
    gpu_tech?: string;
    battery?: string;
    ios?: string;
    os?: string;
    ai_features?: string;
    ai_camera?: string;
    ai_sensing?: string;
    folding_type?: string;
    expanded_display?: string;
    lights?: string;
    feature?: string;
    features?: string[];
    weight?: number;
    material?: string;
    pressure?: number;
    milk_system?: string;
    screen?: string;
    ai_vision?: string;
    modes?: number;
    pressure_cook?: boolean;
    steeping_timer?: boolean;
    steam?: boolean;
    diagonal?: number;
    connection?: string;
    peak_brightness?: string;
    local_dimming?: string;
    portability?: string;
    auto_keystone?: boolean;
    suction?: string;
    mop_washing?: string;
    airflow?: string;
    noise?: string;
    assistant?: string;
    protocol?: string;
    unlock?: string;
    efficiency?: string;
    backward_compatible?: boolean;
    chip?: string;
    curve?: string;
    spatial_audio?: boolean;
    sensor?: string;
    attachments?: number;
    versatility?: string;
    heat_modes?: number;
    charging?: string;
    blades?: string;
    feedback?: string;
    base?: string;
    amplitude?: string;
    bt_app?: boolean;
    anc?: string;
    immersion_mode?: boolean;
    bt?: string;
    power?: string;
    freq_range?: string;
    wired_inputs?: string;
    af?: string;
    camera?: string;
    flight_time?: string;
    video?: string;
    hypersmooth?: string;
    ibis?: string;
    video_360?: string;
    capacity?: string;
    auto_dos?: string;
    wifi?: boolean;
    width?: string;
    handmade?: boolean;
    antimicrobial?: string;
    fresher_zones?: number;
    heat_pump?: boolean;
    self_cleaning?: boolean;
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
      />
    </div>
  );
}
