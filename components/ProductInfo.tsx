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
        <div className="product-info">
            <div className="product-code">
                Код товара: <span> {code} </span>
            </div>

            <h2 className="product-title">{title}</h2>

            <div className="product-color">
                Цвет: <span> {color} </span>

                <ul className="color_change">
                    <li>
                        <div className="color"></div>
                    </li>
                    <li>
                        <div className="color"></div>
                    </li>
                    <li>
                        <div className="color"></div>
                    </li>
                    <li>
                        <div className="color"></div>
                    </li>
                </ul>
            </div>

            <div className="product-memory">
                Объем SSD: <span> {memory} </span>

                <div className="memory_choose">
                    <button className="memory_btn">
                        {memory} Гб
                    </button>

                    <button className="memory_btn">
                        {memory} Гб
                    </button>
                </div>
            </div>

            <div className="product-info__features">
                <h3 className="title_features">Характеристики</h3>

                <table className="features-table">
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

                <a href="" className="more-link">Все характеристики</a>
            </div>
            
        </div>
    )
}