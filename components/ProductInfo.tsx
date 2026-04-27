import PromoCard from "../components/PromoCard";

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
    const products = [
        { 
            title: "RTX 5090", 
            price: 350000, 
            rating: 5, 
            gpuInterface: "PCIe 5.0", 
            frequency: "2300 MHz" 
        },
        { 
            title: "RTX 5080", 
            price: 150000, 
            rating: 5, 
            gpuInterface: "PCIe 5.0", 
            frequency: "2300 MHz" 
        },
        { 
            title: "RTX 5070 Ti", 
            price: 110000, 
            rating: 5, 
            gpuInterface: "PCIe 5.0", 
            frequency: "2300 MHz" 
        },
        { 
            title: "RX 9070 XT", 
            price: 88000, 
            rating: 5, 
            gpuInterface: "PCIe 5.0", 
            frequency: "2400 MHz" 
        }
    ];

    return(
        <div className="product-info">
            <div className="product-code">
                Код товара: <span> {code} </span>
            </div>

            <h2 className="product-title">{title}</h2>

            <div className="product-color">
                Цвет: <span> {color} </span>

                <div className="color_change">
                    <ul>
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
            </div>

            <div className="product-memory">
                Объем SSD: <span> {memory} </span>

                <div className="memory_choose">
                    <button>
                        {memory} Гб
                    </button>
                    <button>
                        {memory} Гб
                    </button>
                </div>
            </div>

            <div className="product-info__features">
                <h3>Характеристики</h3>

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

            <div className="disription">
                <h2 className="discription-title">

                </h2>
                <span>

                </span>
            </div>

            <div className="accessories_place">
                <h2>Аксессуары</h2>
                <div className="product_place">
                    {products.map((product, index) => (
                    <PromoCard
                        key={index} 
                        title= {`Видеокарта ${product.title}`}
                        price={product.price}
                        /*rating={product.rating}
                        gpuInterface={product.gpuInterface}
                        frequency={product.frequency}*/
                    />
                    ))}
                </div>
            </div>
            <div className="similiar-product_place">
                <h2>Похожие товары</h2>
                <div className="product_place">
                    {products.map((product, index) => (
                    <PromoCard
                        key={index} 
                        title= {`Видеокарта ${product.title}`}
                        price={product.price}
                        /*rating={product.rating}
                        gpuInterface={product.gpuInterface}
                        frequency={product.frequency}*/
                    />
                    ))}
                </div>
            </div>
        </div>
    )
}