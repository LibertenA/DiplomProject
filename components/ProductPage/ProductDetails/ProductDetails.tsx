import styles from "./ProductDetails.module.css";

interface ProductDetailsProps {
  id: number;
  title: string;
  color: string;
  memory: number;
  cpu: string;
  ram: number;
  system: string;
  display: number;
  resolution: string;
  weight: number;
  language: string;
}

export default function ProductDetails({
  id,
  title,
  color,
  memory,
  cpu,
  ram,
  system,
  display,
  resolution,
  weight,
  language,
}: ProductDetailsProps) {
  return (
    <div className={styles.ProductDetails}>
      <div className={styles.productCode}>
        <span className={styles.codeProduct}>Код товара:
          <span className={styles.codeProduct}> {id} </span>
        </span>
        
      </div>
      
      <h2 className={styles.productTitle}>
        {title}, {ram} ГБ, {memory} ГБ SSD, {color}
      </h2>
      <div className={styles.productColor}>
        <span className={styles.labelColor}>Цвет:
          <span className={styles.valueColor}> {color} </span>
        </span>
        <ul className={styles.colorChange}>
          <li className={styles.colorChangeItemActive}>
            <div className={styles.color}></div>
          </li>
          <li className={styles.colorChangeItem}>
            <div className={styles.color}></div>
          </li>
          <li className={styles.colorChangeItem}>
            <div className={styles.color}></div>
          </li>
          <li className={styles.colorChangeItem}>
            <div className={styles.color}></div>
          </li>
        </ul>
      </div>

      <div className={styles.productMemory}>
        <span className={styles.label}>Объем SSD:
          <span className={styles.value}> {memory} </span>
        </span>
        
        <div className={styles.memoryChoose}>
          <button className={styles.memoryBtn}>{memory} Гб</button>
          <button className={styles.memoryBtn}>{memory} Гб</button>
        </div>
      </div>

      <div className={styles.productInfoFeatures}>
        <h3 className={styles.titleFeatures}>Характеристики</h3>
        <table className={styles.featuresTable}>
          <tbody>
            <tr className={styles.featuresTableRow}>
              <th className={styles.featuresTableTh}>Процессор</th>
              <td className={styles.featuresTableTd}>{cpu}</td>
            </tr>
            <tr className={styles.featuresTableRow}>
              <th className={styles.featuresTableTh}>Память</th>
              <td className={styles.featuresTableTd}>
                ОЗУ/{ram} ГБ, SSD/{memory} ГБ
              </td>
            </tr>
            <tr className={styles.featuresTableRow}>
              <th className={styles.featuresTableTh}>ОС</th>
              <td className={styles.featuresTableTd}>{system}</td>
            </tr>
            <tr className={styles.featuresTableRow}>
              <th className={styles.featuresTableTh}>Экран</th>
              <td className={styles.featuresTableTd}>
                {display}" ({resolution})
              </td>
            </tr>
            <tr className={styles.featuresTableRow}>
              <th className={styles.featuresTableTh}>Вес</th>
              <td className={styles.featuresTableTd}>{weight} кг</td>
            </tr>
            <tr className={styles.featuresTableRowLast}>
              <th className={styles.featuresTableTh}>Раскладка клавиатуры</th>
              <td className={styles.featuresTableTd}>{language}</td>
            </tr>
          </tbody>
        </table>
        <a href="" className={styles.moreLink}>
          Все характеристики
        </a>
      </div>
    </div>
  );
}
