import styles from "./ProductInfo.module.css";

interface ProductInfoProps {
    code: number;
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

export default function ProductInfo({code, title, color, memory, cpu, ram, system, display, resolution, weight, language}: ProductInfoProps) {
    return(
        <div className={styles.productInfo}>
            <div className={styles.productCode}>
                Код товара: <span> {code} </span>
            </div>

            <h2 className={styles.productTitle}>{title}</h2>

            <div className={styles.productColor}>
                Цвет: <span> {color} </span>

                <ul className={styles.colorChange}>
                    <li>
                        <div className={styles.color}></div>
                    </li>
                    <li>
                        <div className={styles.color}></div>
                    </li>
                    <li>
                        <div className={styles.color}></div>
                    </li>
                    <li>
                        <div className={styles.color}></div>
                    </li>
                </ul>
            </div>

            <div className={styles.productMemory}>
                Объем SSD: <span> {memory} </span>

                <div className={styles.memoryChoose}>
                    <button className={styles.memoryBtn}>
                        {memory} Гб
                    </button>

                    <button className={styles.memoryBtn}>
                        {memory} Гб
                    </button>
                </div>
            </div>

            <div className={styles.productInfoFeatures}>
                <h3 className={styles.titleFeatures}>Характеристики</h3>

                <table className={styles.featuresTable}>
                    <tbody>
                        <tr>
                            <th>Процессор</th>
                            <td>{cpu}</td>
                        </tr>
                        <tr>
                            <th>Память</th>
                            <td>ОЗУ/{ram} ГБ, SSD/{memory} ГБ</td>
                        </tr>
                        <tr>
                            <th>ОС</th>
                            <td>{system}</td>
                        </tr>
                        <tr>
                            <th>Экран</th>
                            <td>{display}" ({resolution})</td>
                        </tr>
                        <tr>
                            <th>Вес</th>
                            <td>{weight} кг</td>
                        </tr>
                        <tr>
                            <th>Раскладка клавиатуры</th>
                            <td>{language}</td>
                        </tr>
                    </tbody>
                </table>

                <a href="" className={styles.moreLink}>Все характеристики</a>
            </div>
            
        </div>
    )
}